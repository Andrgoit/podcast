import PriceList from "./PriceList/PriceList";

import nodule from "src/assets/images/nodule_black.svg";
import sparkle from "src/assets/icons/BecomeOurSponsors/sparkle.svg";

export default function BecomeOurSponsors({ prices }) {
  return (
    <section className="relative py-[140px]">
      <div className="cont flex flex-col items-center gap-24">
        <div className="relative flex flex-col gap-5 text-center">
          <h3 className="text-6xl font-bold">Become our sponsor</h3>
          <span className="text-2xl font-medium text-[#4D4D4D]">
            Get exclusive episodes, merch and more
          </span>
          <img
            src={sparkle}
            alt="sparkle"
            className="absolute left-[-74px] top-[-63px] w-[120px]"
          />
        </div>
        <PriceList prices={prices} />
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
