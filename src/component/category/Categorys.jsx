import React from 'react'
import CategoryCard from './CategoryCard'
import BreadcrumbsCustom from '../BreadcrumbsCustom'

export default function Categorys() {
  return (
    <div className="py-10 bg-[#FAFAFA]">
      <div className="container flex flex-col">
        <div className="flex justify-between items-center ">
          <h2 className="font-[Montserrat] font-bold text-[24px] ">Shop</h2>
          <BreadcrumbsCustom
            current="Shop"
            paths={[{ name: 'Home', href: '/' }]}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-1 justify-center flex-wrap">
          <CategoryCard name="Clotes" itemCount="5" />
          <CategoryCard name="Clotes" itemCount="5" />
          <CategoryCard name="Clotes" itemCount="5" />
          <CategoryCard name="Clotes" itemCount="5" />
          <CategoryCard name="Clotes" itemCount="5" />
        </div>
      </div>
    </div>
  )
}
