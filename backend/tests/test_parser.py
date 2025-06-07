from app.services.parser import detect_language, detect_framework

def test_detect_language_python():
    assert detect_language("Write a Python function") == "Python"

def test_detect_language_html():
    assert detect_language("Create an HTML form") == "HTML/CSS"

def test_detect_framework_react():
    assert detect_framework("Make a React component") == "React"