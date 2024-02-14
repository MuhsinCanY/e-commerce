import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList() {
  return (
    <div className="custom-container-out py-10 bg-white">
      <div className="custom-container-in">
        <div className="flex flex-col font-[Montserrat] font-bold">
          <div className="flex flex-col gap-2 p-4 mb-10">
            <div className="text-center text-[20px] font-normal tracking-wider text-t-2">
              Featured Products
            </div>
            <div className="text-center text-[24px] tracking-wider text-t-3">
              BESTSELLER PRODUCTS
            </div>
            <div className="text-center text-[14px]  font-normal tracking-wide text-t-2">
              Problems trying to resolve the conflict between{' '}
            </div>
          </div>
          <div className="flex justify-center gap-4 flex-wrap">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  )
}
