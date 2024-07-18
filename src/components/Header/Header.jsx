import { Logo, Nav, SubscribeButtonSection } from "../../components";

export default function Header() {
  return (
    <header className="flex items-center justify-center bg-[#F7EDE8] pt-6">
      <div className="cont flex w-[1160px] items-center justify-between bg-transparent">
        <Logo />
        <Nav />
        <SubscribeButtonSection />
      </div>
    </header>
  );
}
