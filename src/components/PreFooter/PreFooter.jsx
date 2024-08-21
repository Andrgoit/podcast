import { motion } from "framer-motion";
import beta from "src/assets/icons/prefooter/beta.svg";
import BlackButton from "../BlackButton/BlackButton";
import sp from "src/assets/icons/prefooter/sparkle.svg";
import gp from "src/assets/icons/prefooter/google_podcast.svg";
import spotify from "src/assets/icons/prefooter/spotify.svg";
import youtube from "src/assets/icons/prefooter/youtube.svg";
import playing from "src/assets/icons/prefooter/playing.png";
import trending from "src/assets/icons/prefooter/trending.png";

export default function PreFooter() {
  return (
    <section className="relative overflow-hidden bg-[#EDF3F7] py-[140px]">
      <div className="cont flex flex-col items-center gap-36">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="relative flex max-w-[482px] flex-col items-center gap-5 text-center"
        >
          <img src={beta} alt="" className="w-[53px]" />
          <h3 className="text-6xl font-bold">Available now Pod of Cast App</h3>
          <span className="text-2xl font-medium text-[#4D4D4D]">
            We just launched our podcast app!
          </span>
        </motion.div>
        <div className="relative flex flex-col gap-6">
          <BlackButton>download now</BlackButton>
          <div className="flex flex-col items-center gap-[10px]">
            <span className="text-sm font-medium text-[#4D4D4D]">
              Content also available on:
            </span>
            <div className="flex justify-center gap-5">
              <img src={gp} alt="" className="h-6 w-6" />
              <img src={spotify} alt="" className="h-6 w-6" />
              <img src={youtube} alt="" className="h-6 w-6" />
            </div>
          </div>
          <img src={sp} alt="" className="absolute right-[-70px] top-[-70px]" />
        </div>
      </div>
      <motion.div
        initial={{ x: 100, opacity: 0, rotate: "0deg" }}
        whileInView={{ x: 0, opacity: 1, rotate: "-15deg" }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        className="absolute right-[-390px] top-[80px] h-[859px] w-[699px]"
      >
        <img src={playing} alt="" className="w-full" />
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0, rotate: "0deg" }}
        whileInView={{ x: 0, opacity: 1, rotate: "10deg" }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        className="absolute left-[-120px] top-[400px] w-[505px]"
      >
        <img src={trending} alt="" className="w-full" />
      </motion.div>
    </section>
  );
}
