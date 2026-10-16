import { foodStatus } from "../../data/mock";

const toneStyles = {
  full: { bar: "bg-emerald-400", pill: "bg-emerald-100 text-emerald-700" },
  low: { bar: "bg-amber-400", pill: "bg-amber-100 text-amber-700" },
  hungry: { bar: "bg-orange-400", pill: "bg-orange-100 text-orange-700" },
  empty: { bar: "bg-[#ff8a7a]", pill: "bg-red-100 text-red-600" },
};

export default function FoodBowlIndicator({ level, compact = false }) {
  const { label, tone } = foodStatus(level);
  const s = toneStyles[tone];
  return (
    <div className={compact ? "w-full" : "w-full"}>
      <div className="flex items-center justify-between gap-2">
        <span className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold ${s.pill}`}>
          {label === "หิว" ? "หิว · ให้อาหารเลย" : `ชาม${label}`}
        </span>
        {!compact && <span className="text-[10px] font-bold text-[#8a7d70]">{level}%</span>}
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#f1e6d8]">
        <div className={`h-full rounded-full ${s.bar}`} style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}
