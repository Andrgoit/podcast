import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Navigation, Pagination } from "swiper/modules";

import SwiperButtonBlock from "./SwiperButtonBlock/SwiperButtonBlock";
import TestimonialsItem from "./TestimonialsItem/TestimonialsItem";

import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import "swiper/css/free-mode";
import "./styles.css";

import items from "./items";

export default function TestimonialsList() {
  const elements = items.map((item) => (
    <SwiperSlide key={item.id}>
      <TestimonialsItem item={item} />
    </SwiperSlide>
  ));
  return (
    <div className="h-full w-full overflow-hidden">
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay, Navigation, Pagination]}
        className="overflow-visible"
      >
        {elements}
        <SwiperButtonBlock />
      </Swiper>
    </div>
  );
}
