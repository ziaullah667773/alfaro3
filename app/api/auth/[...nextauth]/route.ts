import NextAuth, { NextAuthOptions, User } from 'next-auth';
import Providers from 'next-auth/providers';
import { OAuthConfig } from 'next-auth/providers';
//@ts-ignore
import { GraphQLClient } from 'graphql-request';

const shopifyProvider: OAuthConfig<any> = {
  id: 'shopify',
  name: 'Shopify',
  type: 'oauth',
  version: '2.0',
  authorization: {
    url: `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/admin/oauth/authorize`,
    params: { scope: process.env.SHOPIFY_SCOPES, grant_type: 'authorization_code' },
  },
  token: `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/admin/oauth/access_token`,
  clientId: process.env.SHOPIFY_CLIENT_ID!,
  clientSecret: process.env.SHOPIFY_CLIENT_SECRET!,
  userinfo: {
    async request(context) {
      const client = new GraphQLClient(`https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/admin/api/graphql`, {
        headers: {
          Authorization: `Bearer ${context.tokens.access_token}`,
        },
      });

      const query = `
        query {
          shop {
            id
            name
            email
          }
        }
      `;

      const data = await client.request(query);
      return {
        id: data.shop.id,
        name: data.shop.name,
        email: data.shop.email,
      };
    },
  },
  profile(profile) {
    return {
      id: profile.id,
      name: profile.name,
      email: profile.email,
    };
  },
};

const authOptions: NextAuthOptions = {
  providers: [shopifyProvider],
  callbacks: {
    async signIn({ user, account, profile }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token }) {
      session.user = token.user as User;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  pages: {
    signIn: '/signin',
    signOut: '/signout',
    error: '/error',
    verifyRequest: '/verify-request',
  },
};

export default NextAuth(authOptions);
