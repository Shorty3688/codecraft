import React from "react";

export default function PromptInput({ prompt, setPrompt, onGenerate }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">What would you like to build?</label>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Write me a Python function to calculate Fibonacci numbers"
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="4"
      />
      <button
        onClick={onGenerate}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Generate Code
      </button>
    </div>
  );
}