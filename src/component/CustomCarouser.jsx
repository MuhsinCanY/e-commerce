import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/CarouselItem'
import carousel from '/assets/carousel/carousel1.jpeg'
import { useState } from 'react'

function CustomCarouser() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  const itemClass = 'md:h-[750px] h-[500px] object-cover object-top'

  return (
    <div className=" custom-container-out bg-[#00a5cb]">
      <div className="w-full">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="bg-[#00b7dc]"
        >
          <CarouselItem>
            <img className={itemClass} src={carousel} alt="First slide" />
            <Carousel.Caption className="position-absolute top-[100px] md:top-[180px]">
              <div className="af-position-lg af-bg-dark-transparent py-3 w-[500px] text-start">
                <div className="flex-1 flex flex-col gap-4 justify-center items-start">
                  <p className="text-white text-sm tracking-wide">
                    SUMMER 2020
                  </p>
                  <h3 className="text-white leading-[50px] md:leading-[80px] text-[30px] md:text-[50px]  font-bold  tracking-wider">
                    NEW COLLECTION
                  </h3>
                  <p className="text-white  text-[15px] md:text-[20px] font-normal leading-[30px] tracking-wider md:w-[400px] w-[250px]">
                    We know how large objects will act, but things on a small
                    scale.
                  </p>
                  <div className="flex gap-[10px]">
                    <button className="bg-s text-white md:px-[40px] px-[30px] md:py-[15px] py-[10px] rounded md:text-[24px] text-[18px] font-bold tracking-wider">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img className={itemClass} src={carousel} alt="First slide" />
            <Carousel.Caption className="position-absolute top-[100px] md:top-[180px]">
              <div className="af-position-lg af-bg-dark-transparent py-3 w-[500px] text-start">
                <div className="flex-1 flex flex-col gap-4 justify-center items-start">
                  <p className="text-white text-sm tracking-wide">
                    SUMMER 2020
                  </p>
                  <h3 className="text-white leading-[50px] md:leading-[80px] text-[30px] md:text-[50px]  font-bold  tracking-wider">
                    NEW COLLECTION
                  </h3>
                  <p className="text-white  text-[15px] md:text-[20px] font-normal leading-[30px] tracking-wider md:w-[400px] w-[250px]">
                    We know how large objects will act, but things on a small
                    scale.
                  </p>
                  <div className="flex gap-[10px]">
                    <button className="bg-s text-white md:px-[40px] px-[30px] md:py-[15px] py-[10px] rounded md:text-[24px] text-[18px] font-bold tracking-wider">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  )
}

export default CustomCarouser
