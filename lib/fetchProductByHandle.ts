import axios from 'axios';
import { ProductNode } from './shopify';

interface GraphQLResponse {
  data: {
    productByHandle: ProductNode;
  };
  errors?: Array<{ message: string }>;
}

const fetchProductByHandle = async (handle: string): Promise<ProductNode> => {
  console.log('Fetching product by handle:', handle);
  const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
  const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  console.log('SHOPIFY_STORE_DOMAIN:', SHOPIFY_STORE_DOMAIN);
  console.log('SHOPIFY_STOREFRONT_ACCESS_TOKEN:', SHOPIFY_STOREFRONT_ACCESS_TOKEN);

  if (!SHOPIFY_STORE_DOMAIN || !SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
    throw new Error("Shopify API credentials are not properly configured.");
  }

  const graphqlQuery = {
    query: `
      query productByHandle($handle: String!) {
        productByHandle(handle: $handle) {
          id
          title
          descriptionHtml
          tags
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
            edges {
              node {
                transformedSrc
                altText
              }
            }
          }
          options {
            name
            values
          }
          variants(first: 100) {
            edges {
              node {
                id
                title
                selectedOptions {
                  name
                  value
                }
                priceV2 {
                  amount
                  currencyCode
                }
                image {
                  transformedSrc
                  altText
                }
              }
            }
          }
        }
      }
    `,
    variables: { handle },
  };

  const endpoint = `https://${SHOPIFY_STORE_DOMAIN}/api/2022-07/graphql.json`;

  try {
    const response = await axios.post(endpoint, JSON.stringify(graphqlQuery), {
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
    });

    console.log('GraphQL response:', response.data);

    const jsonResponse = response.data as GraphQLResponse;

    if (response.data.errors) {
      console.error('GraphQL errors:', response.data.errors);
      throw new Error(`GraphQL errors: ${response.data.errors.map((err: { message: any; }) => err.message).join(', ')}`);
    }

    if (!jsonResponse.data || !jsonResponse.data.productByHandle) {
      throw new Error('Invalid API response structure');
    }

    return jsonResponse.data.productByHandle;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorDetails = error.response?.data || error.message;
      console.error('Error fetching product by handle:', errorDetails);
      throw new Error(`Failed to fetch product: ${errorDetails}`);
    } else {
      const unknownError = error as Error;
      console.error('An unexpected error occurred:', unknownError.message);
      throw new Error('An unexpected error occurred');
    }
  }
};

export default fetchProductByHandle;
