import React from 'react'

export default function AboutStatsCard({ title, text }) {
  return (
    <div>
      <p className=" text-[58px] leading-[80px] tracking-wider text-center">
        {title}
      </p>
      <p className="text-t-2 text-[16px] leading-[24px] tracking-wide text-center">
        {text}
      </p>
    </div>
  )
}
