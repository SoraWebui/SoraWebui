import {checkAndSaveUser} from "~/servers/user";

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);

export async function POST(req: Request, res: Response) {
  let json = await req.json();
  let token = json.token;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload();
  // console.log('payload-=-=-=-->', payload);
  let name = payload['name'];
  let email = payload['email'];
  let image = payload['picture'];

  const result = await checkAndSaveUser(name, email, image);

  return Response.json(result);
}
