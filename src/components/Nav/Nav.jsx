import { Link } from "react-router-dom";
import items from "./items";

export default function Nav() {
  const elements = items.map(({ id, href, label }) => (
    <li key={id}>
      <Link
        to={href}
        className="font-bold transition-colors duration-300 hover:text-[#CD4631]"
      >
        {label}
      </Link>
    </li>
  ));
  return <ul className="flex gap-[60px]">{elements}</ul>;
}
