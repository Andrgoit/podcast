import EpisodesItem from "./EpisodesItem/EpisodesItem";
import sparkle from "src/assets/images/recentEpisodes/sparkle.svg";

export default function EpisodesList({ episodes }) {
  const reverseEpisodesList = [...episodes].sort((a, b) => b.id - a.id);

  const elements = !episodes
    ? null
    : reverseEpisodesList.map((item) => (
        <EpisodesItem key={item.id} item={item} />
      ));
  return (
    <div className="relative">
      <ul className="flex flex-wrap gap-5">{elements}</ul>
      <img
        src={sparkle}
        alt="sparkle"
        className="absolute right-[-140px] top-[-170px]"
      />
    </div>
  );
}
