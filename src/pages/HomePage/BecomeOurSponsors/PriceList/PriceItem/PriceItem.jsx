import BlackButton from "src/components/BlackButton/BlackButton";

export default function PriceItem({ priceItem }) {
  const { title, description, mostPopular, included, price } = priceItem;
  return (
    <div className="z-10 flex max-w-[373px] flex-col gap-5">
      <div
        className={`rounded-lg ${mostPopular ? `border border-[#CD4631]` : `border border-black`} px-10 pb-[30px] pt-[60px] ${mostPopular ? `bg-[#F7EDE8]` : `bg-white`}`}
      >
        <div className="mb-5 flex items-center justify-between">
          <h4 className="text-4xl font-bold text-black first-letter:uppercase">
            {title}
          </h4>
          {mostPopular ? (
            <span className="rounded bg-[#CD4631] px-[6px] py-[3px] font-bold uppercase text-white">
              most popular
            </span>
          ) : null}
        </div>
        <p className="mb-[90px] text-sm font-medium text-[#4D4D4D]">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <BlackButton>subscribe</BlackButton>
          <div className="flex flex-col items-start">
            <span className="text-2xl font-bold text-[#CD4631]">${price}</span>{" "}
            <span className="text-sm font-bold text-[#4D4D4D]">/month</span>
          </div>
        </div>
      </div>
      <div
        className={`min-h-[312px] rounded-lg p-10 ${mostPopular ? `border border-[#CD4631]` : `border border-black`} ${mostPopular ? `bg-[#F7EDE8]` : `bg-white`}`}
      >
        <p className="mb-5 text-sm font-bold text-[#4D4D4D]">
          What’s included:
        </p>
        <ul className="flex flex-col gap-2">
          {" "}
          {included.map((item) => (
            <li key={item} className="font-medium text-black first:font-bold">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
