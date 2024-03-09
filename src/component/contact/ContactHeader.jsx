import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ContactHeader() {
  return (
    <div className=" bg-white font-[Montserrat] font-bold text-t-3 py-6">
      <div className="container flex flex-col md:flex-row  md:gap-16">
        <div className="flex flex-1 flex-col gap-10   my-[70px] justify-center md:items-start items-center">
          <p className="text-[16px] leading-[24px] tracking-wide">CONTACT US</p>
          <p className="text-[58px] leading-[80px] tracking-wider">
            Get in touch today!
          </p>
          <p className="text-t-2 text-[20px] font-normal leading-[30px] tracking-wide">
            We know how large objects will act, but things on a small scale
          </p>
          <p className="text-[24px] leading-[32px] tracking-wide">
            Phone : +451 215 215
          </p>
          <p className="text-[24px] leading-[32px] tracking-wide">
            Fax : +451 215 215
          </p>
          <div className="flex gap-6 text-2xl">
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
        <div className="relative flex-1 ">
          <div className="w-full h-[600px]"></div>
          <img
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-2/3 z-0 md:size-[450px] size-[290px]"
            src="/assets/about/header/EllipseBig.svg"
          />
          <img
            className="absolute top-8 left-1 z-0 size-14"
            src="/assets/about/header/EllipseMid.svg"
          />
          {/* left purple */}
          <img
            className="absolute bottom-[100px] left-10 z-0 size-3"
            src="/assets/about/header/EllipsePurple.svg"
          />
          {/* right purple */}
          <img
            className="absolute top-[60px] right-10 z-0 size-3"
            src="/assets/about/header/EllipsePurple.svg"
          />
          {/* right small */}
          <img
            className="absolute top-1/2 right-12 z-0 size-5"
            src="/assets/about/header/EllipseSmall.svg"
          />
          <img
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[700px]"
            src="/assets/contact/contact-h.png"
          />
        </div>
      </div>
    </div>
  )
}
