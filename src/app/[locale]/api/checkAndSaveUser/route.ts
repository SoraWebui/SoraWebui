import {checkAndSaveUser} from "~/servers/user";

export async function POST(req: Request, res: Response) {
  let json = await req.json();
  let name = json.name;
  let email = json.email;
  let image = json.image;

  const result = await checkAndSaveUser(name, email, image);
  return Response.json(result);
}
