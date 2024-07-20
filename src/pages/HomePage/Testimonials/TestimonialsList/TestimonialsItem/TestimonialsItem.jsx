import quotes from "../../../../../assets/images/quotes.png";

export default function TestimonialsItem({ item }) {
  const { avatar, name, message, socialLink } = item;

  return (
    <div className="flex max-w-[570px] flex-col items-start gap-8 rounded-lg bg-white p-10">
      <div className="w-12">
        <img src={quotes} alt="quotes" />
      </div>
      <p>{message}</p>
      <div className="flex h-12 items-center gap-2">
        <div className="w-12">
          <img src={avatar} alt="avatar" />
        </div>
        <span>{name},</span>
        <div>
          <img src={socialLink} alt="social link" />
        </div>
      </div>
    </div>
  );
}
