export default function CategoryCard({ name, itemCount }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 min-h-[250px] grow basis-[230px] text-white font-[Montserrat] font-bold text-[16px] bg-[url('/assets/category/category1.jpeg')] bg-cover bg-center ">
      <h4 className="pt-3">{name}</h4>
      <p className="font-normal text-[14px]">{itemCount} items</p>
    </div>
  )
}
