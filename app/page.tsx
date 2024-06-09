'use client';

import Hero from "components/Hero";
import ProductCard2 from "components/ProductCard2";
import Testimonial from "components/Testimonial";
import fetchProducts from '../lib/fetchProduct';
import { ProductNode } from '../lib/shopify';
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<ProductNode[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductNode[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
        setFilteredProducts(productsData); // Initialize filtered products with all products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts();
  }, []);

  const handleFilter = (filtered: ProductNode[]) => {
    setFilteredProducts(filtered);
  };

  return (
    <div className="text-black">
      <Hero />
      {/* <Container/>
      <Filter products={products} onFilter={handleFilter} /> */}
      <div className="container mx-auto mt-20">
        <h2 className="font-medium text-2xl mb-5">Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {filteredProducts.map((product) => {
             const imageSrc =
             product.images?.edges?.[0]?.node?.transformedSrc || "";
            const title = product.title;
            const description = product.description || (product.tags ? product.tags.join(', ') : '');
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
      <Testimonial />
    </div>
  );
}
