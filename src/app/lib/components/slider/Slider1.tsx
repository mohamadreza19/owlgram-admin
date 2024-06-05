import Image from "next/image";
import React, { createRef, FC } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { ArrowBack, ArrowForward } from "../button";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import CustomPagination from "./CustomPagination";

interface Slider1Props {
  media: string[];
}

const Slider1: FC<Slider1Props> = (props) => {
  console.log(props);
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {props.media.map((m) => (
        <SwiperSlide className="w-full !h-56">
          <div className="w-full !h-full">
            <Image
              width={300}
              height={300}
              src={m}
              className="w-full !h-full min-h-full rounded border   border-gray-400 border-solid "
              alt="img"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Slider1;
