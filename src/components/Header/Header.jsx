import { motion } from "framer-motion";

import { Logo, Nav, SubscribeButtonSection } from "../../components";

export default function Header() {
  return (
    <motion.header className="flex items-center justify-center bg-[#F7EDE8] pt-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="cont flex w-[1160px] items-center justify-between bg-transparent"
      >
        <Logo />
        <Nav />
        <SubscribeButtonSection />
      </motion.div>
    </motion.header>
  );
}
