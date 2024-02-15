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
    <div className="custom-container-out  bg-[#00a5cb] bg-t-1">
      <div className="custom-container-in justify-center min-w-full p-0 ">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="bg-[#00b7dc]"
        >
          <CarouselItem>
            <img className={itemClass} src={carousel} alt="First slide" />
            <Carousel.Caption className="position-absolute">
              <div className="af-position-lg af-bg-dark-transparent py-3">
                <h3>1</h3>
                <p>{carousel}</p>
              </div>
            </Carousel.Caption>
          </CarouselItem>
          {/* <CarouselItem>
        <img className={itemClass} src={carousel} alt="Third slide" />
        <Carousel.Caption className="position-absolute">
          <div className="af-position-lg af-bg-dark-transparent py-3">
            <h3>2</h3>
            <p>{carousel}</p>
          </div>
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem>
        <img className={itemClass} src={carousel} alt="Third slide" />
        <Carousel.Caption className="position-absolute">
          <div className="af-position-lg af-bg-dark-transparent py-3">
            <h3>3</h3>
            <p>{carousel}</p>
          </div>
        </Carousel.Caption>
      </CarouselItem> */}
        </Carousel>
      </div>
    </div>
  )
}

export default CustomCarouser
