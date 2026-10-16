import { Cookie, PawPrint } from "lucide-react";

export default function Header({ kibbles }) {
  return (
    <header className="sticky top-0 z-20 border-b border-[#f1e6d8] bg-[#fff8f0]/95 backdrop-blur">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-[#ff8a7a] text-white shadow-[0_6px_16px_rgba(255,138,122,0.4)]">
            <PawPrint size={20} strokeWidth={2.5} />
          </span>
          <div className="leading-tight">
            <p className="text-[16px] font-black tracking-tight text-[#4a3f35]">Songmoom</p>
            <p className="text-[11px] font-bold text-[#8a7d70]">ให้อาหาร & ช่วยเหลือแมวจร</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-[#ffe8cc] px-3 py-1.5 shadow-inner">
          <Cookie size={15} className="text-[#b7791f]" strokeWidth={2.5} />
          <span className="text-[13px] font-black text-[#4a3f35]">
            {kibbles.toLocaleString()}
          </span>
        </div>
      </div>
    </header>
  );
}
