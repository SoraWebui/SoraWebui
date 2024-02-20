

export const apiKey = process.env.OPENAI_API_KEY || 'sk-xxxxxx'
export const model = process.env.OPENAI_API_MODEL || 'sora-1.0-turbo'
export const baseUrl = process.env.OPENAI_API_BASE_URL || 'https://fake-sora-api.sorawebui.com'

export async function POST(req: Request, res: Response) {

  const json = await req.json();

  const prompt = json.prompt;

  const body = {
    "model": model,
    "prompt": prompt,
    "size": "1920X1080"
  }

  const result = await fetch(`${baseUrl}/v1/video/generations`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${apiKey}`
    },
  }).then(v => v.json()).catch(err => console.log(err));
  console.log("========");
  console.log(result);
  return new Response(JSON.stringify(result), {
    headers: { "Content-Type": "application/json" },
    status: 200
  });
}
