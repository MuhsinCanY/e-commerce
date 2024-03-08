import React, { useEffect, useState } from 'react'
import BreadcrumbsCustom from '../BreadcrumbsCustom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCartShopping,
  faEye,
  faHeart,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { Carousel, CarouselItem } from 'react-bootstrap'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../../store/actions/shoppingActions'

export default function ProductHeader() {
  const dispatch = useDispatch()
  const [count, setCount] = useState(1)
  const location = useLocation()
  const product = location.state

  const handleAddToCart = () => {
    let item = { count: count, checked: true, product: product }
    dispatch(addToCartAction(item))
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-[#FAFAFA] font-[Montserrat] font-bold py-10">
      <div className="container ">
        <BreadcrumbsCustom
          current="Product"
          paths={[{ name: 'Home', href: '/' }]}
        />
      </div>
      <div className="container flex gap-4 flex-col md:flex-row ">
        <div className="flex-1 flex gap-4 flex-col">
          <div>
            <Carousel>
              {product.images.map((img, i) => {
                return (
                  <CarouselItem key={i}>
                    <img
                      className="max-h-[550px] object-contain"
                      src={img.url}
                      alt="First slide"
                    />
                    <Carousel.Caption className="position-absolute top-[180px]">
                      <div className="af-position-lg af-bg-dark-transparent py-3 w-[500px] text-start">
                        <div className="flex-1 flex flex-col gap-4 justify-center items-start"></div>
                      </div>
                    </Carousel.Caption>
                  </CarouselItem>
                )
              })}
            </Carousel>
          </div>
          <div className="flex gap-4">
            {product.images.map((img, i) => {
              return (
                <img
                  key={i}
                  src={img.url}
                  className="w-[100px] h-[75px] object-contain"
                />
              )
            })}
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-3 text-t-3 px-3">
          {/* right */}
          <h4 className="text-[30px] leading-[40px] font-normal tracking-wider">
            {product.name}
          </h4>
          <div className="flex  gap-2 justify-start items-center">
            <div className="text-[#F3CD03] flex gap-0.5">
              {Array.from({ length: Math.round(product.rating) }).map(
                (_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} />
                )
              )}
            </div>
            <h6 className="text-t-2 text-[14px] leading-[24px] tracking-wider">
              {product.rating} Rating
            </h6>
          </div>
          <h3 className="text-[24px] leading-[32px] tracking-wide">
            <span className="text-[#BDBDBD] mr-2 line-through">
              ${(product.price + 10).toFixed(2)}
            </span>
            ${product.price.toFixed(2)}
          </h3>
          <h6 className="text-t-2 text-[14px] leading-[24px] tracking-wider">
            Availability :{' '}
            <span className="text-t-1">{product.stock} in Stock</span>
          </h6>
          <h6 className="text-t-2 text-[14px] leading-[20px] font-normal tracking-wider">
            {product.description}
          </h6>
          <div className="bg-[#e2e2e2] w-full h-[1px] my-[2px]"></div>
          <div className="flex gap-2.5">
            <div className="size-7 bg-t-1 rounded-full"></div>
            <div className="size-7 bg-t-4 rounded-full"></div>
            <div className="size-7 bg-[#E77C40] rounded-full"></div>
            <div className="size-7 bg-t-3 rounded-full"></div>
          </div>
          <div className="pt-3 flex items-center">
            <button
              onClick={() => {
                if (count > 1) {
                  setCount((c) => c - 1)
                }
              }}
              className="px-3 py-1 bg-slate-400 rounded"
            >
              -
            </button>
            <p className="px-3">{count}</p>
            <button
              onClick={() => {
                setCount((c) => c + 1)
              }}
              className="px-3 py-1 bg-slate-400 rounded"
            >
              +
            </button>
          </div>
          <div className="flex gap-3 items-center ">
            <button
              onClick={handleAddToCart}
              className="text-white bg-t-1 px-[20px] py-[10px] text-[14px] leading-[24px] tracking-wider rounded "
            >
              Add to Cart
            </button>
            <FontAwesomeIcon
              icon={faHeart}
              className="size-4 p-2.5 border-1 border-[#E8E8E8] rounded-full"
            />
            <FontAwesomeIcon
              icon={faCartShopping}
              className="size-4 p-2.5 border-1 border-[#E8E8E8] rounded-full"
            />
            <FontAwesomeIcon
              icon={faEye}
              className="size-4 p-2.5 border-1 border-[#E8E8E8] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
