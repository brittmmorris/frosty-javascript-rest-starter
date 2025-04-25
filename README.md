# Frosty JavaScript REST Example

This Node.js script shows how to send a prompt to Frosty AI using the REST API.

---

## ⚙️ Setup

1. Clone the repo

```bash
git clone https://github.com/brittmmorris/frosty-javascript-rest-starter
cd frosty-javascript-rest-starter
```

2. Copy `.env.example` to `.env` and fill in your Router Key and Router Id.

3. Install dependencies:

```bash
    npm install
```
4.  Run the script:
```bash
    node index.js
```

⚠️ **Note:** Don't expose your Router Key in client-side code (e.g., React apps). 
Always proxy requests through a backend to keep keys secure.

## 🧠 What It Does
- Calls Frosty’s /chat endpoint with a prompt
- Authenticates with router_id and router_key
- Supports routing rules like cost, performance, or none
- Handles retries, logging, and observability for you


## 💡 Example Output
```json
{
  "trace_id": "a37a5ae7-62ec-481e-89b7-2952b721b023",
  "total_tokens": 40,
  "prompt_type": "chat",
  "prompt_tokens": 11,
  "response_tokens": 29,
  "model": "claude-3-sonnet-20240229",
  "provider": "Anthropic",
  "total_time": 878.59,
  "prompt": [
    {
      "role": "user",
      "content": "Tell me a joke"
    }
  ],
  "cost": "- -",
  "rule": "cost",
  "response": "Here's a silly joke for you: Why can't a bicycle stand up by itself? It's two-tired!",
  "success": "True"
}
```
## 📎 Helpful Links
- 🔐 [Frosty Console](https://console.gofrosty.ai)
- 📚 [Frosty API Docs](https://docs.gofrosty.ai/frosty-ai-docs/api-documentation)
