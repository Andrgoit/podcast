import { Link } from "react-router-dom";

const col1 = [
  { id: 1, href: "#", label: "About" },
  { id: 2, href: "#", label: "Testimonials" },
  { id: 3, href: "#", label: "Features" },
];

const col2 = [
  { id: 1, href: "#", label: "Episodes" },
  { id: 2, href: "#", label: "Pricing" },
  { id: 3, href: "#", label: "Blog" },
];

export default function CentralSide() {
  const columnLeft = col1.map(({ id, href, label }) => (
    <li key={id}>
      <Link
        to={href}
        className="text-base font-medium leading-relaxed text-black transition-colors duration-300 hover:text-[#CD4631]"
      >
        {label}
      </Link>
    </li>
  ));

  const columnRight = col2.map(({ id, href, label }) => (
    <li key={id}>
      <Link
        to={href}
        className="text-base font-medium leading-relaxed text-black transition-colors duration-300 hover:text-[#CD4631]"
      >
        {label}
      </Link>
    </li>
  ));
  return (
    <div className="flex gap-[93px]">
      <ul className="flex flex-col gap-5">{columnLeft}</ul>
      <ul className="flex flex-col gap-5">{columnRight}</ul>
    </div>
  );
}
