import React, { useState } from "react";

export default function ChatInterface({ onRefine }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onRefine(input);
      setInput("");
    }
  };

  return (
    <div className="mt-4 border-t pt-4">
      <h3 className="font-semibold mb-2">Refine Your Code</h3>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="E.g., Make this more readable"
          className="flex-grow p-2 border rounded"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}