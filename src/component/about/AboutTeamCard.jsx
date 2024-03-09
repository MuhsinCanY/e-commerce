import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AboutTeamCard({ username, job }) {
  return (
    <div className="max-w-[330px] flex flex-col gap-2">
      <img src="/assets/about/team/user.jpg" />
      <h5 className="text-center text-[16px] leading-[24px] tracking-wide">
        {username}
      </h5>
      <p className="text-center text-t-2 text-[14px] leading-[24px] tracking-wider">
        {job}
      </p>
      <div className="flex gap-4 text-2xl text-t-1 justify-center items-center">
        <FontAwesomeIcon
          icon={faFacebook}
          className="cursor-pointer size-[20px]"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-t-3 cursor-pointer size-[20px]"
        />
        <FontAwesomeIcon
          icon={faTwitter}
          className="cursor-pointer size-[20px]"
        />
      </div>
    </div>
  )
}
