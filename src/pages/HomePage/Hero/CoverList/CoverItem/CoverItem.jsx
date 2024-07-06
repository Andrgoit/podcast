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
    <div className="w-[373px] h-[373px]  rounded-xl overflow-hidden">
      <div
        style={{
          background: `url(${img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
        className=" flex justify-center items-end text-center pb-5 relative"
      >
        <span className=" text-[#81ADC8] font-bold text-4xl">{title}</span>
        <div className=" absolute top-5 right-5">
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
