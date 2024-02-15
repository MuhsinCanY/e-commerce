import React from 'react'
import CategoryCard from './CategoryCard'
import BreadcrumbsCustom from '../BreadcrumbsCustom'

export default function Categorys() {
  return (
    <div className="custom-container-out py-10 bg-[#FAFAFA]">
      <div className="flex flex-col">
        <BreadcrumbsCustom title="Shop" paths={[{ name: 'Home', href: '/' }]} />
        <div className="custom-container-in gap-1 justify-center">
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
