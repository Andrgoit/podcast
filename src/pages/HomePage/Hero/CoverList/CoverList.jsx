import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "./styles.css";
import CoverItem from "./CoverItem/CoverItem";
import items from "./items";

export default function CoverList() {
  const elements = items.map((item) => (
    <SwiperSlide key={item.id}>
      <CoverItem item={item} />
    </SwiperSlide>
  ));

  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={20}
      freeMode={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[FreeMode, Autoplay]}
    >
      {elements}
    </Swiper>
  );
}
