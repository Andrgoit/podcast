export default function EpisodesItem({ item }) {
  const { id, title, img, text, tags, hostedBy } = item;

  const tagElements = tags.map((tag) => (
    <div
      className="inline-block rounded border border-[#4D4D4D] px-3 py-[6px] text-[#4D4D4D]"
      key={tag}
    >
      {tag}
    </div>
  ));

  const hostElements = hostedBy.map(({ id, icon, name }, idx) => {
    const margin = "10px";

    return (
      <div
        key={id}
        style={{ position: "relative", left: `calc(${idx} * ${margin} * -1)` }}
      >
        {" "}
        <img src={icon} alt={name} />
      </div>
    );
  });

  return (
    <li className="flex w-[568px] flex-col gap-5 rounded-xl border-2 border-black bg-white p-4 [&:nth-child(1)]:shadow-episode [&:nth-child(4)]:shadow-episode [&:nth-child(5)]:shadow-episode">
      <div className="flex gap-5">
        <div>
          <img src={img} alt={title} />
        </div>
        <div>
          <div className="border-b pb-4">
            <span className="text-base font-bold text-[#CD4631]">Esp.{id}</span>
            <h4 className="cursor-pointer text-2xl font-bold transition-colors duration-300 hover:text-[#CD4631]">
              {title}
            </h4>
          </div>
          <p className="mt-2 max-w-[300px] text-[#4D4D4D]">{text}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-[6px]">{tagElements}</div>
        <div className="flex items-center gap-2 text-[#4D4D4D]">
          Hosted by:
          <div className="flex items-center">{hostElements}</div>
        </div>
      </div>
    </li>
  );
}
