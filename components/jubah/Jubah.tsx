 'use client'
import React, { useEffect, useState } from 'react'
import jubahData from './jubahData'
import ProductCard2 from '../ProductCard2'

import { ProductNode } from 'lib/shopify'
import fetchJubah from 'lib/fetchJubah'

const Jubah = () => {
  const [products,setProducts]=useState<ProductNode[]>([]);

  useEffect(()=>{
    const getProducts=async()=>{
      const productsData=await fetchJubah();
      setProducts(productsData)
    };
    getProducts();
  },[])
  return (
    <div className="container mx-auto">
    <div className="bg-gradient-to-l from-blue-400 to-red-400 transition-all duration-500 ease-in-out  transform hover:shadow-xl hover:shadow-blue-300 hover:scale-105 hover:border-none w-full h-[400px] rounded-xl flex items-center justify-center">
      <h1 className="text-white font-extrabold text-[50px]">Jubah</h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-16">
      {products.map((product) => {
        const imageSrc=product.images?.edges?.[0].node?.transformedSrc || "";
        const title =product.title;
        const description =product.description || product.tags.join('');
        const price=product.priceRange.minVariantPrice.amount;
        const rating=product.rating || 0;
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
       )
})}
    </div>
  </div>
  )
}

export default Jubah