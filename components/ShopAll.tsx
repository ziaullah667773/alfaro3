'use client';

import React, { useEffect, useState } from 'react';
import { ProductNode } from '../lib/shopify';
import ProductCard2 from './ProductCard2';
import fetchProduct from 'lib/fetchProduct';

export const ShopAll = () => {
    const [products, setProducts] = useState<ProductNode[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const productsData = await fetchProduct();
                setProducts(productsData);
            } catch (err) {
                setError('Failed to fetch products');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        getProducts();
    }, []);

    if (isLoading) {
        return (
            <div className='container mx-auto flex items-center justify-center h-screen'>
                <p>Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className='container mx-auto flex items-center justify-center h-screen'>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className='container mx-auto'>
            <div className='bg-gradient-to-l from-blue-400 to-red-400 transition-all duration-500 ease-in-out transform hover:shadow-xl hover:shadow-blue-300 hover:scale-105 hover:border-none w-full h-[400px] rounded-xl flex items-center justify-center'>
                <h1 className='text-white font-extrabold text-[50px]'>Products</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-16'>
                {products.map((product) => {
                     const imageSrc =
                     product.images?.edges?.[0]?.node?.transformedSrc || "";
                    const title = product.title;
                    const description = product.description || (product.tags || []).join('');
                    const price = product.variants?.edges?.[0]?.node?.priceV2?.amount || 'N/A';
                    const rating = product.rating || 0;
                    return (
                        <ProductCard2
                            key={product.handle}
                            handle={product.handle}
                            img={imageSrc}
                            title={title}
                            desc={description}
                            rating={rating}
                            price={price}
                            imageAlt={product.images?.edges?.[0]?.node?.altText || 'Product Image'}
                        />
                    );
                })}
            </div>
        </div>
    );
};
