import React from 'react'
import CustomCarouser from '../component/CustomCarouser'
import EditorPick from '../component/EditorPick'
import ProductList from '../component/products/ProductList'
import Fluid from '../component/fluid/Fluid'
import Blog from '../component/blog/Blog'

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
