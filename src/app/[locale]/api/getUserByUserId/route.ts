import {getUserById} from "~/servers/user";

export async function POST(req: Request, res: Response) {
  let json = await req.json();
  let user_id = json.user_id;

  const result = await getUserById(user_id);
  return Response.json(result);

}
