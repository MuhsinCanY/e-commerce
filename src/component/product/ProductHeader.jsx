import React from 'react'
import BreadcrumbsCustom from '../BreadcrumbsCustom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCartShopping,
  faEye,
  faHeart,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { Carousel, CarouselItem } from 'react-bootstrap'

const src =
  'https://s3-alpha-sig.figma.com/img/2b79/e11e/d885dbe3ab31e6f0c95ec64b26599246?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WyCZNe6Iascj3vjALGaK9kBYDLQTP~hOKCwCJeeP53Uf8weqpmBqshPdUqV6jM8Nec~B5hfLL6-jW0Ja48GlgtZ-ff2IgqruIfW63wtPgqBWdfkQJ8-Gc~~U6RQiJFQ1YZD1F9Plv6L6k8IALJWOosIt4jJT6mzyxPB7tMTZH5GKPafsizn--dARVz6p9KBh6CIf4ygqZt-sz9Mir6MAZsBHx71cpApELYkcNbDPZOd6JUwqWa4FyGE2O01yeOaGPyrdTcz6Y-qGFxXV2pCUcuIaowjMURXAv0FRbC9jyNj8h4b4pfEdiyVb2pOyOKn7b0wVdErnMjOpwcwMfU8Bfg__'

export default function ProductHeader() {
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
          {/* left */}
          <div>
            {/* <img src={src} className="" /> */}
            <Carousel>
              <CarouselItem>
                <img className="" src={src} alt="First slide" />
                <Carousel.Caption className="position-absolute top-[180px]">
                  <div className="af-position-lg af-bg-dark-transparent py-3 w-[500px] text-start">
                    <div className="flex-1 flex flex-col gap-4 justify-center items-start"></div>
                  </div>
                </Carousel.Caption>
              </CarouselItem>
              <CarouselItem>
                <img className="" src={src} alt="First slide" />
                <Carousel.Caption className="position-absolute top-[180px]">
                  <div className="af-position-lg af-bg-dark-transparent py-3 w-[500px] text-start">
                    <div className="flex-1 flex flex-col gap-4 justify-center items-start"></div>
                  </div>
                </Carousel.Caption>
              </CarouselItem>
            </Carousel>
          </div>
          <div className="flex gap-4">
            <img src={src} className="w-[100px] h-[75px]" />
            <img src={src} className="w-[100px] h-[75px]" />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-3 text-t-3 p-3">
          {/* right */}
          <h4 className="text-[20px] leading-[30px] font-normal tracking-wider">
            Floating Phone
          </h4>
          <div className="flex  gap-2 justify-start items-center">
            <div className="text-[#F3CD03] flex gap-0.5">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <h6 className="text-t-2 text-[14px] leading-[24px] tracking-wider">
              10 Reviews
            </h6>
          </div>
          <h3 className="text-[24px] leading-[32px] tracking-wide">
            $1,139.33
          </h3>
          <h6 className="text-t-2 text-[14px] leading-[24px] tracking-wider">
            Availability : <span className="text-t-1">In Stock</span>
          </h6>
          <h6 className="text-t-2 text-[14px] leading-[20px] font-normal tracking-wider">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </h6>
          <div className="bg-[#e2e2e2] w-full h-[1px] my-[2px]"></div>
          <div className="flex gap-2.5">
            <div className="size-7 bg-t-1 rounded-full"></div>
            <div className="size-7 bg-t-4 rounded-full"></div>
            <div className="size-7 bg-[#E77C40] rounded-full"></div>
            <div className="size-7 bg-t-3 rounded-full"></div>
          </div>
          <div className="flex gap-3 items-center py-5">
            <button className="text-white bg-t-1 px-[20px] py-[10px] text-[14px] leading-[24px] tracking-wider rounded ">
              Select Options
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
