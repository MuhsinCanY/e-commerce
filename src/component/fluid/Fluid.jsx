export default function Fluid() {
  return (
    <div className="bg-white py-12">
      <div className="container flex flex-col md:flex-row gap-[60px] font-[Montserrat] font-bold">
        <div className="flex-1  ">
          <img
            src="/assets/fluid/fluid.png"
            className="h-[500px] md:h-[600px]"
          ></img>
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
