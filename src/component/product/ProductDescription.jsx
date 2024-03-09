import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const src = '/assets/product/product-des.png'

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
