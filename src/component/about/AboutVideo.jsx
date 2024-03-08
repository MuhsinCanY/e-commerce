import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AboutVideo() {
  return (
    <div className="bg-white">
      <div className="container relative py-10">
        <img className="rounded-xl" src="/assets/about/video.png" />
        <FontAwesomeIcon
          className="absolute size-10 md:size-16 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-t-1 hover:cursor-pointer"
          icon={faCirclePlay}
        />
      </div>
    </div>
  )
}
