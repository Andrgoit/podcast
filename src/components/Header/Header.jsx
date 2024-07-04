import { Logo, Nav, SubscribeButtonSection } from "../../components";

export default function Header() {
  return (
    <header className="cont bg-orange-300 flex items-center justify-between">
      <Logo />
      <Nav />
      <SubscribeButtonSection />
    </header>
  );
}
