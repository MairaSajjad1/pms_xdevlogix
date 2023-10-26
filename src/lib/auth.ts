import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET, 
  debug: process.env.NODE_ENV !== "production",
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Invalid Credentials");
          }
          const { email, password } = credentials;

          const response = await fetch(
            `https://www.demo.pms.crossdevlogix.com/api/login`,
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email,
                password,
              }),
            }
          );

          console.log("API Response:", response);

          const { user, token } = await response.json();

          if (response.status === 201 && user && token) {
            //API response has 'user' and 'token'
            return user as User; 
          }
          return null;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: "/", 
  },
};
