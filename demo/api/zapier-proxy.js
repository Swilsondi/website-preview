// Vercel serverless function to proxy Zapier requests with secret key check
export default async function handler(req, res) {
  const SECRET_KEY = "07151999"; // Super secret key for Zapier proxy

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Check for secret key in header
  const apiKey = req.headers["x-api-key"];
  if (apiKey !== SECRET_KEY) {
    return res.status(401).json({ error: "Unauthorized: Invalid API key" });
  }

  try {
    // Log the incoming request body
    console.log("Zapier Proxy: Incoming body:", req.body);
    const response = await fetch(
      "https://hooks.zapier.com/hooks/catch/23855957/u2ji8z7/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );
    const data = await response.text();
    // Log the response from Zapier
    console.log("Zapier Proxy: Zapier response:", data);
    res.status(200).json({ zapierResponse: data });
  } catch (err) {
    console.error("Zapier Proxy: Error forwarding to Zapier:", err);
    res.status(500).json({ error: "Failed to forward to Zapier" });
  }
}
