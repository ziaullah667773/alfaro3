import { ProductNode,  } from './shopify';

const fetchJubah = async (): Promise<ProductNode[]> => {
    const storeDomain = 'alfaro-ecom.myshopify.com';
    const storeFrontAccessToken = '29a238fcff3ce27873ee80a94dd5f837';
    const apiURL = `https://${storeDomain}/api/2022-07/graphql`;

    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': storeFrontAccessToken,
            },
            body: JSON.stringify({
                query: `
                    query productsByCollection($handle: String!) {
                        collectionByHandle(handle: $handle) {
                            title
                            products(first: 10) {
                                edges {
                                    node {
                                        title
                                        handle
                                        description
                                        tags
                                        priceRange {
                                            minVariantPrice {
                                                amount
                                            }
                                        }
                                        images(first: 1) {
                                            edges {
                                                node {
                                                    transformedSrc
                                                    altText
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                `,
                variables: {
                    handle: "jubah",
                },
            }),
        });

        // If the response status is not OK, log the error
        if (!response.ok) {
            console.error(`API Error: ${response.statusText} (HTTP ${response.status})`);
            const responseText = await response.text();
            console.error(`Response body: ${responseText}`);
            throw new Error(`API Error: ${response.statusText}`);
        }

        // Parse the JSON response
        const data = await response.json();

        // Log the response data to verify its structure
        console.log('API Response Data:', data);

        // Validate the API response structure
        const products = data?.data?.collectionByHandle?.products?.edges || [];
        if (!Array.isArray(products)) {
            console.error('Invalid API response structure:', data);
            throw new Error('Invalid API response structure');
        }

        // Map the array of `ProductEdge` objects to an array of `ProductNode` objects
        return products.map((edge: ProductNode) => edge.node);
    } catch (error) {
        console.error('fetchBaju error:', error);
        throw error;
    }
};

export default fetchJubah;
