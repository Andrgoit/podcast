import { Logo, Nav, SubscribeButtonSection } from "../../components";

export default function Header() {
  return (
    <header className=" bg-[#F7EDE8] flex items-center justify-center pt-6">
      <div className="cont w-[1160px] bg-transparent flex items-center justify-between">
        <Logo />
        <Nav />
        <SubscribeButtonSection />
      </div>
    </header>
  );
}
