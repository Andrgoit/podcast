import { motion } from "framer-motion";

import sp from "../../../../assets/images/spring.svg";
import stars from "../../../../assets/images/stars.png";
import BlackButton from "../../../../components/BlackButton/BlackButton";

export default function Subscribe() {
  return (
    <div className="cont reletive">
      <motion.img
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        src={sp}
        alt="spring"
        className="absolute left-[-120px] top-[70px]"
      />
      <motion.img
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        src={stars}
        alt="stars"
        className="absolute right-16 top-[235px]"
      />
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex max-w-[513px] flex-col items-center gap-10 text-center"
      >
        <p className="text-8xl font-bold text-black">
          Your Daily
          <span className="text-[#CD4631]"> Podcast</span>
        </p>
        <p className="w-[300px] text-base text-[#4D4D4D]">
          We cover all kinds of categories and a weekly special guest.
        </p>
        <BlackButton>subscribe</BlackButton>
      </motion.div>
    </div>
  );
}
