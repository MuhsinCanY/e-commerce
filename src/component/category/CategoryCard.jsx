export default function CategoryCard({ name, rate, img }) {
  return (
    <div
      className={`flex relative flex-col justify-center items-center gap-2 min-h-[220px] grow basis-[210px] text-white font-[Montserrat] font-bold text-[16px]  bg-cover bg-center `}
    >
      <img src={img} className="absolute z-0" />
      <h4 className="pt-3 z-10">{name}</h4>
      <p className="font-normal text-[14px] z-10">{rate} rating</p>
    </div>
  )
}
