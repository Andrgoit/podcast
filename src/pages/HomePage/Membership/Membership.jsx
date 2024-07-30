import nodule from "src/assets/images/nodule_black.svg";
import scribble from "src/assets/icons/membership/scribble.svg";

import BenefitsList from "./BenefitsList/BenefitsList";
import BlackButton from "src/components/BlackButton/BlackButton";
import benefits from "../Membership/BenefitsList/benefits.js";

export default function Membership() {
  return (
    <section className="relative bg-white py-[140px]">
      <div className="cont flex flex-col items-center">
        <div className="relative mb-24 flex flex-col gap-5 text-center">
          <h3 className="text-6xl font-bold">Membership benefits</h3>
          <span className="text-2xl font-medium text-[#4D4D4D]">
            Become our sponsor and get all benefits
          </span>
          <img
            src={scribble}
            alt="scribble"
            className="absolute right-[-128px] top-[-172px]"
          />
        </div>
        <BenefitsList benefits={benefits} />
        <BlackButton>see pricing</BlackButton>
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
