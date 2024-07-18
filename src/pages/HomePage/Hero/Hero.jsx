import Subscribe from "./Subscribe/Subscribe";
import CoverList from "./CoverList/CoverList";
import SupportedBy from "./SupportedBy/SupportedBy";

export default function Hero() {
  return (
    <section className="flex flex-col gap-32 bg-[#F7EDE8] pb-36 pt-16">
      <Subscribe />
      <CoverList />
      <SupportedBy />
    </section>
  );
}
