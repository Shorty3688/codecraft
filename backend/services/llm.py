import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_code_with_openai(prompt):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are an AI assistant who writes clean, well-documented code."},
            {"role": "user", "content": prompt}
        ]
    )
    return response.choices[0].message.content.strip()