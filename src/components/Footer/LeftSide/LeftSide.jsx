import { Logo } from "../../../components";
import SocialLinksBlock from "./SocialLinksBlock/SocialLinksBlock";

export default function LeftSide() {
  return (
    <div className="flex flex-col gap-10 max-w-[275px]">
      <Logo />
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      <SocialLinksBlock />
    </div>
  );
}
