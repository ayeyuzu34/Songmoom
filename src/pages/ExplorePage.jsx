import { useMemo, useState } from "react";
import { Bell, Search } from "lucide-react";
import StationCard from "../components/stations/StationCard";

const filters = ["ยอดนิยม", "กำลังติดตาม", "ใกล้ฉัน"];

export default function ExplorePage({ stations, onOpenStation }) {
  const [filter, setFilter] = useState("ยอดนิยม");

  const visible = useMemo(() => {
    if (filter === "ยอดนิยม") return [...stations].sort((a, b) => b.viewers - a.viewers);
    if (filter === "กำลังติดตาม") return stations.filter((s) => s.activeStrayId);
    return stations;
  }, [filter, stations]);

  return (
    <div className="px-4 pb-4 pt-2">
      <div className="flex items-center justify-between gap-2 py-2">
        <div className="flex items-center gap-4">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative pb-1 text-[15px] font-black transition ${
                filter === f ? "text-[#4a3f35]" : "text-[#b8ab9e]"
              }`}
            >
              {f}
              {filter === f && (
                <span className="absolute inset-x-4 -bottom-0.5 h-1 rounded-full bg-[#ff8a7a]" />
              )}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#4a3f35] shadow-[0_4px_12px_rgba(74,63,53,0.08)]">
            <Bell size={18} strokeWidth={2.2} />
          </span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#4a3f35] shadow-[0_4px_12px_rgba(74,63,53,0.08)]">
            <Search size={18} strokeWidth={2.2} />
          </span>
        </div>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-3">
        {visible.map((s) => (
          <StationCard key={s.id} station={s} onOpen={onOpenStation} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-8 text-center text-[13px] font-bold text-[#8a7d70]">
          ไม่มีสถานีที่ตรงกับตัวกรองนี้
        </p>
      )}
    </div>
  );
}
