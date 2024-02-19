import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const src =
  'https://s3-alpha-sig.figma.com/img/5426/8cf0/4ad0f612e9f8f311e9d1c6bbd31a03f3?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nm0owOpc8cohE3KpBe15faHoQlK3chku62l1NdnATKFDErLnEhDOfveMY5x-DN85R08lkaRwvPU98orui-5uQ1G88~4bfJui25HHg93z6re~fw7x30XyNm0jijZ7-lP3b5kBU-MqCxPxHSqbWyB~TgWRho2gAKaiFKKKWA4I3I8BOikFd1eSdYXtYKkhcTo33N8CjueH00vxuBDnChuOHVAJXhbw1f4EzwHmFvFS~wYvdLDfzW11fhdtSl3u~nYopZMT4h8kp33bUQISqJKIWaaf-6y4EWAVtIf8z6x5EBdrdEf7AKOSWEfK6~lryCPCEXmI83DZxMIhKLzloE14tA__'

export default function AboutTeamCard({ username, job }) {
  return (
    <div className="max-w-[330px] flex flex-col gap-2">
      <img src={src} />
      <h5 className="text-center text-[16px] leading-[24px] tracking-wide">
        {username}
      </h5>
      <p className="text-center text-t-2 text-[14px] leading-[24px] tracking-wider">
        {job}
      </p>
      <div className="flex gap-4 text-2xl text-t-1 justify-center">
        <FontAwesomeIcon icon={faFacebook} className="cursor-pointer" />
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-t-3 cursor-pointer"
        />
        <FontAwesomeIcon icon={faTwitter} className="cursor-pointer" />
      </div>
    </div>
  )
}
