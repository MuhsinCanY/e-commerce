import React from 'react'

const src =
  'https://s3-alpha-sig.figma.com/img/a014/4955/2eeaef7ecedd3954687aefbdb6236bb6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NxRXqnI2ZrAuU8IdHgA8WxaWmD4dNIXppwqorBQE-ozeuTrBAKt8CNKaAZEe~ECGOdnsZkBtMnQKdHLVe3IkWA8176scIO8q4YW0B7uWTGkAfu4KLou9bz1rI9w67F53-~GMa5Lrigwp3a5tuG2eDFfv130gb1-kI0B1M5ZCBB7tHAsM1suC~KuuuKwDV1OkO22sxOFqNMIcuVdQH4nbh2jIuYW0x08XyNPAbG7SA6bYdeYx3~BRhGr67sbeVLCV7FqY3rwGaeT2YtDUFekC-rLeBYkxReBwRVsdKMypRSmevYzfXyraXHKAgdB25qB-lQPY5Ne9fjY19ahU46vT6w__'

const src2 =
  'https://images.unsplash.com/photo-1617922001439-4a2e6562f328?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export default function AboutTestimonials() {
  return (
    <div className="bg-[#2A7CC7] text-white flex  font-[Montserrat] font-bold">
      <div className="flex justify-center items-center">
        <div className="md:basis-3/5 flex flex-col gap-10 items-center md:items-baseline p-16 md:p-4 text-center md:text-left">
          <h5 className="text-[16px] leading-[24px] tracking-wide">
            WORK WITH US
          </h5>
          <h2 className="text-[40px] leading-[50px] tracking-wider md:text-left">
            Now Let’s grow Yours
          </h2>
          <p className="text-[14px] font-normal leading-[20px] tracking-wider md:text-left">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th
          </p>
          <button className="text-white border border-white px-[40px] py-[15px] text-[14px] leading-[22px] tracking-wider rounded w-[130px]">
            Join
          </button>
        </div>
      </div>
      <img
        className="hidden md:basis-2/5 max-h-[600px] md:inline-block"
        src={src2}
      />
    </div>
  )
}
// basis-full md:basis-3/5
// md: basis - 2 / 5

// ;<div className="flex flex-1 flex-col gap-10   my-[80px] justify-center items-start">
//   <p className="text-[16px] leading-[24px] tracking-wide">ABOUT COMPANY</p>
//   <p className="text-[58px] leading-[80px] tracking-wider">ABOUT US</p>
//   <p className="text-t-2 text-[20px] font-normal leading-[30px] tracking-wide">
//     We know how large objects will act, but things on a small scale
//   </p>
//   <button className="text-white bg-t-1 px-[40px] py-[15px] text-[14px] leading-[22px] tracking-wider rounded ">
//     Get Quote Now
//   </button>
// </div>
