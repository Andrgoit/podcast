import { Link } from "react-router-dom";
import GooglePodcast from "../../../../assets/icons/footer/g.svg?react";
import Spotify from "../../../../assets/icons/footer/s.svg?react";
import Youtube from "../../../../assets/icons/footer/y.svg?react";

export default function FavPlatforms() {
  return (
    <div className="flex w-[373px] flex-col gap-7">
      <p className="text-[#4D4D4D]">Listen to episodes on your fav platform:</p>
      <ul className="flex justify-between">
        <li>
          <Link to="#" className="flex items-center gap-1">
            <GooglePodcast /> <span className="font-bold">Google </span>{" "}
            Podcasts
          </Link>
        </li>
        <li>
          <Link to="#" className="flex items-center gap-1 font-bold">
            <Spotify /> Spotify
          </Link>
        </li>
        <li>
          <Link to="#" className="flex items-center gap-1 font-bold">
            <Youtube /> Youtube
          </Link>
        </li>
      </ul>
    </div>
  );
}
