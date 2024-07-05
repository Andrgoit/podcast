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
        className=" font-medium text-black text-base hover:text-[#CD4631] transition-colors duration-300 leading-relaxed"
      >
        {label}
      </Link>
    </li>
  ));

  const columnRight = col2.map(({ id, href, label }) => (
    <li key={id}>
      <Link
        to={href}
        className=" font-medium text-black text-base hover:text-[#CD4631] transition-colors duration-300 leading-relaxed"
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
