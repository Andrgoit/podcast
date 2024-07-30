export default function BenefitItem({ benefit }) {
  const { icon, title, text } = benefit;
  return (
    <li className="my-20 flex max-w-[372px] flex-col items-center text-center">
      <img src={icon} alt="" className="mb-7" />
      <h4 className="mb-2 text-2xl font-bold">{title}</h4>
      <p className="font-medium">{text}</p>
    </li>
  );
}
