export default function WhiteButton({ children }) {
  return (
    <button className="rounded-lg border-2 border-black px-6 py-3 text-sm font-bold uppercase text-black shadow-subscribeButton transition-colors duration-300 hover:bg-black hover:text-white">
      {children}
    </button>
  );
}
