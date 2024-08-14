import { motion } from "framer-motion";

import nodule from "src/assets/images/nodule_black.svg";

export default function NoduleBlack() {
  return (
    <motion.div
      whileInView={{ scale: [1, 1.5, 1] }}
      transition={{ delay: 0.5, duration: 0.5 }}
      viewport={{ once: true }}
      className="absolute bottom-[-76px] z-10"
      style={{ right: "calc(50% - 50px)" }}
    >
      <img src={nodule} alt="nodule" />
    </motion.div>
  );
}
