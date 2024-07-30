import BenefitItem from "./BenefitItem/BenefitItem";

export default function BenefitsList({ benefits = [] }) {
  const elemenst = !benefits
    ? null
    : benefits.map((benefit) => (
        <BenefitItem benefit={benefit} key={benefit.id} />
      ));
  return <ul className="flex flex-row flex-wrap gap-5">{elemenst}</ul>;
}
