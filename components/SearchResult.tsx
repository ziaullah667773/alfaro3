import React from 'react'
import ProductCard from './ProductCard'

const SearchResult = ({filterData}:{filterData:any}) => {
  return (
    <div className='text-black w-[80%] mx-auto'>
      <div className='mt-10'>
        <div>
        <h1 className='text-2xl font-bold'>Results{filterData.length}</h1>
        <p>Products results </p>
        </div>
        <div>
          {
            filterData?.map((product:any)=>{
              return (
                // <h1 key={'item'}>{product.title}</h1>
                <div className='' key={product.id}>
                  {/* <ProductCard product={product}/> */}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SearchResult






