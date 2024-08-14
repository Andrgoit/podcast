import { motion } from "framer-motion";
import { NoduleBlack } from "src/components";

import PriceList from "./PriceList/PriceList";
import sparkle from "src/assets/icons/BecomeOurSponsors/sparkle.svg";

export default function BecomeOurSponsors({ prices }) {
  return (
    <section className="relative py-[140px]">
      <div className="cont flex flex-col items-center gap-24">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="relative flex flex-col gap-5 text-center"
        >
          <h3 className="text-6xl font-bold">Become our sponsor</h3>
          <span className="text-2xl font-medium text-[#4D4D4D]">
            Get exclusive episodes, merch and more
          </span>
          <img
            src={sparkle}
            alt="sparkle"
            className="absolute left-[-74px] top-[-63px] w-[120px]"
          />
        </motion.div>
        <PriceList prices={prices} />
      </div>
      <NoduleBlack />
    </section>
  );
}
