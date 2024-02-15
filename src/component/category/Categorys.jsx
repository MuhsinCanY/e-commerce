import React from 'react'
import CategoryCard from './CategoryCard'

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
