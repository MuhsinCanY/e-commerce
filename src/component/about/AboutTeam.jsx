import AboutTeamCard from './AboutTeamCard'

export default function AboutTeam() {
  return (
    <div className="bg-white font-[Montserrat] font-bold py-10">
      <div className=" container flex flex-col  items-center">
        <div className="flex flex-col gap-2 p-4 mb-[70px]">
          <h2 className="text-center font-bold text-[40px] leading-[50px] tracking-wider text-t-3">
            Meet Our Team
          </h2>
          <p className="text-center text-[14px] max-w-[460px] font-normal tracking-wide text-t-2">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          <AboutTeamCard username="Username" job="Profession" />
          <AboutTeamCard username="Username" job="Profession" />
          <AboutTeamCard username="Username" job="Profession" />
        </div>
      </div>
    </div>
  )
}
