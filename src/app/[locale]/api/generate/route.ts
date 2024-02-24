import {apiKey, baseUrl, model} from "~/configs/openai";
import {checkAndSaveWork} from "~/servers/work";

export async function POST(req: Request, res: Response) {

  const json = await req.json();

  const input_text = json.prompt;

  const body = {
    "model": model,
    "prompt": input_text,
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

  // add or update work
  const user_id = json.user_id;
  if (user_id) {
    if (result.data) {
      if (result.data[0].revised_prompt) {
        // save work
        await checkAndSaveWork(user_id, input_text, result.data[0].revised_prompt, result.data[0].url);
      }
    }
  }

  return new Response(JSON.stringify(result), {
    headers: { "Content-Type": "application/json" },
    status: 200
  });
}
