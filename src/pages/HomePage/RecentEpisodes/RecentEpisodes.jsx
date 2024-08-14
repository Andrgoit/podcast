import { motion } from "framer-motion";
import { NoduleBlack } from "src/components";

import BlackButton from "src/components/BlackButton/BlackButton";
import EpisodesList from "./EpisodesList/EpisodesList";

export default function RecentEpisodes({ episodes }) {
  return (
    <section className="relative bg-[#F7EDE8] py-[140px]">
      <div className="cont flex flex-col items-center gap-[100px]">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5 text-center"
        >
          <h3 className="text-6xl font-bold">Recent Episodes</h3>
          <span className="text-2xl font-medium text-[#4D4D4D]">
            Available on your favorite platform
          </span>
        </motion.div>
        <EpisodesList episodes={episodes} />
        <BlackButton>Browse all episodes</BlackButton>
      </div>{" "}
      <NoduleBlack />
    </section>
  );
}
