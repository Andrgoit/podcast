import { useSwiper } from "swiper/react";
import Prev_button from "../../../../../assets/icons/testimonials/left_button.svg?react";
import Next_button from "../../../../../assets/icons/testimonials/right_button.svg?react";

export default function SwiperButtonBlock() {
  const swiper = useSwiper();
  return (
    <div className="mt-[60px] flex gap-5">
      <button
        onClick={() => swiper.slidePrev()}
        className="cursor-pointer text-black transition-colors duration-300 hover:text-[#CD4631]"
      >
        <Prev_button />
      </button>

      <button
        onClick={() => swiper.slideNext()}
        className="cursor-pointer text-black transition-colors duration-300 hover:text-[#CD4631]"
      >
        <Next_button />
      </button>
    </div>
  );
}
