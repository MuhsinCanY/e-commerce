import React from 'react'

const src =
  'https://s3-alpha-sig.figma.com/img/5f8c/e73d/1a41b674cbd12f927c7ea9a6ca0ce76c?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FF8BJoaU7Sob9Dr00bdEdiWPQZtB-qasZ0p~yzWGT8rbSZ0py0YB1Du7R2vvamI1pAiar6dACWwYqrZpaDyaO3uuFN3QQokn9DVPXN6hf7pUcZrgUECM3pP5rCmLbvLNlea7l460tg4YY6uQkzIQ1M5kXvn9xtT6y7zt812SCjIT6~Gfy2VFs-rNAlP8gXZaMOfjMSIqqGoyC5hKW~ciUrrBjdybu~DVFcEdGU0~E3D9-H7F8cUGS6E38y9-RCBR74rCuo734Y7dIYZoX42pZIPTyP6yNMxQFiwOXn7uVHjS9oluVXDb8KHHLgiwcKpRO72o3Bv7JuXSA0ilRQSLSg__'

export default function Fluid() {
  return (
    <div className="custom-container-out bg-white">
      <div className="custom-container-in p-0 gap-[120px] font-[Montserrat] font-bold">
        <div className="flex-1  ">
          <img src={src} className="h-[600px]"></img>
        </div>
        <div className="flex-1 flex flex-col gap-4 justify-center items-start">
          <p className="text-m text-sm tracking-wide">SUMMER 2020</p>
          <h3 className="text-t-3 text-[40px] leading-[50px] tracking-wider">
            Part of the Neural Universe
          </h3>
          <p className="text-t-2 text-[20px] font-normal leading-[30px] tracking-wider">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex gap-[10px]">
            <button className="bg-s text-white px-[40px] py-[15px] rounded text-sm tracking-wider">
              BUY NOW
            </button>
            <button className="text-s bg-white px-[40px] py-[15px] rounded text-sm tracking-wider border-1 border-s">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
