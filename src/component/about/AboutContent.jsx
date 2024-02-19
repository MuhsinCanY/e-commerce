import React from 'react'

export default function AboutContent() {
  return (
    <div className="bg-white font-[Montserrat] font-normal text-t-3">
      <div className="container flex flex-col md:flex-row gap-10 justify-between py-10">
        <div className="basis-2/5 flex flex-col gap-4 justify-center">
          <p className=" text-[#E74040] text-[14px] leading-[20px] tracking-wider">
            Problems trying
          </p>
          <p className="text-t-3 text-[24px] font-bold leading-[32px] tracking-wide">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </p>
        </div>
        <div className="basis-3/5 flex items-center pr-10">
          <p className="text-t-2 text-[14px] leading-[20px] tracking-wider max-w-[600px] ">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
    </div>
  )
}
