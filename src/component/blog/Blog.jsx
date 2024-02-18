import React from 'react'
import BlogHeader from './BlogHeader'
import BlogCard from './BlogCard'

export default function Blog() {
  return (
    <div className="custom-container-out py-10 bg-white">
      <div className="custom-container-in p-0 m-0 flex-col justify-center font-[Montserrat] font-bold">
        <BlogHeader />
        <div className="flex justify-center gap-3 flex-wrap ">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  )
}
