import Subscribe from "./Subscribe/Subscribe";
import CoverList from "./CoverList/CoverList";
import SupportedBy from "./SupportedBy/SupportedBy";
import { Nodule } from "src/components";

export default function Hero() {
  return (
    <section className="relative flex flex-col gap-32 bg-[#F7EDE8] pb-36 pt-16">
      <Subscribe />
      <CoverList />
      <SupportedBy />
      <Nodule />
    </section>
  );
}
