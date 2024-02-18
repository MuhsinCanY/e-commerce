import React from 'react'

const imgsrc =
  'https://s3-alpha-sig.figma.com/img/7466/f015/45eb1f33b39fa1e1f6b0ddf5bb703345?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N3JQTc4Vru1SLgFfXyO9QSw4VwuAHv-rnzVALn-dX4ZBYet5yquFiJlNkZSgH33XvuLw4Qq806CjrGrBQl-E7HD-RCPhpN32xRUeoimqyaqp4CS4SvipAKDSd8LxUZ1Q0xTbx0~gJXtyMh7cwOpy8QC4~e0O4TPdz6W-JZxldmBHSxY-vg1xpPyrbawDGynbwNx3TlSP8qCXaMPz~LQ1JH7mj2G3jj2qCd6L1t7dByL~~8pYeGPLLLY5tRgDMm2X-2hbwgGNqAb4Hi3Z6URsA8hjfr5ORAfrfh1AYRCHmH72Ypl94fvxLy57G8niEQ8XLyIkYlYGgAWtIEg2nLRHAg__'

export default function AboutHeader() {
  return (
    <div className=" bg-white font-[Montserrat] font-bold text-t-3 py-6">
      <div className="container flex flex-col md:flex-row  md:gap-16">
        <div className="flex flex-1 flex-col gap-10   my-[80px] justify-center items-start">
          <p className="text-[16px] leading-[24px] tracking-wide">
            ABOUT COMPANY
          </p>
          <p className="text-[58px] leading-[80px] tracking-wider">ABOUT US</p>
          <p className="text-t-2 text-[20px] font-normal leading-[30px] tracking-wide">
            We know how large objects will act, but things on a small scale
          </p>
          <button className="text-white bg-t-1 px-[40px] py-[15px] text-[14px] leading-[22px] tracking-wider rounded ">
            Get Quote Now
          </button>
        </div>
        <div className="relative flex-1 ">
          <div className="w-full h-[400px]"></div>
          <img
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-2/3 z-0 md:size-[400px] size-[250px]"
            src="/assets/about/header/EllipseBig.svg"
          />
          <img
            className="absolute top-1 left-1 z-0 size-14"
            src="/assets/about/header/EllipseMid.svg"
          />
          {/* left purple */}
          <img
            className="absolute bottom-[100px] left-10 z-0 size-3"
            src="/assets/about/header/EllipsePurple.svg"
          />
          {/* right purple */}
          <img
            className="absolute top-[60px] right-10 z-0 size-3"
            src="/assets/about/header/EllipsePurple.svg"
          />
          {/* right small */}
          <img
            className="absolute top-1/2 right-12 z-0 size-5"
            src="/assets/about/header/EllipseSmall.svg"
          />
          <img
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[400px]"
            src={imgsrc}
          />
        </div>
      </div>
    </div>
  )
}
