export async function generateCode(prompt) {
  const response = await fetch("http://localhost:8000/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt })
  });

  if (!response.ok) throw new Error("API error");

  return await response.json();
}