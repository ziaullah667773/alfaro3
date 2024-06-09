// Assuming ProductNode is defined in lib/shopify.ts
export interface ProductImage {
    transformedSrc: string;
    altText?: string;
}
export interface ReviewData {
    id: string;
    content: string;
    author: string;
    rating: number;  // Ensure this matches the type definition
}

export interface ProductVariant {
    priceV2: any;
    id: string;
    title: string;
    selectedOptions: {
        name: string;
        value: string;
    }[];
    price: string;
    availableForSale: boolean;
}

export interface ProductOption {
    name: string;
    values: string[];
}

export interface ReviewData {  // Updated to use actual review data
    id: string;
    author: string;
    content: string;
    rating: number;
}

export interface ProductNode {
    node: any;
    rating: number;
    handle: any;
    averageRating: number;
    reviews: ReviewData[];
    description: string;
    id: string;
    title: string;
    descriptionHtml: string;
    tags: string[];
    priceRange: {
        minVariantPrice: {
            amount: string;
            currencyCode: string;
        };
    };
    images: {
        edges: Array<{
            node: ProductImage;
        }>;
    };
    options: ProductOption[];
    variants: {
        edges: Array<{
            node: ProductVariant;
        }>;
    };
}
export interface ProductsResponse {
    data: {
        products: {
            edges: Array<{ node: ProductNode }>;
        };
    };
    errors?: Array<{ message: string }>;
}
