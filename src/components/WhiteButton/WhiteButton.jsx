export default function WhiteButton({ children }) {
  return (
    <button className="py-3 px-6 text-sm text-black font-bold rounded-lg border-2 shadow-subscribeButton border-black uppercase hover:bg-black hover:text-white transition-colors duration-300">
      {children}
    </button>
  );
}
