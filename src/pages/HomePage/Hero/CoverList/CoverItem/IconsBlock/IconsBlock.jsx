import { Link } from "react-router-dom";

import Youtube from "../../../../../../assets/icons/cover/youtube.svg?react";
import GPodcast from "../../../../../../assets/icons/cover/gPodcast.svg?react";
import Spotify from "../../../../../../assets/icons/cover/spotify.svg?react";

export default function IconsBlock({ googlePodcast, spotify, youtube }) {
  return (
    <div className="flex gap-[10px] flex-row">
      {googlePodcast && (
        <Link to={googlePodcast}>
          <GPodcast />
        </Link>
      )}
      {spotify && (
        <Link to={googlePodcast}>
          <Spotify />
        </Link>
      )}
      {youtube && (
        <Link to={googlePodcast}>
          <Youtube />
        </Link>
      )}
    </div>
  );
}
