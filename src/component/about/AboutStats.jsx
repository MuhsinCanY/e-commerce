import React from 'react'
import AboutStatsCard from './AboutStatsCard'

export default function AboutStats() {
  return (
    <div className="bg-white font-[Montserrat] font-bold text-t-3">
      <div className="container flex flex-col md:flex-row gap-10 justify-between py-10">
        <AboutStatsCard title="15K" text="Happy Customers" />
        <AboutStatsCard title="150K" text="Monthly Visitors" />
        <AboutStatsCard title="15" text="Countries  Worldwide" />
        <AboutStatsCard title="100+" text="Top Partners" />
      </div>
    </div>
  )
}
