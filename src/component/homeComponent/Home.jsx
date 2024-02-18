import React from 'react'
import CustomCarouser from './CustomCarouser'
import EditorPick from './EditorPick'
import ProductList from './ProductList'
import Fluid from '../fluid/Fluid'
import Blog from '../blog/Blog'

export default function Home() {
  return (
    <div>
      <CustomCarouser />
      <ProductList />
      <CustomCarouser />
      <EditorPick />
      <Fluid />
      <Blog />
    </div>
  )
}
