import Subscribe from "./Subscribe/Subscribe";
import CoverList from "./CoverList/CoverList";
import SupportedBy from "./SupportedBy/SupportedBy";

export default function Hero() {
  return (
    <section className=" bg-[#F7EDE8] pt-16 pb-36 flex flex-col gap-32">
      <Subscribe />
      <CoverList />
      <SupportedBy />
    </section>
  );
}
