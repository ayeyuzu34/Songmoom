import { useState } from "react";
import { Cat, MapPin } from "lucide-react";
import { feeders } from "../data/mock";

const chips = ["สนับสนุนฟีดเดอร์", "รับเครื่องให้อาหาร", "ช่วย TNR"];

export default function CarePage() {
  const [chip, setChip] = useState(chips[0]);
  const [supported, setSupported] = useState([]);

  return (
    <div className="pb-4">
      {/* Green hero */}
      <div className="relative overflow-hidden bg-[#d7f0a0] px-4 pb-10 pt-4">
        <h1 className="text-[24px] font-black leading-snug text-[#2b3a2b]">
          Songmoom รวมพลัง
          <br />
          คนรักสัตว์ร่วมกัน
          <br />
          เพื่อเปลี่ยนชีวิตของ
        </h1>
        <p className="mt-2 inline-block -rotate-2 rounded-2xl bg-[#2b3a2b] px-4 py-1.5 text-[22px] font-black text-white">
          แมวจรจัด
        </p>
        <span className="absolute right-4 top-6 grid h-20 w-20 place-items-center rounded-full bg-[#fcb316]/30">
          <Cat size={52} className="text-[#e8930c]" strokeWidth={2} />
        </span>

        <div className="mt-4 grid grid-cols-2 gap-2.5">
          <div className="rounded-3xl bg-white/70 px-3 py-3 text-center backdrop-blur">
            <p className="text-[20px] font-black text-[#2b3a2b]">600K+</p>
            <p className="mt-0.5 text-[11px] font-bold text-[#5c6b5c]">แมวจรที่ได้รับการดูแล</p>
          </div>
          <div className="rounded-3xl bg-white/70 px-3 py-3 text-center backdrop-blur">
            <p className="text-[20px] font-black text-[#2b3a2b]">85K+</p>
            <p className="mt-0.5 text-[11px] font-bold text-[#5c6b5c]">ทำหมันแล้ว 85K+ และรับเลี้ยง 1K+</p>
          </div>
        </div>
      </div>

      {/* White sheet */}
      <div className="-mt-6 rounded-t-[28px] bg-[#fff8f0] px-4 pt-7">
        <h2 className="text-[19px] font-black text-[#4a3f35]">ช่วยกันสร้างการเปลี่ยนแปลง!</h2>

        <div className="no-scrollbar -mx-4 mt-2.5 flex gap-2 overflow-x-auto px-4">
          {chips.map((c) => (
            <button
              key={c}
              onClick={() => setChip(c)}
              className={`shrink-0 rounded-full px-4 py-2 text-[13px] font-extrabold transition ${
                chip === c
                  ? "bg-[#e3efb8] text-[#4a5a2b] shadow"
                  : "bg-white text-[#b8ab9e] shadow-[0_4px_12px_rgba(74,63,53,0.06)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-3 space-y-3">
          {feeders.map((f) => {
            const pct = Math.min(100, Math.round((f.raised / f.goal) * 100));
            const done = supported.includes(f.id);
            return (
              <article
                key={f.id}
                className="overflow-hidden rounded-3xl bg-white shadow-[0_8px_24px_rgba(74,63,53,0.08)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#ffe8cc]">
                  <img
                    src={f.thumbnail}
                    alt={f.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur">
                    <MapPin size={11} strokeWidth={2.5} />
                    {f.location}
                  </span>
                  <div className="absolute inset-x-2.5 bottom-2.5 rounded-2xl bg-white/25 px-3 py-2 backdrop-blur-md">
                    <div className="flex items-center justify-between text-[13px] font-black text-white">
                      <span>
                        ${f.raised}/${f.goal}
                      </span>
                      <span>{pct}%</span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/40">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#9be15d] to-[#fce25d]"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                </div>
                <div className="p-3.5">
                  <h3 className="text-[16px] font-black text-[#4a3f35]">{f.title}</h3>
                  <p className="mt-1 line-clamp-2 text-[13px] font-semibold leading-relaxed text-[#8a7d70]">
                    {f.desc}
                  </p>
                  <button
                    onClick={() => !done && setSupported((s) => [...s, f.id])}
                    disabled={done}
                    className="mt-2.5 w-full rounded-2xl bg-[#ff8a7a] py-2.5 text-[14px] font-black text-white shadow-[0_8px_20px_rgba(255,138,122,0.35)] transition active:scale-[0.98] disabled:opacity-60"
                  >
                    {done ? "สนับสนุนแล้ว ✓" : "สนับสนุนฟีดเดอร์นี้"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
