export default function ClientsCard({
  imageSource,
  position = 'object-center',
}) {
  return (
    <div className="object-scale-down w-[140px] h-[100px]">
      <img src={imageSource} className={`${position} object-scale-down`} />
    </div>
  )
}
