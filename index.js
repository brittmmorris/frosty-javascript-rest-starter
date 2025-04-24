import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const ROUTER_ID = process.env.ROUTER_ID;
const ROUTER_KEY = process.env.ROUTER_KEY;
const RULE = 'cost';
const PROMPT = 'Tell me a fun fact about space';

const url = new URL('https://api.gofrosty.ai/chat');
url.searchParams.append('router_id', ROUTER_ID);
url.searchParams.append('router_key', ROUTER_KEY);
url.searchParams.append('prompt', PROMPT);
url.searchParams.append('rule', RULE);

try {
  const response = await fetch(url);
  const data = await response.json();

  if (data.success === "True") {
    console.log("✅ AI Response:", data);
  } else {
    console.error("❌ Frosty Error:", data);
  }
} catch (err) {
  console.error("🔥 Request failed:", err);
}
