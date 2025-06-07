from fastapi import APIRouter
from pydantic import BaseModel
from typing import Optional
from app.services.llm import generate_code_with_openai
from app.services.parser import detect_language, detect_framework, detect_style
from app.services.formatter import format_code

router = APIRouter()

class GenerateRequest(BaseModel):
    prompt: str
    language: Optional[str] = "auto"
    explain: bool = False
    model: str = "gpt-3.5-turbo"

@router.post("/generate")
async def generate_code(request: GenerateRequest):
    detected_lang = request.language if request.language != "auto" else detect_language(request.prompt)
    full_prompt = request.prompt
    if request.explain:
        full_prompt += "\n\nInclude inline comments explaining each part."

    raw_code = generate_code_with_openai(full_prompt)
    formatted_code = format_code(raw_code, detected_lang)

    return {
        "code": formatted_code,
        "language": detected_lang
    }