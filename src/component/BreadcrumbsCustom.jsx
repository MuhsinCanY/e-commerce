import { Breadcrumbs, Link, Typography } from '@mui/material'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function BreadcrumbsCustom({ title, paths }) {
  return (
    <div className="custom-container-in gap-1  justify-between items-center px-[70px]">
      <h2 className="font-[Montserrat] font-bold text-[24px]">{title}</h2>
      <Breadcrumbs
        separator={
          <FontAwesomeIcon
            icon={faChevronRight}
            size="xs"
            className="text-muted"
          />
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
        <Typography className="text-muted">Shop</Typography>
      </Breadcrumbs>
    </div>
  )
}
