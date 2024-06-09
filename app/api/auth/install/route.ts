// app/api/auth/install/route.ts
import { NextRequest, NextResponse } from 'next/server';

const SHOPIFY_CLIENT_ID = process.env.SHOPIFY_CLIENT_ID!;
const SHOPIFY_SCOPES = process.env.SHOPIFY_SCOPES!;
const SHOPIFY_REDIRECT_URI = process.env.SHOPIFY_REDIRECT_URI!;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const shop = searchParams.get('shop');

  if (!shop) {
    return NextResponse.json({ error: 'Missing shop parameter' }, { status: 400 });
  }

  const installUrl = `https://${shop}/admin/oauth/authorize?client_id=${SHOPIFY_CLIENT_ID}&scope=${SHOPIFY_SCOPES}&redirect_uri=${encodeURIComponent(SHOPIFY_REDIRECT_URI)}`;

  return NextResponse.redirect(installUrl);
}
