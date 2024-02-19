import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ContactCTA() {
  return (
    <div className="bg-white  font-[Montserrat] font-bold py-10">
      <div className="container text-t-3 flex flex-col gap-4 justify-center items-center text-center">
        <FontAwesomeIcon
          icon={faArrowTurnDown}
          className="text-t-1 size-[50px]"
        />
        <p className="text-[16px] leading-[24px] tracking-wide">
          WE Can't WAIT TO MEET YOU
        </p>
        <p className="text-[58px] leading-[80px] tracking-wider">Let’s Talk</p>
        <button className="text-white bg-t-1 px-[40px] py-[15px] text-[14px] leading-[22px] tracking-wider rounded ">
          Try it free now
        </button>
      </div>
    </div>
  )
}
