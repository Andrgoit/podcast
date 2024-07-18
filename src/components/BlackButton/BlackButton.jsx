export default function BlackButton({ children }) {
  return (
    <button className="inline rounded-lg border-2 border-black bg-black px-9 py-5 text-sm font-bold uppercase text-white shadow-subscribeButton transition-colors duration-300 hover:bg-transparent hover:text-black">
      {children}
    </button>
  );
}
