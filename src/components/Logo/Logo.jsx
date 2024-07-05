import logo from "../../assets/images/logo.svg";

export default function Logo() {
  return (
    <a href="/" className=" block w-[76px] h-[76px]">
      <img src={logo} alt="logo" />
    </a>
  );
}
