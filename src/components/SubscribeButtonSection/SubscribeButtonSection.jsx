export default function SubscribeButtonSection() {
  return (
    <div className="flex gap-5">
      <button className=" py-3 px-6 text-sm text-black font-bold rounded-lg border-2 border-black uppercase hover:bg-black hover:text-white transition-colors duration-300">
        recent episodes
      </button>
      <button className=" py-3 px-6 text-sm text-white bg-black font-bold rounded-lg border-2 border-black uppercase shadow-subscribeButton hover:bg-transparent hover:text-black transition-colors duration-300">
        subscribe
      </button>
    </div>
  );
}
