import { Link } from "react-router-dom";
import AppleStore from "../../../../assets/icons/footer/app_store.svg?react";
import GooglePlay from "../../../../assets/icons/footer/google_play.svg?react";

export default function AppBlock() {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-[#4D4D4D]">App available on:</p>
      <div className="flex flex-row items-center gap-5">
        <Link to="#">
          <AppleStore />
        </Link>
        <Link to="#">
          <GooglePlay />
        </Link>
      </div>
    </div>
  );
}
