import { motion } from "framer-motion";

import BenefitItem from "./BenefitItem/BenefitItem";

export default function BenefitsList({ benefits = [] }) {
  const elemenst = !benefits
    ? null
    : benefits.map((benefit) => (
        <BenefitItem benefit={benefit} key={benefit.id} />
      ));
  return (
    <motion.ul
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-row flex-wrap gap-5"
    >
      {elemenst}
    </motion.ul>
  );
}
