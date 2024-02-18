import {
  faAngleRight,
  faChartArea,
  faClock,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const blogImg =
  'https://s3-alpha-sig.figma.com/img/679b/3cdf/17b8ec542ce1c452944dfb51f10ba010?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PF~-QaIy9ELnBrAslOtxEJopjVRRgs2utnuZmA0Kd8hIwTZTDDZLOS-TtH5Np6dJVa2gPMP1zpyr2LFxlpPMkILNW9WuQaJSUV8QqwmjG37URsZNd5AI~B1n-hnVhfK5DNcwOsiVmejgoCb6F0TfuaIMtrLITdj5m8igzJLX2cX24DJJTGi327FfWvB0DJ0PHIyebVh~KEDfdmvHnTToB878M~U7tzt1jwASuKDKfSQQUAhgPR41vW9T0NrYR3e9Dp3LdYgo5wZ8BDkg55RMj6TlJxWExpNfX-EfLmyxdkYhmefoHOXVQQd7TS4oexK0kd16HycKy0qIP6NLhk555w__'

export default function BlogCard() {
  return (
    <div className="font-normal shadow-xl w-[360px]">
      <img src={blogImg} className="object-cover h-[300px] w-[360px]" />
      <div className="flex flex-col gap-3 py-4 px-8 tracking-wider">
        <div className="flex gap-2 text-[12px] ">
          <p className="text-[#8EC2F2] ">Google</p>
          <p className="text-t-2">Trending</p>
          <p className="text-t-2">New</p>
        </div>
        <h4 className="text-[20px] text-t-3 font-medium">
          Loudest à la Madison #1 (L'integral)
        </h4>
        <p className="text-t-2 text-[14px]">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className="flex justify-between tracking-wider">
          <div className="flex gap-1 items-center">
            <FontAwesomeIcon
              icon={faClock}
              className="text-[#74C0FC] text-[14px]"
            />
            <p className="text-[12px]">22 April 2021</p>
          </div>
          <div className="flex gap-1 items-center">
            <FontAwesomeIcon
              icon={faChartArea}
              className="text-[#23856D] text-[14px]"
            />
            <p className="text-[12px]">10 comments</p>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <p className="text-[14px] text-t-2 font-bold tracking-wider">
            Learn More{' '}
          </p>
          <FontAwesomeIcon
            icon={faAngleRight}
            className="text-[#74C0FC] text-[14px] "
          />
        </div>
      </div>
    </div>
  )
}
