import React, { useEffect } from 'react'
import CategoryCard from './CategoryCard'
import BreadcrumbsCustom from '../BreadcrumbsCustom'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesAction } from '../../store/actions/globalActions'

export default function Categorys() {
  const categories = useSelector((store) => store.globalReducer.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategoriesAction())
  }, [])

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
          {categories
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 5)
            .map((category, i) => {
              return (
                <CategoryCard
                  key={i}
                  name={category.title}
                  rate={category.rating}
                  img={category.img}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}
