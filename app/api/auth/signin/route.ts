import { NextRequest, NextResponse } from 'next/server';
import axios, { AxiosError } from 'axios';

const SHOPIFY_CLIENT_ID = process.env.SHOPIFY_CLIENT_ID!;
const SHOPIFY_CLIENT_SECRET = process.env.SHOPIFY_CLIENT_SECRET!;
const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
  }

  try {
    console.log('Sending request to Shopify:', {
      url: `https://${SHOPIFY_STORE_DOMAIN}/admin/api/2022-01/customers/authenticate.json`,
      auth: {
        username: SHOPIFY_CLIENT_ID,
        password: SHOPIFY_CLIENT_SECRET,
      },
      data: {
        customer: {
          email,
          password,
        },
      },
    });

    const response = await axios.post(`https://${SHOPIFY_STORE_DOMAIN}/admin/api/2022-01/customers/authenticate.json`, {
      customer: {
        email,
        password,
      },
    }, {
      auth: {
        username: SHOPIFY_CLIENT_ID,
        password: SHOPIFY_CLIENT_SECRET,
      },
    });

    const userData = response.data;
    return NextResponse.json(userData, { status: 200 });
  } catch (error: unknown) {
    console.error('Error:', error);

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
