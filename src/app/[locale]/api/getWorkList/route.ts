import {getWorkListByUserId} from "~/servers/work";

export async function POST(req: Request, res: Response) {

  const json = await req.json();
  const user_id = json.user_id;

  const works = await getWorkListByUserId(user_id);

  return new Response(JSON.stringify(works), {
    headers: { "Content-Type": "application/json" },
    status: 200
  });
}
