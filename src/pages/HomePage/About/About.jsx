import Quote from "./Quote/Quote";

import mindman from "../../../assets/images/mindman.svg";
import bulb from "../../../assets/images/bulb.svg";
import nodule_black from "../../../assets/images/nodule_black.svg";

export default function About() {
  return (
    <section className="relative bg-white py-[140px]">
      <div className="cont flex flex-col items-center gap-28">
        <h2 className="max-w-[753px] text-center text-6xl font-bold text-black">
          Talk. Listen. Get inspired by every minute of it.
        </h2>
        <div className="flex w-full justify-between">
          <div className="flex max-w-[472px] flex-col items-center gap-10">
            <div>
              <img src={mindman} alt="mindman" />
            </div>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio.{" "}
            </p>
          </div>
          <div className="flex max-w-[472px] flex-col items-center gap-10">
            <div>
              <img src={bulb} alt="bulb" />
            </div>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio.{" "}
            </p>
          </div>
        </div>
        <Quote />
      </div>
      <div
        className="absolute bottom-[-76px] z-10"
        style={{ right: "calc(50% - 50px)" }}
      >
        <img src={nodule_black} alt="nodule black" />
      </div>
    </section>
  );
}
