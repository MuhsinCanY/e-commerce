const src = '/assets/team/teamHero.jpeg'

export default function TeamHero() {
  return (
    <div className="bg-white flex flex-col md:flex-row gap-1 py-8">
      <div className="basis-1/2">
        <img src={src} className="" />
      </div>
      <div className="flex gap-1 flex-col basis-1/2">
        <div className="flex gap-1">
          <div className="basis-1/2">
            <img src={src} className="basis-1/2" />
          </div>
          <div className="basis-1/2">
            <img src={src} className="basis-1/2" />
          </div>
        </div>
        <div className="flex gap-1">
          <div className="basis-1/2">
            <img src={src} className="basis-1/2" />
          </div>
          <div className="basis-1/2">
            <img src={src} className="basis-1/2" />
          </div>
        </div>
      </div>
    </div>
  )
}
