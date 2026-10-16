import { useState } from "react";
import { Cat, ChevronLeft, Fish, Home, Megaphone, Ticket, Tv, Video, Wallet } from "lucide-react";
import { checkinWeek, earnTasks, kibbleStats } from "../data/mock";

const taskIcons = { follow: Home, social: Megaphone, video: Video, ads: Tv };

export default function KibblePage({ kibbles, onCheckin }) {
  const [checkedIn, setCheckedIn] = useState(false);
  const [doneTasks, setDoneTasks] = useState([]);

  const doCheckin = () => {
    if (checkedIn) return;
    setCheckedIn(true);
    onCheckin?.(2);
  };

  return (
    <div className="px-4 pb-4 pt-3">
      {/* Title row */}
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1 text-[20px] font-black text-[#c98a3d]">
          <ChevronLeft size={20} strokeWidth={3} />
          ได้ขนมรางวัล
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[13px] font-extrabold text-[#4a3f35] shadow-[0_4px_12px_rgba(74,63,53,0.08)]">
          <Wallet size={15} strokeWidth={2.5} />
          ยอดเงิน
        </span>
      </div>

      {/* Social proof */}
      <div className="mt-3 rounded-t-3xl bg-[#8a6f5c] px-4 py-2.5 text-[13px] font-bold text-white">
        มีผู้ใช้ {kibbleStats.usersReceived.toLocaleString()} คนได้รับ Kibble แล้ว
      </div>
      <div className="rounded-b-3xl bg-white p-3 shadow-[0_8px_24px_rgba(74,63,53,0.08)]">
        <p className="text-[14px] font-extrabold text-[#4a3f35]">
          คุณได้ <span className="text-[#f26d5d]">{kibbleStats.myKibbleDays}</span> แมวสามารถอิ่มได้{" "}
          <span className="text-[#f26d5d]">{kibbleStats.fullDays}</span> วัน!
        </p>
        <div className="mt-2.5 grid grid-cols-7 gap-1.5">
          {checkinWeek.map((d) => (
            <div
              key={d.day}
              className="rounded-xl bg-[#fff4e6] px-1 py-2 text-center text-[11px] font-extrabold text-[#4a3f35]"
            >
              <p>{d.day}</p>
              <p className="mt-0.5 text-[#b7791f]">{checkedIn ? "+2" : d.amount}</p>
            </div>
          ))}
          <button className="rounded-xl border-2 border-[#b7791f] px-1 py-2 text-center text-[11px] font-black text-[#b7791f]">
            เข้าร่วม
          </button>
        </div>
      </div>

      {/* Daily */}
      <div className="mt-3 flex items-center justify-between gap-2 rounded-3xl bg-white p-4 shadow-[0_8px_24px_rgba(74,63,53,0.08)]">
        <div>
          <p className="text-[16px] font-black text-[#4a3f35]">รับเมล็ดอาหารรายวัน</p>
          <p className="mt-0.5 text-[11px] font-bold text-[#8a7d70]">
            รีเซ็ตครั้งถัดไปใน {kibbleStats.resetIn}
          </p>
        </div>
        <button
          onClick={doCheckin}
          disabled={checkedIn}
          className="shrink-0 rounded-full bg-[#e8a06c] px-5 py-2.5 text-[14px] font-black text-white shadow transition active:scale-95 disabled:opacity-60"
        >
          {checkedIn ? "รับแล้ว ✓" : "เช็คอิน +2"}
        </button>
      </div>

      {/* Lottery banner */}
      <div className="relative mt-3 overflow-hidden rounded-3xl bg-gradient-to-r from-[#4a6cf7] to-[#7a9bff] p-4 text-white shadow">
        <p className="text-[17px] font-black leading-snug">
          ล็อตเตอรี่ข้าวแมว
          <br />
          ชนะข้าวแมวถึง 2000
          <br />
          กับทุกการวาง!
        </p>
        <span className="absolute bottom-3 right-4 grid h-14 w-14 place-items-center rounded-full bg-[#fcb316] shadow-lg">
          <Fish size={28} className="text-white" strokeWidth={2.5} />
        </span>
        <span className="absolute -right-2 -top-3 grid h-12 w-12 place-items-center rounded-full bg-white/20">
          <Cat size={26} className="text-white" />
        </span>
      </div>

      {/* Earn more */}
      <div className="mt-3 rounded-3xl bg-white p-4 shadow-[0_8px_24px_rgba(74,63,53,0.08)]">
        <p className="text-[16px] font-black text-[#4a3f35]">วิธีหาอาหารแมวเพิ่มเติม</p>
        <div className="mt-2 divide-y divide-[#f1e6d8]">
          {earnTasks.map((t) => {
            const Icon = taskIcons[t.id] ?? Ticket;
            const done = doneTasks.includes(t.id);
            return (
              <div key={t.id} className="flex items-center gap-3 py-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#fff4e6]">
                  <Icon size={22} className="text-[#e8a06c]" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[14px] font-black text-[#4a3f35]">{t.title}</p>
                  <p className="mt-0.5 flex items-center gap-1 text-[12px] font-bold text-[#8a7d70]">
                    {t.desc}
                    <Fish size={13} className="text-[#e8a06c]" />+{t.reward}
                  </p>
                </div>
                <button
                  onClick={() => !done && setDoneTasks((d) => [...d, t.id])}
                  disabled={done}
                  className="shrink-0 rounded-full bg-[#e8a06c] px-5 py-2 text-[13px] font-black text-white transition active:scale-95 disabled:opacity-60"
                >
                  {done ? "รับแล้ว" : t.action}
                </button>
              </div>
            );
          })}
        </div>
        <p className="mt-1 text-center text-[13px] font-bold text-[#b8ab9e]">งานเพิ่มเติม ›</p>
      </div>

      <p className="mt-2 text-center text-[12px] font-bold text-[#8a7d70]">
        คิบเบิลของฉัน: {kibbles.toLocaleString()}
      </p>
    </div>
  );
}
