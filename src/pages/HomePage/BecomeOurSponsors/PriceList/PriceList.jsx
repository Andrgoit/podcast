import { motion } from "framer-motion";

import PriceItem from "./PriceItem/PriceItem";

import star from "src/assets/icons/BecomeOurSponsors/star.svg";
import spiral from "src/assets/icons/BecomeOurSponsors/spiral.svg";

export default function PriceList({ prices }) {
  const elements = prices.map((priceItem) => (
    <PriceItem key={priceItem.id} priceItem={priceItem} />
  ));

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      viewport={{ once: true }}
      className="relative flex gap-5"
    >
      {elements}
      <img
        src={star}
        alt="star"
        className="absolute right-[-87px] top-[-92px]"
      />
      <img
        src={spiral}
        alt="spiral"
        className="absolute left-[-70px] top-[609px] h-[120px] w-[120px]"
      />
    </motion.div>
  );
}
