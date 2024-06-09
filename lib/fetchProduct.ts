import axios from "axios";
import { ProductNode } from "./shopify"; // Assuming this file exists and is set up correctly

const fetchProduct = async (): Promise<ProductNode[]> => {
  // Directly using the values
  const SHOPIFY_STORE_DOMAIN = "alfaro-ecom.myshopify.com";
  const SHOPIFY_STOREFRONT_ACCESS_TOKEN = "29a238fcff3ce27873ee80a94dd5f837";

  console.log("Using domain:", SHOPIFY_STORE_DOMAIN);
  console.log("Using token:", SHOPIFY_STOREFRONT_ACCESS_TOKEN);

  if (!SHOPIFY_STORE_DOMAIN || !SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
    throw new Error("Shopify API credentials are not properly configured.");
  }

  const graphqlQuery = {
    query: `{
      products(first: 10) {
        edges {
          node {
            id
            title
            handle
            descriptionHtml
            images(first: 1) {
              edges {
                node {
                  transformedSrc
                  altText
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  priceV2 {
                    amount
                    currencyCode
                  }
                  sku
                  id
                }
              }
            }
          }
        }
      }
    }`,
  };

  const endpoint = `https://${SHOPIFY_STORE_DOMAIN}/api/2022-07/graphql.json`;

  try {
    const response = await axios.post(endpoint, JSON.stringify(graphqlQuery), {
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
      timeout: 10000, // Adjust this value based on your expected response time
    });

    if (response.data.errors) {
      console.error("GraphQL errors:", response.data.errors);
      throw new Error(
        `GraphQL errors: ${response.data.errors
          .map((err: { message: any }) => err.message)
          .join(", ")}`
      );
    }

    return response.data.data.products.edges.map(
      (edge: { node: ProductNode }) => edge.node
    );
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorDetails = error.response?.data || error.message;
      console.error("Axios error fetching products:", errorDetails);
      throw new Error(`Failed to fetch products: ${errorDetails}`);
    } else {
      console.error("Non-Axios error:", error);
      if (error instanceof Error) {
        throw new Error(`An unexpected error occurred: ${error.message}`);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  }
};

export default fetchProduct;
