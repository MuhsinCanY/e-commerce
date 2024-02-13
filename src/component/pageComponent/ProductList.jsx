import React from 'react'

export default function ProductList() {
  return (
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
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
      </div>
    </div>
  )
}

function ProductListItem() {
  return (
    <div className="flex flex-col gap-3 mb-4 w-[220px]   text-center font-[Montserrat] font-bold">
      <img
        src="/assets/product/product1.jpeg"
        className="object-cover h-[350px]"
      />
      <h4 className="text-[16px] pt-3">Grahic Design</h4>
      <p className="text-[14px] text-t-2">English Department</p>
      <p>
        <span className="text-[#BDBDBD] mr-2">$16.48</span>
        <span className="text-t-4">$6.48</span>
      </p>
      <div className="flex justify-center gap-2">
        <div className="size-4 bg-t-1 rounded-full"></div>
        <div className="size-4 bg-t-4 rounded-full"></div>
        <div className="size-4 bg-[#E77C40] rounded-full"></div>
        <div className="size-4 bg-t-3 rounded-full"></div>
      </div>
    </div>
  )
}
