import {getUserByEmail} from "~/servers/user";

export async function POST(req: Request, res: Response) {
  let json = await req.json();
  let email = json.email;

  const result = await getUserByEmail(email);
  return Response.json(result);

}
