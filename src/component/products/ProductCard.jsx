export default function ProductCard() {
  return (
    <div className="flex flex-col gap-3 mb-4 text-center font-[Montserrat] font-bold">
      <img src="/assets/product/product1.jpeg" className="object-cover" />
      <h4 className="text-[16px] pt-3">Grahic Design</h4>
      <p className="text-[14px] text-t-2">English Department</p>
      <p>
        <span className="text-[#BDBDBD] mr-2">$16.48</span>
        <span className="text-t-4">$6.48</span>
      </p>
      <div className="flex justify-center gap-2">
        <div className="size-4 bg-t-1 rounded-full"></div>
        <div className="size-4 bg-t-4 rounded-full"></div>
        <div className="size-4 bg-[#E77C40] rounded-full"></div>
        <div className="size-4 bg-t-3 rounded-full"></div>
      </div>
    </div>
  )
}
