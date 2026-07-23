import { RequestHandler } from "express";

const DEFAULT_MEDUSA_API_URL = "https://admin.blame.cz";

function getMedusaConfig() {
  return {
    apiUrl:
      process.env.MEDUSA_API_URL ??
      process.env.VITE_MEDUSA_API_URL ??
      DEFAULT_MEDUSA_API_URL,
    publishableKey:
      process.env.MEDUSA_PUBLISHABLE_KEY ??
      process.env.VITE_MEDUSA_PUBLISHABLE_KEY ??
      "",
  };
}

export const handleMedusaProducts: RequestHandler = async (req, res) => {
  const { apiUrl, publishableKey } = getMedusaConfig();
  const upstreamUrl = new URL("/store/products", apiUrl);

  for (const [key, value] of Object.entries(req.query)) {
    if (typeof value === "string") {
      upstreamUrl.searchParams.set(key, value);
    } else if (Array.isArray(value)) {
      value.forEach((item) => {
        if (typeof item === "string") upstreamUrl.searchParams.append(key, item);
      });
    }
  }

  try {
    const response = await fetch(upstreamUrl, {
      headers: {
        Accept: "application/json",
        ...(publishableKey ? { "x-publishable-api-key": publishableKey } : {}),
      },
    });
    const body = await response.json();

    res.status(response.status).json(body);
  } catch (error) {
    console.error("Failed to fetch Medusa products:", error);
    res.status(502).json({
      message: "Unable to reach the Medusa product catalog.",
    });
  }
};
