import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TeamCTA() {
  return (
    <div className="bg-white py-12 font-[Montserrat] font-bold text-t-3 text-center">
      <div className="container flex flex-col gap-10 justify-center items-center">
        <p className="text-[40px] leading-[50px] tracking-wider">
          Start your 14 days free trial
        </p>
        <p className="text-[14px] font-normal text-t-2 leading-[20px] tracking-wider max-w-[420px]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="text-white bg-t-1 px-[40px] py-[15px] text-[14px] leading-[22px] tracking-wider rounded ">
          Try it free now
        </button>
        <div className="flex gap-6 text-2xl">
          <FontAwesomeIcon icon={faTwitter} className="size-[30px]" />
          <FontAwesomeIcon icon={faFacebook} className="size-[30px]" />
          <FontAwesomeIcon icon={faInstagram} className="size-[30px]" />
          <FontAwesomeIcon icon={faLinkedin} className="size-[30px]" />
        </div>
      </div>
    </div>
  )
}
