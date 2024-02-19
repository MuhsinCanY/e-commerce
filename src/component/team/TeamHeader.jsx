import React from 'react'
import BreadcrumbsCustom from '../BreadcrumbsCustom'

export default function TeamHeader() {
  return (
    <div className="bg-white font-[Montserrat] font-bold p-10">
      <div className="container flex gap-4 flex-col justify-center items-center text-center">
        <p className="text-[16px] leading-[24px] tracking-wide">WHAT WE DO</p>
        <p className="md:text-[58px] text-[48px] leading-[80px] tracking-wider">
          Innovation tailored for you
        </p>
        <BreadcrumbsCustom
          current="Team"
          paths={[{ name: 'Home', href: '/' }]}
        />
      </div>
    </div>
  )
}
