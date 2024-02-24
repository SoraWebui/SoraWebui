import { signIn } from "next-auth/react";

export async function signInUseAuth({redirectPath}) {
  const result = await signIn('google', {
    callbackUrl: redirectPath
  })
}
