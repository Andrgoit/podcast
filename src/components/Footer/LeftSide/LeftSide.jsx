import { Logo } from "../../../components";
import SocialLinksBlock from "./SocialLinksBlock/SocialLinksBlock";

export default function LeftSide() {
  return (
    <div className="flex max-w-[275px] flex-col gap-10">
      <Logo />
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      <SocialLinksBlock />
    </div>
  );
}
