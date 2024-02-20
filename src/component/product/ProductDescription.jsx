import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const src =
  'https://s3-alpha-sig.figma.com/img/8b0c/0f76/c949a2cffacf01d40c82241e905719cb?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FMoO5QNWdGm8uiNvgi0dkx-pZIUWJ0~lQ~GlOUjoX-KMgRxtUxEuQXL~4EUEqVmmSdNoN0jr2790oOwzWReFnczLeeC4jk5jUH5gasA0~qaKavsjTC6VusNGtDBP5u-8-z5f47eTaieRvhBU8~j6zOMHaypLgC8-5NohMq--41k9K7TpKDCxcCP8zUXlZiO3mbE-H-CUNEBKEpzxBC-UzV5pAQ9ycxcMadwadfDdLgSoT9-7Fb6Krk503ixMYoTHTPdcrM5aCNpc5JOAKS~XaodQJKxv5A9-5B~Axhw-GSD7SlEL03~UtKd5~y3rb57QvYZpn1Z~-xD6VIOtLb8SPw__'

export default function ProductDescription() {
  return (
    <div className="bg-white font-[Montserrat] font-bold py-4  text-t-2">
      <div className="container flex flex-col pb-12">
        <div className="flex pt-4 justify-center items-center font-[600] gap-8 text-t-2">
          <p className="text-[14px] leading-[24px]  tracking-wider">
            Description
          </p>
          <p className="text-[14px] leading-[24px]  tracking-wider">
            Additional Information
          </p>
          <p className="text-[14px] leading-[24px]  tracking-wider">
            Reviews <span className="text-[#23856D]">(0)</span>
          </p>
        </div>
        <div className="bg-[#ECECEC] w-full h-[1px] my-[42px]"></div>
        <div className="flex gap-14 flex-col md:flex-row">
          <div className="flex-1">
            <img src={src} className="h-[372px]" />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <h3 className="text-t-3 text-[24px] leading-[32px]  tracking-wide">
              The quick fox jumps over
            </h3>
            <p className="text-[14px] leading-[20px] font-normal tracking-wider">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="text-[14px] leading-[20px] font-normal tracking-wider">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="text-[14px] leading-[20px] font-normal tracking-wider">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-t-3 text-[24px] leading-[32px]  tracking-wide">
                The quick fox jumps over
              </h3>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-t-2 text-[12px]"
                />
                <p className="text-[14px] leading-[20px] font-normal tracking-wider">
                  the quick fox jumps over the lazy dog
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-t-2 text-[12px]"
                />
                <p className="text-[14px] leading-[20px] font-normal tracking-wider">
                  the quick fox jumps over the lazy dog
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-t-2 text-[12px]"
                />
                <p className="text-[14px] leading-[20px] font-normal tracking-wider">
                  the quick fox jumps over the lazy dog
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-t-3 text-[24px] leading-[32px]  tracking-wide">
                The quick fox jumps over
              </h3>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-t-2 text-[12px]"
                />
                <p className="text-[14px] leading-[20px] font-normal tracking-wider">
                  the quick fox jumps over the lazy dog
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-t-2 text-[12px]"
                />
                <p className="text-[14px] leading-[20px] font-normal tracking-wider">
                  the quick fox jumps over the lazy dog
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-t-2 text-[12px]"
                />
                <p className="text-[14px] leading-[20px] font-normal tracking-wider">
                  the quick fox jumps over the lazy dog
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
