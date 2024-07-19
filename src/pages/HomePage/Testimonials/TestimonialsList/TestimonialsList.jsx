import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Navigation, Pagination } from "swiper/modules";

import SwiperButtonBlock from "./SwiperButtonBlock/SwiperButtonBlock";

import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import "swiper/css/free-mode";
import "./styles.css";

export default function TestimonialsList() {
  return (
    <div className="h-full w-full overflow-hidden">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        // freeMode={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // navigation={true}
        modules={[FreeMode, Autoplay, Navigation, Pagination]}
        className="overflow-visible"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperButtonBlock />
      </Swiper>
    </div>
  );
}
