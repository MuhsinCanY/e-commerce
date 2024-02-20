import React from 'react'

const src =
  'https://s3-alpha-sig.figma.com/img/0bfc/bfef/c49b63d0071c5ef94c3d4dde5f05172f?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cut4aSiBEZiyzUkt58S8gJ69H3-T56K3KQXAnVJYOIG8ZUFaiFfcDF5pFHiQpSZRa3vSXLvUXW2GtIUWYDM9~N0NLd0UgHRJxLGO65WL7uaYk4tevT81XFxVLQJvRlFgyehp0uzdiDleWzhswtqx5pCKGjM6YTzJEKs9EhmBuruxlZSdpifmtrJR9DpgU~TriboqbU4ag-qSex8-7wz1exIhUb8f3jCfpTp31xGSzRot7ol7QB2ylx7SQLO0MAqEyxXLja~aYgGDnnKD0G8yfGPCreFZ2n-XHyQErqCb-cHA-l0Mf3pTS-f3D0ZJB~SwFiOMEizzTXU-PhcEGaeo1A__'

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
