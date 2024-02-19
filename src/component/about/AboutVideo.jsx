import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const src =
  'https://s3-alpha-sig.figma.com/img/bf53/61f3/08dd0c5a04f10121bc68f6cb9ff0d63d?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iuYsb2VAzOkoyPtW7R8iEeFtxJrIgrpN6NTpm2gqeWdPpktOScxuMcUE0gXoPobFsAmdhx7B98PeG3ny1MXyBlcp0WfQzTpfe43ljgECks0WARnLfqZKp9GWLnGARuz0NUmDHH9Fesz5LXIb8hc0Wj4vpQY64bwCDOAofyj0oL3qm8Idf5uIHCf9XXoEJxA1-DvdQ7hrpHjsy-UvAf0FXiDSRj~eDkjRJrf8dlf7fEeSK75h5WQyD~0D3LQfK-0WZSzfWWCujth1Ge0k8PnRLzK0LOzWDuDyno5zeOVwa~r~jhkfuvuvI2UuMYX4A~lPs7N1Y-~2azTS-bixrPS8yw__'

export default function AboutVideo() {
  return (
    <div className="bg-white">
      <div className="container relative py-10">
        <img className="rounded-xl" src={src} />
        <FontAwesomeIcon
          className="absolute size-10 md:size-16 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-t-1 hover:cursor-pointer"
          icon={faCirclePlay}
        />
      </div>
    </div>
  )
}
