import React from 'react'

export default function Categorys() {
  return (
    <div className="custom-container-out py-10 bg-white">
      <div className="custom-container-in gap-1 justify-center">
        <CategoryCard name="Clotes" itemCount="5" />
        <CategoryCard name="Clotes" itemCount="5" />
        <CategoryCard name="Clotes" itemCount="5" />
        <CategoryCard name="Clotes" itemCount="5" />
        <CategoryCard name="Clotes" itemCount="5" />
      </div>
    </div>
  )
}

// /Users/muhsincanyilmaz/Desktop/Workintech/s12/e-commerce/public/assets/category/category1.jpeg

function CategoryCard({ name, itemCount }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 min-w-[190px] h-[190px] text-white font-[Montserrat] font-bold text-[16px] bg-[url('/assets/category/category1.jpeg')] bg-cover bg-center">
      <h4 className="pt-3">{name}</h4>
      <p className="font-normal text-[14px]">{itemCount} items</p>
    </div>
  )
}
