export default function ProductCard({ product }) {
  const { images, name, price } = product

  return (
    <div className="flex grow basis-[250px] flex-col gap-3 mb-4 text-center font-[Montserrat] font-bold">
      <img src={images[0].url} className="object-cover" />
      <h4 className="text-[16px] pt-3">{name}</h4>
      <p>
        <span className="text-[#BDBDBD] mr-2 line-through">
          ${(price + 10).toFixed(2)}
        </span>
        <span className="text-t-4">${price.toFixed(2)}</span>
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
