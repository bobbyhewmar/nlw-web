import Slider from "react-slick";
import { IconArrowLeft } from "./Icons/IconArrowLeft";
import { IconArrowRight } from "./Icons/IconArrowRight";

type Props = {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function NextArrow({ onClick }: Props) {
  return (
    <div
      className="hidden lg:flex w-10 aspect-square absolute -right-10 justify-center items-center cursor-pointer top-2/4"
      style={{transform: 'translate(0,-50%)'}}
      onClick={onClick}
      >
      <IconArrowRight />
    </div>
  );
}
  
function PrevArrow({ onClick }: Props) {
  return (
    <div
      className="hidden lg:flex w-10 aspect-square absolute -left-10 justify-center items-center cursor-pointer top-2/4"
      style={{transform: 'translate(0,-50%)'}}
      onClick={onClick}
      >
      <IconArrowLeft />
    </div>
  );
}


type Data = {
  data?: {
    thumb: string
    title: string
    totalAdverts: number
  }[]
}

export function Carousel({ data }: Data) {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className="w-full mt-8">
      <Slider {...settings}>
        {
          data && data.map(({thumb, title, totalAdverts}, index) => (
            <div key={index} className="aspect-[3/4] h-60 rounded-lg relative">
                <div className="absolute w-full h-full rounded-lg bg-gradient-to-t from-black/95 to-black/0 text-white flex flex-col justify-end p-4 z-10">
                  <span className="font-bold">{title}</span>
                  <span className="text-sm">{totalAdverts} Anúncios</span>
                </div>
                <img src={thumb} width={180} height={240} className="relative w-full h-full object-cover rounded-lg z-0" />
            </div>
          ))
        }
      </Slider>
    </div>
  );
}