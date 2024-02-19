import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ContactContentCard({ icon, bg, text }) {
  return (
    <div className={`${bg} p-5`}>
      <div className="flex flex-col justify-center items-center gap-4 text-center">
        <FontAwesomeIcon icon={icon} className="size-[72px] text-t-1" />
        <div className={`${text} `}>
          <p className="text-[14px] leading-[24px] tracking-wider">
            georgia.young@example.com
          </p>
          <p className="text-[14px] leading-[24px] tracking-wider">
            georgia.young@ple.com
          </p>
        </div>
        <p className={`${text} text-[16px] leading-[24px] tracking-wide`}>
          Get Support
        </p>
        <button className="text-t-1 border-2  border-t-1 px-[36px] py-[15px] text-[14px] leading-[22px] tracking-wider rounded-full ">
          Submit Request
        </button>
      </div>
    </div>
  )
}
