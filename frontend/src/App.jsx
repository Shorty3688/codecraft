import React, { useState } from "react";
import PromptInput from "./components/PromptInput";
import CodeOutput from "./components/CodeOutput";
import ExportButtons from "./components/ExportButtons";
import ChatInterface from "./components/ChatInterface";
import HistoryPanel from "./components/HistoryPanel";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("auto");
  const [history, setHistory] = useState([]);

  const handleGenerate = async () => {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });
    const result = await response.json();
    setCode(result.code);
    setLanguage(result.language);

    const newEntry = { prompt, code: result.code };
    const updatedHistory = [newEntry, ...history].slice(0, 50);
    setHistory(updatedHistory);
    localStorage.setItem("codecraft_history", JSON.stringify(updatedHistory));
  };

  const handleRefine = async (refinement) => {
    const refinedPrompt = `${prompt}\n\nUser request: ${refinement}`;
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: refinedPrompt })
    });
    const result = await response.json();
    setCode(result.code);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">CodeCraft</h1>

      <PromptInput prompt={prompt} setPrompt={setPrompt} onGenerate={handleGenerate} />

      {code && (
        <>
          <CodeOutput code={code} language={language} />
          <ExportButtons code={code} />
          <ChatInterface onRefine={handleRefine} />
        </>
      )}

      <HistoryPanel history={history} onSelect={(code) => setCode(code)} />
    </div>
  );
}