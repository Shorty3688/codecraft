import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeOutput({ code, language }) {
  const langMap = {
    "Python": "python",
    "JavaScript": "javascript",
    "HTML/CSS": "html"
  };

  return (
    <pre className="rounded-md overflow-x-auto max-h-96 mt-4">
      <SyntaxHighlighter language={langMap[language] || "text"} style={atomOneDark}>
        {code}
      </SyntaxHighlighter>
    </pre>
  );
}