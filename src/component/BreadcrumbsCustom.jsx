import { Breadcrumbs, Link, Typography } from '@mui/material'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function BreadcrumbsCustom({ current, paths }) {
  return (
    <div className="custom-container-in px-0 mx-0 gap-1 w-max justify-between items-center">
      <Breadcrumbs
        separator={
          <FontAwesomeIcon icon={faChevronRight} size="xs" className="text-m" />
        }
      >
        {paths.map((p, i) => {
          return (
            <Link key={i} href={p.href} underline="hover" color="#252B42">
              <p className="font-[Montserrat] font-bold text-t-3 hover:text-t-3">
                {p.name}
              </p>
            </Link>
          )
        })}
        <Typography className="text-m ">{current}</Typography>
      </Breadcrumbs>
    </div>
  )
}
