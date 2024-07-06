export default function BlackButton({ children }) {
  return (
    <button className=" inline py-5 px-9 text-sm text-white bg-black font-bold rounded-lg border-2 border-black uppercase shadow-subscribeButton hover:bg-transparent hover:text-black transition-colors duration-300">
      {children}
    </button>
  );
}
