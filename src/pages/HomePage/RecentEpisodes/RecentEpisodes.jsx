import nodule from "../../../assets/images/nodule_black.svg";
import BlackButton from "src/components/BlackButton/BlackButton";
import EpisodesList from "./EpisodesList/EpisodesList";
// import episodes from "../../../data/HomePage/episodes";

export default function RecentEpisodes({ episodes }) {
  return (
    <section className="relative bg-[#F7EDE8] py-[140px]">
      <div className="cont flex flex-col items-center gap-[100px]">
        <div className="flex flex-col gap-5 text-center">
          <h3 className="text-6xl font-bold">Recent Episodes</h3>
          <span className="text-2xl font-medium text-[#4D4D4D]">
            Available on your favorite platform
          </span>
        </div>
        <EpisodesList episodes={episodes} />
        <BlackButton>Browse all episodes</BlackButton>
      </div>{" "}
      <div
        className="absolute bottom-[-76px] z-10"
        style={{ right: "calc(50% - 50px)" }}
      >
        <img src={nodule} alt="nodule" />
      </div>
    </section>
  );
}
