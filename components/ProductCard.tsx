
"use client";


import React, { useState, useEffect } from 'react';

import { ProductNode } from '../lib/shopify';
import ProductCard2 from './ProductCard2';
import fetchProduct from 'lib/fetchProduct';



const Products = () => {
    const [products, setProducts] = useState<ProductNode[]>([]);
    const [cart, setCart] = useState<ProductNode[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            const productsData = await fetchProduct();
            setProducts(productsData);
        };

        getProducts();
    }, []);

    // Function to handle adding a product to the cart
    const addToCart = (product: ProductNode) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    // Function to handle removing a product from the cart
    const removeFromCart = (product: ProductNode) => {
        setCart((prevCart) => prevCart.filter((item) => item.handle !== product.handle));
    };

    return (
        <div  className="container pt-16 mx-auto">
            <h1>Products</h1>
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                {products.map((product) => {
                    console.log('Product handle:', product.handle);
                    // Extract data to pass to ProductCard2
                    const imageSrc = product.images?.edges?.[0]?.node?.transformedSrc || '';
                    const title = product.title;
                    const description = product.description || product.tags.join(', ');
                    const price = product.priceRange.minVariantPrice.amount;
                    const rating = product.rating || 0; // Assuming rating is 0 if not provided

                    // Render ProductCard2 component
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

export default Products;



