import logo from "../../assets/images/logo.svg";

export default function Logo() {
  return (
    <a href="/" className="block h-[76px] w-[76px]">
      <img src={logo} alt="logo" />
    </a>
  );
}
