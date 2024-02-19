import React from 'react'
import AboutHeader from '../component/about/AboutHeader'
import AboutContent from '../component/about/AboutContent'
import AboutStats from '../component/about/AboutStats'
import AboutVideo from '../component/about/AboutVideo'
import AboutTeam from '../component/about/AboutTeam'
import AboutClients from '../component/about/AboutClients'
import AboutTestimonials from '../component/about/AboutTestimonials'

export default function About() {
  return (
    // container bg-red-400
    <div className="">
      <AboutHeader />
      <AboutContent />
      <AboutStats />
      <AboutVideo />
      <AboutTeam />
      <AboutClients />
      <AboutTestimonials />
    </div>
  )
}
