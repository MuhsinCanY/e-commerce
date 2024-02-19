import React from 'react'
import AboutTeamCard from '../about/AboutTeamCard'

export default function TeamContent() {
  return (
    <div className="bg-white font-[Montserrat] font-bold py-10">
      <div className="container flex flex-col items-center">
        <p className="text-[40px] leading-[50px] tracking-wider">
          Meet Our Team
        </p>
        <div className="flex justify-center flex-wrap gap-8 py-20">
          <AboutTeamCard username="Username" job="Profession" />
          <AboutTeamCard username="Username" job="Profession" />
          <AboutTeamCard username="Username" job="Profession" />
          <AboutTeamCard username="Username" job="Profession" />
          <AboutTeamCard username="Username" job="Profession" />
          <AboutTeamCard username="Username" job="Profession" />
          <AboutTeamCard username="Username" job="Profession" />
          <AboutTeamCard username="Username" job="Profession" />
          <AboutTeamCard username="Username" job="Profession" />
        </div>
      </div>
    </div>
  )
}
