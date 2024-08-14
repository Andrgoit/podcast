import { motion } from "framer-motion";

import y from "../../../../assets/icons/supported/Youtube.svg";
import s from "../../../../assets/icons/supported/Spotify.svg";
import g from "../../../../assets/icons/supported/GooglePodcast.svg";

export default function SupportedBy() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      viewport={{ once: true }}
      className="cont w-full border-b border-t border-[#4D4D4D] pb-11 pt-11"
    >
      <div className="flex w-full items-center justify-between text-xl font-bold">
        Supported by:
        <div className="flex items-center gap-5">
          <div className="flex w-[275px] justify-center">
            <img src={s} alt="spotify icon" />
          </div>
          <div className="flex w-[275px] justify-center">
            <img src={g} alt="googlepodcast icon" />
          </div>
          <div className="flex w-[275px] justify-center">
            <img src={y} alt="youtube icon" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
