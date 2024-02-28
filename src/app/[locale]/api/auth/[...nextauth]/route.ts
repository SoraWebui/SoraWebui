import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import {checkAndSaveUser} from "~/servers/user";

const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_ID
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: false,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      await checkAndSaveUser(user.name, user.email, user.image);
      return true
    },
    async redirect({url, baseUrl}){
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
