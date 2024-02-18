import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/CarouselItem'
import carousel from '/assets/carousel/carousel1.jpeg'
import { useState } from 'react'

function CustomCarouser() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  const itemClass = 'h-[700px] w-[99vw] max-w-[1150px] object-cover'

  return (
    <div className="custom-container-out  bg-[#00a5cb]">
      <div className="custom-container-in justify-center p-0 ">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="bg-[#00b7dc]"
        >
          <CarouselItem>
            <img className={itemClass} src={carousel} alt="First slide" />
            <Carousel.Caption className="position-absolute top-[180px]">
              <div className="af-position-lg af-bg-dark-transparent py-3 w-[500px] text-start">
                <div className="flex-1 flex flex-col gap-4 justify-center items-start">
                  <p className="text-white text-sm tracking-wide">
                    SUMMER 2020
                  </p>
                  <h3 className="text-white leading-[80px]  text-[50px] font-bold leading-[50px] tracking-wider">
                    NEW COLLECTION
                  </h3>
                  <p className="text-white text-[20px] font-normal leading-[30px] tracking-wider w-[400px]">
                    We know how large objects will act, but things on a small
                    scale.
                  </p>
                  <div className="flex gap-[10px]">
                    <button className="bg-s text-white px-[40px] py-[15px] rounded text-[24px] font-bold tracking-wider">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img className={itemClass} src={carousel} alt="First slide" />
            <Carousel.Caption className="position-absolute top-[180px]">
              <div className="af-position-lg af-bg-dark-transparent py-3 w-[500px] text-start">
                <div className="flex-1 flex flex-col gap-4 justify-center items-start">
                  <p className="text-white text-sm tracking-wide">
                    SUMMER 2020
                  </p>
                  <h3 className="text-white leading-[80px]  text-[50px] font-bold leading-[50px] tracking-wider">
                    NEW COLLECTION
                  </h3>
                  <p className="text-white text-[20px] font-normal leading-[30px] tracking-wider w-[400px]">
                    We know how large objects will act, but things on a small
                    scale.
                  </p>
                  <div className="flex gap-[10px]">
                    <button className="bg-s text-white px-[40px] py-[15px] rounded text-[24px] font-bold tracking-wider">
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
