import NextAuth, { NextAuthOptions, Session } from 'next-auth';
import { JWT as NextAuthJWT } from 'next-auth/jwt';
import DiscordProvider from 'next-auth/providers/discord';
import { connect } from '@/lib/mongodb';
import Guild from '@/models/Guild';

interface CustomJWT extends NextAuthJWT {
  accessToken?: string;
  id?: string;
  username?: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: 'https://discord.com/api/oauth2/authorize?scope=identify%20email',
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  callbacks: {
    async jwt({ token, account }) {
      await connect();

      if (account) {
        token.accessToken = account.access_token;
        token.id = account.providerAccountId;

        // Fetch user information directly
        const userResponse = await fetch('https://discord.com/api/users/@me', {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        });

        const userProfile = await userResponse.json();
        token.username = userProfile.username || '';

        // Remove guild fetching logic
        // No need to update the Guild model as guilds are not fetched
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: CustomJWT }) {
      session.accessToken = token.accessToken || '';
      session.user = {
        ...session.user,
        id: token.id || '',
        name: token.username || '', // Set the username correctly
      };
      return session;
    },
  },
  debug: true,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
