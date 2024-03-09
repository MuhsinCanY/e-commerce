import React from 'react'

const src = '/assets/product/product-best.png'

export default function ProductBestSellerCard() {
  return (
    <div className="flex bg-white flex-col gap-3 pb-8 w-[250px] text-start font-[Montserrat] font-bold">
      <img src={src} className="object-cover h-[280px]" />

      <h4 className="text-[16px] pt-3 pl-5">Grahic Design</h4>
      <p className="text-[14px] text-t-2 pl-5">English Department</p>
      <p className="pl-5">
        <span className="text-[#BDBDBD] mr-2">$16.48</span>
        <span className="text-t-4">$6.48</span>
      </p>
    </div>
  )
}
