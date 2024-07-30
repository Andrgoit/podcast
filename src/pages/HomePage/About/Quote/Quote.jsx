import quotes from "src/assets/images/quotes.png";
import avatar from "src/assets/icons/about/avatar.png";
import Spotify from "src/assets/icons/about/spotify.svg?react";
import spring from "src/assets/icons/about/spring_small.svg";
import spot from "src/assets/icons/about/spot.png";

export default function Quote() {
  return (
    <div className="relative w-full rounded-lg bg-[#F7EDE8] py-10">
      <div className="flex flex-col items-center gap-10">
        <div>
          <img src={quotes} alt="quotes" />
        </div>
        <h3 className="max-w-[600px] text-center text-4xl font-bold text-black">
          One of the best daily podcasts that covers every topic on Spotify.
        </h3>
        <div className="flex flex-row items-center gap-2">
          <div className="w-12">
            <img src={avatar} alt="avatar" />
          </div>
          <p className="text-sm">John Smith,</p>
          <Spotify size={16} />
          <p className="text-sm font-bold">Social Community Manager</p>
        </div>
      </div>
      <div className="absolute bottom-12 left-[-60px]">
        <img src={spring} alt="spring" />
      </div>
      <div className="absolute right-[-57px] top-[-78px]">
        <img src={spot} alt="spot" />
      </div>
    </div>
  );
}
