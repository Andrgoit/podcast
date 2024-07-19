import TestimonialsList from "./TestimonialsList/TestimonialsList";
import sparkle from "../../../assets/icons/testimonials/sparkle.png";

export default function Testimonials() {
  return (
    <section className="bg-[#EDF3F7] pb-24 pt-[140px]">
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
    </section>
  );
}
