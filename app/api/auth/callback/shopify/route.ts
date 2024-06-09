// app/api/auth/callback/shopify/route.ts
import { NextRequest, NextResponse } from 'next/server';
import axios, { AxiosError } from 'axios';
import crypto from 'crypto';

const SHOPIFY_CLIENT_ID = process.env.SHOPIFY_CLIENT_ID!;
const SHOPIFY_CLIENT_SECRET = process.env.SHOPIFY_CLIENT_SECRET!;
const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');
  const shop = searchParams.get('shop');
  const hmac = searchParams.get('hmac');
  const state = searchParams.get('state');
  const timestamp = searchParams.get('timestamp');
  const host = searchParams.get('host');

  console.log('Parameters:', { code, shop, hmac, state, timestamp, host });

  if (!code || !shop || !hmac || !timestamp || !host) {
    return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
  }

  // Validate HMAC
  const map = Object.fromEntries(searchParams.entries());
  delete map['signature'];
  delete map['hmac'];
  const message = new URLSearchParams(map).toString();
  const generatedHmac = crypto.createHmac('sha256', SHOPIFY_CLIENT_SECRET).update(message).digest('hex');

  if (generatedHmac !== hmac) {
    return NextResponse.json({ error: 'HMAC validation failed' }, { status: 400 });
  }

  const tokenUrl = `https://${shop}/admin/oauth/access_token`;

  try {
    const response = await axios.post(tokenUrl, {
      client_id: SHOPIFY_CLIENT_ID,
      client_secret: SHOPIFY_CLIENT_SECRET,
      code,
    });

    const accessToken = response.data.access_token;

    // Replace this with your own method to store the access token
    await storeAccessToken(shop, accessToken);

    // Redirect the user to the Shopify admin page or your app's dashboard
    const redirectUrl = `https://${shop}/admin/apps/${SHOPIFY_CLIENT_ID}`;
    return NextResponse.redirect(redirectUrl);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ error?: string }>;
      const errorMessage = axiosError.response?.data?.error || axiosError.message;
      return NextResponse.json({ error: errorMessage }, { status: 500 });
    } else if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
    }
  }
}

// Example function to store the access token
async function storeAccessToken(shop: string, accessToken: string) {
  // Implement your logic to store the access token securely
  console.log(`Storing access token for ${shop}: ${accessToken}`);
}
