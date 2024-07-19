import Subscribe from "./Subscribe/Subscribe";
import CoverList from "./CoverList/CoverList";
import SupportedBy from "./SupportedBy/SupportedBy";
import nodule from "../../../assets/images/nodule.svg";

export default function Hero() {
  return (
    <section className="relative flex flex-col gap-32 bg-[#F7EDE8] pb-36 pt-16">
      <Subscribe />
      <CoverList />
      <SupportedBy />
      <div
        className="absolute bottom-[-76px]"
        style={{ right: "calc(50% - 50px)" }}
      >
        <img src={nodule} alt="nodule" />
      </div>
    </section>
  );
}
