import { useEffect, useRef, useState } from "react";
import { Cat, ChevronLeft, Cookie, Eye, Fish, Heart } from "lucide-react";
import { trackFeedKibble } from "../lib/analytics.js";

const INITIAL_LOGS = [
  "POs: ให้ขนม 1 ครั้ง",
  "POs: ให้อาหารเม็ด 10 กรัม",
  "POs: ให้อาหารเม็ด 10 กรัม",
  "POs: ให้อาหารเม็ด 10 กรัม",
];

let burstId = 0;

export default function LiveFeedingPage({ station, kibbles, onBack, onSpend }) {
  const [logs, setLogs] = useState(INITIAL_LOGS);
  const [bursts, setBursts] = useState([]);
  const logRef = useRef(null);

  const title = station?.name ?? "ส้มจี๊ด";
  const viewers = station?.viewers ?? 1;
  const canFeed = kibbles > 0;

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [logs]);

  const spawnBurst = (kind) => {
    const id = ++burstId;
    setBursts((b) => [...b.slice(-5), { id, kind }]);
    setTimeout(() => setBursts((b) => b.filter((x) => x.id !== id)), 1100);
  };

  const feed = (kind) => {
    if (!canFeed) return;
    onSpend?.(1);
    if (kind === "kibble") trackFeedKibble(station?.id, kibbles - 1);
    spawnBurst(kind);
    setLogs((l) =>
      kind === "snack"
        ? [...l, "POs: ให้ขนม 1 ครั้ง"]
        : [...l, "POs: ให้อาหารเม็ด 10 กรัม"],
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#eef4f2]">
      {/* Top nav */}
      <div className="flex items-center justify-between px-3 py-2.5">
        <button
          onClick={onBack}
          className="rounded-xl bg-teal-800 px-4 py-2 text-[14px] font-extrabold text-white transition hover:bg-teal-900 active:scale-95"
        >
          <span className="inline-flex items-center gap-0.5">
            <ChevronLeft size={16} strokeWidth={3} />
            กลับ
          </span>
        </button>
        <h1 className="text-[17px] font-black tracking-tight text-[#2b3a3a]">{title}</h1>
        <span className="inline-flex items-center gap-1 rounded-full border border-[#d8e2de] bg-white px-2.5 py-1.5 text-[12px] font-extrabold text-[#2b3a3a]">
          <Eye size={14} strokeWidth={2.5} />
          {viewers}
        </span>
      </div>

      {/* Live camera view */}
      <div className="relative mx-0 flex min-h-[380px] flex-1 flex-col items-center justify-center overflow-hidden bg-[#1c3038]">
        <span className="grid h-24 w-24 place-items-center rounded-3xl bg-[#f5a623]/15">
          <Cat size={72} strokeWidth={1.8} className="text-[#f5a623]" />
        </span>
        <p className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold text-white/90">
          <span className="live-dot relative inline-block h-2 w-2 rounded-full bg-[#ff3b30]" />
          ถ่ายทอดสด · แมวกำลังกินข้าว
        </p>

        {/* feed bursts */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {bursts.map((b) => (
            <span key={b.id} className="feed-burst" style={{ left: `${35 + (b.id % 5) * 7}%` }}>
              {b.kind === "snack" ? (
                <Heart size={22} className="fill-[#ff6b7a] text-[#ff6b7a]" />
              ) : (
                <Cookie size={22} className="text-[#fcb316]" />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Activity log + footer */}
      <div className="bg-[#eef4f2] px-3 pb-4 pt-2">
        <div
          ref={logRef}
          className="live-log h-28 overflow-y-auto rounded-xl border border-[#d8e2de] bg-white px-3 py-2 text-[13px] font-semibold leading-6 text-[#2b3a3a]"
        >
          {logs.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <div className="mt-2.5 flex gap-2">
          <button
            onClick={() => feed("kibble")}
            disabled={!canFeed}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-2xl border-2 border-[#7a4a00] bg-[#fcb316] px-3 py-3 text-[14px] font-black text-[#4a2f00] shadow transition active:scale-[0.98] disabled:opacity-50"
          >
            ให้อาหารเม็ด 10 กรัม (1
            <Fish size={15} strokeWidth={2.5} className="inline" />)
          </button>
          <button
            onClick={() => feed("snack")}
            disabled={!canFeed}
            className="rounded-2xl bg-[#0c6b65] px-5 py-3 text-[14px] font-black text-white shadow transition hover:bg-[#134e4a] active:scale-[0.98] disabled:opacity-50"
          >
            ให้ขนม
          </button>
        </div>
        {!canFeed && (
          <p className="mt-1.5 text-center text-[12px] font-bold text-[#b8ab9e]">
            คิบเบิลหมดแล้ว — กลับไปสะสมอาหารเม็ดก่อนนะ
          </p>
        )}
      </div>
    </div>
  );
}
