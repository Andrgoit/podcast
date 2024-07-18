export default function SubscribeButtonSection() {
  return (
    <div className="flex gap-5">
      <button className="rounded-lg border-2 border-black px-6 py-3 text-sm font-bold uppercase text-black transition-colors duration-300 hover:bg-black hover:text-white">
        recent episodes
      </button>
      <button className="rounded-lg border-2 border-black bg-black px-6 py-3 text-sm font-bold uppercase text-white shadow-subscribeButton transition-colors duration-300 hover:bg-transparent hover:text-black">
        subscribe
      </button>
    </div>
  );
}
