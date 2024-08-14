import { motion } from "framer-motion";
import { NoduleBlack } from "src/components";
import Quote from "./Quote/Quote";

import mindman from "../../../assets/images/mindman.svg";
import bulb from "../../../assets/images/bulb.svg";

export default function About() {
  return (
    <section className="relative bg-white py-[140px]">
      <div className="cont flex flex-col items-center gap-28">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-[753px] text-center text-6xl font-bold text-black"
        >
          Talk. Listen. Get inspired by every minute of it.
        </motion.h2>
        <div className="flex w-full justify-between">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex max-w-[472px] flex-col items-center gap-10"
          >
            <div>
              <img src={mindman} alt="mindman" />
            </div>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio.{" "}
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex max-w-[472px] flex-col items-center gap-10"
          >
            <div>
              <img src={bulb} alt="bulb" />
            </div>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio.{" "}
            </p>
          </motion.div>
        </div>
        <Quote />
      </div>
      <NoduleBlack />
    </section>
  );
}
