def detect_language(prompt):
    prompt = prompt.lower()
    if any(kw in prompt for kw in ["html", "css", "javascript", "react", "vue"]):
        return "HTML/CSS"
    elif "python" in prompt:
        return "Python"
    elif "javascript" in prompt:
        return "JavaScript"
    return "auto"

def detect_framework(prompt):
    prompt = prompt.lower()
    if "react" in prompt:
        return "React"
    elif "django" in prompt:
        return "Django"
    return None

def detect_style(prompt, language):
    prompt = prompt.lower()
    if "pep8" in prompt and language == "Python":
        return "PEP8"
    elif "airbnb" in prompt and language == "JavaScript":
        return "Airbnb"
    return None