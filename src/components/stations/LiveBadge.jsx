export default function LiveBadge({ isLive }) {
  if (!isLive) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2 py-1 text-[10px] font-extrabold tracking-wider text-white backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
        OFFLINE
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2 py-1 text-[10px] font-extrabold tracking-wider text-white backdrop-blur">
      <span className="live-dot relative h-1.5 w-1.5 rounded-full bg-[#ff3b30]" />
      LIVE
    </span>
  );
}
