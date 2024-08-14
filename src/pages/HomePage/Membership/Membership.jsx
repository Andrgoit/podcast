import { motion } from "framer-motion";
import { NoduleBlack } from "src/components";

import BenefitsList from "./BenefitsList/BenefitsList";
import BlackButton from "src/components/BlackButton/BlackButton";
import benefits from "../Membership/BenefitsList/benefits.js";

import scribble from "src/assets/icons/membership/scribble.svg";

export default function Membership() {
  return (
    <section className="relative bg-white py-[140px]">
      <div className="cont flex flex-col items-center">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="relative mb-24 flex flex-col gap-5 text-center"
        >
          <h3 className="text-6xl font-bold">Membership benefits</h3>
          <span className="text-2xl font-medium text-[#4D4D4D]">
            Become our sponsor and get all benefits
          </span>
          <img
            src={scribble}
            alt="scribble"
            className="absolute right-[-128px] top-[-172px]"
          />
        </motion.div>
        <BenefitsList benefits={benefits} />
        <BlackButton>see pricing</BlackButton>
      </div>
      <NoduleBlack />
    </section>
  );
}
