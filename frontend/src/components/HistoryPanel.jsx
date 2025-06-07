import React from "react";

export default function HistoryPanel({ history, onSelect }) {
  return (
    <div className="mt-4 border-t pt-4">
      <h3 className="font-semibold mb-2">Recent Generations</h3>
      <ul className="space-y-2">
        {history.map((item, idx) => (
          <li key={idx} className="text-sm cursor-pointer hover:text-blue-500" onClick={() => onSelect(item.code)}>
            {item.prompt.substring(0, 40)}...
          </li>
        ))}
      </ul>
    </div>
  );
}