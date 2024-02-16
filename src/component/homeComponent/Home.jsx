import React from 'react'
import CustomCarouser from './CustomCarouser'
import EditorPick from './EditorPick'
import ProductList from './ProductList'
import Fluid from '../fluid/Fluid'

export default function Home() {
  return (
    <div>
      <CustomCarouser />
      <EditorPick />
      <ProductList />
      <Fluid />
    </div>
  )
}
