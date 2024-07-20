import TestimonialsList from "./TestimonialsList/TestimonialsList";
import sparkle from "../../../assets/icons/testimonials/sparkle.png";
import nodule from "../../../assets/images/nodule_black.svg";

export default function Testimonials() {
  return (
    <section className="relative bg-[#EDF3F7] pb-24 pt-[140px]">
      <div className="cont flex flex-col items-center gap-24">
        <div className="relative flex flex-col items-center gap-5">
          <h3 className="text-6xl font-bold">What our listeners say</h3>
          <span className="font-medium text-[#4D4D4D]">
            Their experience throughout every platform
          </span>
          <div className="absolute left-[-100px] top-[-70px]">
            <img src={sparkle} alt="sparkle" />
          </div>
        </div>
        <TestimonialsList />
      </div>
      <div
        className="absolute bottom-[-76px] z-10"
        style={{ right: "calc(50% - 50px)" }}
      >
        <img src={nodule} alt="nodule" />
      </div>
    </section>
  );
}
