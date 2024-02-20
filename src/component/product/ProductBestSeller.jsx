import React from 'react'
import ProductBestSellerCard from './ProductBestSellerCard'

export default function ProductBestSeller() {
  return (
    <div className="bg-[#FAFAFA] font-[Montserrat] font-bold py-10">
      <div className="container flex flex-col gap-2">
        <div>
          <h3 className="text-[24px] leading-[32px] tracking-wide">
            BESTSELLER PRODUCTS
          </h3>
        </div>
        <div className="bg-[#ECECEC] w-full h-[1px] my-[42px]"></div>
        <div className="flex justify-evenly gap-8 flex-wrap">
          <ProductBestSellerCard />
          <ProductBestSellerCard />
          <ProductBestSellerCard />
          <ProductBestSellerCard />
          <ProductBestSellerCard />
          <ProductBestSellerCard />
          <ProductBestSellerCard />
          <ProductBestSellerCard />
        </div>
      </div>
    </div>
  )
}
