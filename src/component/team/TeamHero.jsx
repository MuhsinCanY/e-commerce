import React from 'react'

const src =
  'https://s3-alpha-sig.figma.com/img/e98c/6914/973e6a41dfef7ffabf70f468edcc4107?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CnL2ZpY6mWeVudXAbfyZ0hF9DNxCeRLLOMnLifUlU1RwDol6wobavTEvGUMwxivH-ZArNMGP4QE5i3j~xxhY39Ca449V9DYD4uoo3G41OLh43xGt8w1sGM9Mq5Ot4nZpnSmHZTY6feb4wIu4gmSGiyKF2MRFyKd-UCpMhJ~ecW4Qf4zarfUl3SVo51LI~e9wmXaV~9FiJbmBeW3GrnrX4Xzq7zTkmEJ0amHDnNNoJnpzmeNk2ceYjH8u1gloZKCWInKsNijm7klJQnpfy7SjcWPvgoWDysLNtJiwyUikUJK41e4DgLaa~0oO2s4UI7mcEHBUm56ecM5i3A3rnIbUZg__'

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
