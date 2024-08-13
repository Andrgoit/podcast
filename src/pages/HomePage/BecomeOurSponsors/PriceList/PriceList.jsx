import PriceItem from "./PriceItem/PriceItem";

import star from "src/assets/icons/BecomeOurSponsors/star.svg";
import spiral from "src/assets/icons/BecomeOurSponsors/spiral.svg";

export default function PriceList({ prices }) {
  const elements = prices.map((priceItem) => (
    <PriceItem key={priceItem.id} priceItem={priceItem} />
  ));

  return (
    <div className="relative flex gap-5">
      {elements}
      <img
        src={star}
        alt="star"
        className="absolute right-[-87px] top-[-92px]"
      />
      <img
        src={spiral}
        alt="spiral"
        className="absolute left-[-70px] top-[609px] h-[120px] w-[120px]"
      />
    </div>
  );
}
