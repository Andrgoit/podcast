import Tw from "../../../../assets/icons/footer/twitter.svg?react";
import Instagram from "../../../../assets/icons/footer/instagram.svg?react";
import Tiktok from "../../../../assets/icons/footer/tiktok.svg?react";
import { Link } from "react-router-dom";

export default function SocialLinksBlock() {
  return (
    <div className="flex flex-row gap-[25px]">
      <Link
        className="text-black transition-colors duration-300 hover:text-[#CD4631]"
        to="#"
      >
        <Tw />
      </Link>
      <Link
        className="text-black transition-colors duration-300 hover:text-[#CD4631]"
        to="#"
      >
        <Instagram />
      </Link>
      <Link
        className="text-black transition-colors duration-300 hover:text-[#CD4631]"
        to="#"
      >
        <Tiktok />
      </Link>
    </div>
  );
}
