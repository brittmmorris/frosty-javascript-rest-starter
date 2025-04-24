require('dotenv').config();
const fetch = require('node-fetch');

const ROUTER_ID = process.env.ROUTER_ID;
const ROUTER_KEY = process.env.ROUTER_KEY;
const RULE = 'cost'; // can also be 'performance' or 'none'
const PROMPT = 'Tell me a fun fact about space';

async function callFrosty() {
  const url = new URL('https://api.gofrosty.ai/chat');
  url.searchParams.append('router_id', ROUTER_ID);
  url.searchParams.append('router_key', ROUTER_KEY);
  url.searchParams.append('prompt', PROMPT);
  url.searchParams.append('rule', RULE);

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.success === "True") {
      console.log("✅ AI Response:", data.response);
    } else {
      console.error("❌ Frosty Error:", data.response);
    }
  } catch (err) {
    console.error("🔥 Request failed:", err);
  }
}

callFrosty();
