import { useState } from "react";
import { Cat, Crown, Fish, Pencil, Settings, Trophy } from "lucide-react";
import { currentUser, stations } from "../data/mock";

export default function ProfilePage({ kibbles }) {
  const [feedTab, setFeedTab] = useState("feed");

  return (
    <div className="px-4 pb-4 pt-3">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="relative grid h-16 w-16 place-items-center overflow-hidden rounded-full bg-[#e8f6f5]">
            <Cat size={38} className="text-[#e8a06c]" strokeWidth={2} />
            <span className="absolute bottom-0 right-0 grid h-6 w-6 place-items-center rounded-full border-2 border-[#fff8f0] bg-white text-[#8a7d70]">
              <Pencil size={12} strokeWidth={2.5} />
            </span>
          </span>
          <div>
            <p className="text-[19px] font-black text-[#4a3f35]">{currentUser.name}</p>
            <p className="text-[11px] font-bold text-[#b8ab9e]">ID:{currentUser.id}7410310661599078168</p>
          </div>
        </div>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#b8ab9e] shadow-[0_4px_12px_rgba(74,63,53,0.08)]">
          <Settings size={18} strokeWidth={2.2} />
        </span>
      </div>

      {/* Stats */}
      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="rounded-2xl bg-white p-3 shadow-[0_4px_12px_rgba(74,63,53,0.06)]">
          <p className="flex items-center gap-1 text-[13px] font-black text-[#4a3f35]">
            <Trophy size={14} className="text-[#a06ce8]" />
            การจัดอันดับ
          </p>
          <p className="mt-1 text-[11px] font-bold text-[#b8ab9e]">คลิกเพื่อดูรายละเอียด</p>
        </div>
        <div className="rounded-2xl bg-white p-3 shadow-[0_4px_12px_rgba(74,63,53,0.06)]">
          <p className="flex items-center gap-1 text-[15px] font-black text-[#4a3f35]">
            <Fish size={15} className="text-[#e8930c]" />
            {kibbles.toLocaleString()}
          </p>
          <p className="mt-1 text-right text-[11px] font-black text-[#a06ce8]">ซื้อ ›</p>
        </div>
        <div className="rounded-2xl bg-white p-3 shadow-[0_4px_12px_rgba(74,63,53,0.06)]">
          <p className="text-[15px] font-black text-[#4a3f35]">
            0 <span className="text-[12px]">กรัม</span>
          </p>
          <p className="mt-1 text-[11px] font-bold text-[#b8ab9e]">ทั้งหมด</p>
        </div>
        <div className="col-span-1 rounded-2xl bg-white p-3 shadow-[0_4px_12px_rgba(74,63,53,0.06)]">
          <p className="text-[15px] font-black text-[#4a3f35]">0</p>
          <p className="mt-1 text-[11px] font-bold text-[#b8ab9e]">จำนวนการทำหมัน</p>
        </div>
        <div className="col-span-2 rounded-2xl bg-white p-3 shadow-[0_4px_12px_rgba(74,63,53,0.06)]">
          <p className="flex items-center gap-1.5 text-[14px] font-black text-[#4a3f35]">
            <span className="rounded-md bg-[#2b8a3e] px-1.5 py-0.5 text-[10px] font-black text-white">
              VIP
            </span>
            สมัครเลย
          </p>
          <p className="mt-1 text-[11px] font-bold leading-relaxed text-[#b8ab9e]">
            สร้างชีวิตที่อบอุ่นให้แมวจรจัดวันนี้
          </p>
        </div>
      </div>

      {/* Membership banner */}
      <div className="mt-2.5 flex items-center justify-between gap-2 rounded-3xl bg-gradient-to-r from-[#ffe8cc] to-[#ffd9b8] p-3.5">
        <span className="flex items-center gap-2.5">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#2b3a2b]">
            <Crown size={24} className="text-[#fcb316]" />
          </span>
          <span>
            <p className="text-[14px] font-black text-[#4a3f35]">สมาชิกแผนรายเดือน</p>
            <p className="text-[11px] font-bold text-[#8a7d70]">รางวัลเช็คอิน 2 เท่าทุกวัน</p>
          </span>
        </span>
        <button className="shrink-0 rounded-full bg-[#2b3a2b] px-4 py-2 text-[13px] font-black text-white">
          ลองตอนนี้
        </button>
      </div>

      {/* Tabs */}
      <div className="mt-4 grid grid-cols-2 text-center">
        {[
          { id: "feed", label: "ให้อาหาร" },
          { id: "follow", label: "ติดตาม" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setFeedTab(t.id)}
            className={`relative pb-2 text-[16px] font-black ${
              feedTab === t.id ? "text-[#4a3f35]" : "text-[#b8ab9e]"
            }`}
          >
            {t.label}
            {feedTab === t.id && (
              <span className="absolute inset-x-[38%] -bottom-0.5 h-1 rounded-full bg-[#fcb316]" />
            )}
          </button>
        ))}
      </div>

      {feedTab === "feed" ? (
        <div className="mt-3 flex items-center justify-between overflow-hidden rounded-3xl bg-gradient-to-r from-[#ffe066] to-[#ffd43b] p-4">
          <div>
            <p className="text-[16px] font-black text-[#4a3f35]">{currentUser.name}</p>
            <p className="mt-0.5 text-[12px] font-bold text-[#7a5c00]">
              ยินดีต้อนรับสู่ Songmoom
            </p>
          </div>
          <Cat size={56} className="text-white/90" strokeWidth={1.6} />
        </div>
      ) : (
        <div className="mt-3 space-y-2">
          {stations
            .filter((s) => s.isLive)
            .map((s) => (
              <div
                key={s.id}
                className="flex items-center gap-3 rounded-2xl bg-white p-2.5 shadow-[0_4px_12px_rgba(74,63,53,0.06)]"
              >
                <img
                  src={s.thumbnail}
                  alt={s.name}
                  loading="lazy"
                  className="h-11 w-11 rounded-xl object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[14px] font-black text-[#4a3f35]">{s.name}</p>
                  <p className="text-[11px] font-bold text-[#b8ab9e]">{s.location} · ติดตามแล้ว</p>
                </div>
                <span className="rounded-full bg-[#e3efb8] px-3 py-1.5 text-[12px] font-black text-[#4a5a2b]">
                  ✓
                </span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
