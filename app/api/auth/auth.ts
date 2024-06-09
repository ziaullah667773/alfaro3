import { NextRequest, NextResponse } from 'next/server';
import axios, { AxiosError } from 'axios';

const { SHOPIFY_SHOP_NAME, SHOPIFY_API_KEY, SHOPIFY_API_SECRET } = process.env;

export async function POST(request: NextRequest) {
  if (!SHOPIFY_SHOP_NAME || !SHOPIFY_API_KEY || !SHOPIFY_API_SECRET) {
    return NextResponse.json({ error: 'Environment variables are not properly configured.' }, { status: 500 });
  }

  const { email, password, firstName, lastName, action } = await request.json();

  if (action === 'signup') {
    try {
      const response = await axios.post(`https://${SHOPIFY_SHOP_NAME}.myshopify.com/admin/api/2022-01/customers.json`, {
        customer: {
          email,
          password,
          first_name: firstName,
          last_name: lastName,
        },
      }, {
        auth: {
          username: SHOPIFY_API_KEY,
          password: SHOPIFY_API_SECRET,
        },
      });

      const userData = response.data;
      return NextResponse.json(userData, { status: 200 });
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      return NextResponse.json({ error: errorMessage }, { status: 401 });
    }
  } else if (action === 'signin') {
    try {
      const response = await axios.post(`https://${SHOPIFY_SHOP_NAME}.myshopify.com/admin/api/2022-01/customers/authenticate.json`, {
        customer: {
          email,
          password,
        },
      }, {
        auth: {
          username: SHOPIFY_API_KEY,
          password: SHOPIFY_API_SECRET,
        },
      });

      const userData = response.data;
      return NextResponse.json(userData, { status: 200 });
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      return NextResponse.json({ error: errorMessage }, { status: 401 });
    }
  } else {
    return NextResponse.json({ error: 'Invalid action specified.' }, { status: 400 });
  }
}

interface ErrorResponse {
  error?: string;
  message?: string;
}

function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<ErrorResponse>;
    if (axiosError.response && axiosError.response.data) {
      const responseData = axiosError.response.data;
      if (typeof responseData === 'string') {
        return responseData;
      } else if (typeof responseData === 'object') {
        if (responseData.error) {
          return responseData.error;
        } else if (responseData.message) {
          return responseData.message;
        }
      }
    }
  }
  return 'Unknown error';
}
