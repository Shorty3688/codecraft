from black import format_str, FileMode
from yapf.yapflib.yapf_api import FormatCode

def format_code(code, lang):
    if lang == "Python":
        try:
            return format_str(code, mode=FileMode())
        except Exception:
            return code
    elif lang == "JavaScript":
        try:
            return FormatCode(code)[0]
        except Exception:
            return code
    return code