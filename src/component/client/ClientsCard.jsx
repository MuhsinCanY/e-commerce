export default function ClientsCard({
  imageSource,
  position = 'object-center',
}) {
  return (
    <div className="object-scale-down grow basis-[100px] md:basis-[170px] h-[100px]">
      <img src={imageSource} className={`${position} object-scale-down`} />
    </div>
  )
}
