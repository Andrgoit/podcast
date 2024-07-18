import LeftSide from "./LeftSide/LeftSide";
import CentralSide from "./CentralSide/CentralSide";
import RightSide from "./RightSide/RightSide";

export default function Footer() {
  return (
    <footer className="bg-white pb-[80px] pt-[140px]">
      <div className="cont flex justify-between">
        <LeftSide />
        <CentralSide />
        <RightSide />
      </div>
    </footer>
  );
}
