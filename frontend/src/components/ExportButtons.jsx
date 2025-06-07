import React from "react";

function downloadFile(code, filename, ext) {
  const blob = new Blob([code], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${filename}.${ext}`;
  link.click();
  URL.revokeObjectURL(url);
}

export default function ExportButtons({ code }) {
  return (
    <div className="flex gap-2 mt-2">
      <button
        onClick={() => navigator.clipboard.writeText(code)}
        className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700"
      >
        Copy
      </button>
      <button
        onClick={() => downloadFile(code, "code", "py")}
        className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
      >
        .py
      </button>
      <button
        onClick={() => downloadFile(code, "script", "js")}
        className="px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700"
      >
        .js
      </button>
      <button
        onClick={() => downloadFile(code, "index", "html")}
        className="px-3 py-1 bg-orange-600 text-white rounded hover:bg-orange-700"
      >
        .html
      </button>
    </div>
  );
}