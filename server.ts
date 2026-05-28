import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(express.json());

  // API Routes (to be expanded)
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", platform: "Tooleefy" });
  });

  // Exchange Rates Cache
  let ratesCache: any = {
    fiat: null,
    crypto: null,
    lastUpdate: 0
  };

  app.get("/api/exchange-rates", async (req, res) => {
    const now = Date.now();
    const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

    try {
      if (ratesCache.fiat && ratesCache.crypto && (now - ratesCache.lastUpdate < CACHE_DURATION)) {
        return res.json({ fiat: ratesCache.fiat, crypto: ratesCache.crypto });
      }

      // Fetch Fiat (Frankfurter)
      const fiatResponse = await fetch("https://api.frankfurter.app/latest?from=USD");
      const fiatData: any = await fiatResponse.json();

      // Fetch Crypto (CoinGecko Markets for icons)
      const cryptoResponse = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false");
      const cryptoData: any = await cryptoResponse.json();

      ratesCache = {
        fiat: fiatData.rates,
        crypto: cryptoData.map((c: any) => ({
          id: c.id,
          symbol: c.symbol,
          name: c.name,
          current_price: c.current_price,
          image: c.image
        })),
        lastUpdate: now
      };

      res.json({ fiat: ratesCache.fiat, crypto: ratesCache.crypto });
    } catch (error) {
      console.error("Exchange rate fetch error:", error);
      // Return stale cache if available, otherwise 500
      if (ratesCache.fiat) {
        return res.json({ fiat: ratesCache.fiat, crypto: ratesCache.crypto, stale: true });
      }
      res.status(500).json({ error: "Failed to fetch rates" });
    }
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Tooleefy server running at http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
