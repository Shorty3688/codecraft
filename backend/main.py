from fastapi import FastAPI
from app.api.routes import router as api_router

app = FastAPI(title="CodeCraft API", version="0.1.0")
app.include_router(api_router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Welcome to CodeCraft!"}