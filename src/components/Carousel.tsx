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

export function Carousel() {
  var settings = {
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
        <div className="aspect-[3/4] h-60 bg-slate-500 rounded-lg">
            <h3>1</h3>
        </div>
        <div className="aspect-[3/4] h-60 bg-slate-500 rounded-lg">
            <h3>2</h3>
        </div>
        <div className="aspect-[3/4] h-60 bg-slate-500 rounded-lg">
            <h3>3</h3>
        </div>
        <div className="aspect-[3/4] h-60 bg-slate-500 rounded-lg">
            <h3>4</h3>
        </div>
        <div className="aspect-[3/4] h-60 bg-slate-500 rounded-lg">
            <h3>5</h3>
        </div>
        <div className="aspect-[3/4] h-60 bg-slate-500 rounded-lg">
            <h3>6</h3>
        </div>
        <div className="aspect-[3/4] h-60 bg-slate-500 rounded-lg">
            <h3>6</h3>
        </div>
        <div className="aspect-[3/4] h-60 bg-slate-500 rounded-lg">
            <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}