import "swiper/css";

import "../styles.css";

import IconsBlock from "./IconsBlock/IconsBlock";

export default function CoverItem({ item }) {
  const {
    title,
    img,
    youtube = null,
    spotify = null,
    googlePodcast = null,
  } = item;

  return (
    <div className="h-[373px] w-[373px] overflow-hidden rounded-xl">
      <div
        style={{
          background: `url(${img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
        className="relative flex items-end justify-center pb-5 text-center"
      >
        <span className="text-4xl font-bold text-[#81ADC8]">{title}</span>
        <div className="absolute right-5 top-5">
          <IconsBlock
            youtube={youtube}
            spotify={spotify}
            googlePodcast={googlePodcast}
          />
        </div>
      </div>
    </div>
  );
}
