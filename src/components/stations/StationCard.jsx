import { Eye, MapPin, PawPrint } from "lucide-react";
import { strays } from "../../data/mock";
import FoodBowlIndicator from "./FoodBowlIndicator";
import LiveBadge from "./LiveBadge";

export default function StationCard({ station, onOpen }) {
  const activeStray = strays.find((s) => s.id === station.activeStrayId);

  return (
    <button
      onClick={() => onOpen?.(station)}
      className="group overflow-hidden rounded-3xl bg-white text-left shadow-[0_8px_24px_rgba(74,63,53,0.08)] transition active:scale-[0.98]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#ffe8cc]">
        <img
          src={station.thumbnail}
          alt={station.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between bg-gradient-to-b from-black/45 to-transparent p-2.5 pb-6">
          <LiveBadge isLive={station.isLive} />
          {station.isLive && (
            <span className="inline-flex items-center gap-1 rounded-full bg-black/55 px-2 py-1 text-[10px] font-bold text-white backdrop-blur">
              <Eye size={11} strokeWidth={2.5} />
              {station.viewers}
            </span>
          )}
        </div>
        {activeStray && (
          <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-1 text-[10px] font-extrabold text-[#4a3f35] shadow">
            <PawPrint size={12} className="text-[#ff8a7a]" strokeWidth={2.5} />
            {activeStray.name} อยู่ที่นี่
          </span>
        )}
      </div>

      <div className="p-3">
        <p className="flex items-center gap-1 text-[11px] font-bold text-[#8a7d70]">
          <MapPin size={11} strokeWidth={2.5} />
          <span className="truncate">{station.location}</span>
        </p>
        <h3 className="mt-0.5 truncate text-[14px] font-extrabold text-[#4a3f35]">
          {station.name}
        </h3>
        <div className="mt-2">
          <FoodBowlIndicator level={station.food_level} compact />
        </div>
        <p className="mt-1.5 text-[10px] font-semibold text-[#8a7d70]">
          ให้ล่าสุด · {station.lastFed}
        </p>
      </div>
    </button>
  );
}
