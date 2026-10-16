import { Fish, HeartHandshake, Home, User } from "lucide-react";

const tabs = [
  { id: "explore", label: "หน้าหลัก", icon: Home },
  { id: "kibble", label: "สะสมอาหารเม็ด", icon: Fish, badge: 32 },
  { id: "care", label: "ดูแล", icon: HeartHandshake },
  { id: "my", label: "โปรไฟล์ของฉัน", icon: User },
];

export default function BottomNav({ active, onChange }) {
  return (
    <nav className="absolute inset-x-0 bottom-0 z-20 border-t border-[#f1e6d8] bg-white/95 px-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur">
      <div className="grid grid-cols-4">
        {tabs.map((t) => {
          const Icon = t.icon;
          const isActive = active === t.id;
          return (
            <button
              key={t.id}
              onClick={() => onChange(t.id)}
              className={`relative flex flex-col items-center gap-0.5 rounded-2xl py-1.5 text-[10px] font-extrabold transition ${
                isActive ? "text-[#f26d5d]" : "text-[#b8ab9e]"
              }`}
            >
              <span
                className={`relative grid h-9 w-12 place-items-center rounded-full transition ${
                  isActive ? "bg-[#ffe8cc]" : "bg-transparent"
                }`}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                {t.badge && (
                  <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-[#ff3b30] px-1 text-[9px] font-black text-white">
                    {t.badge}
                  </span>
                )}
              </span>
              <span className="max-w-full truncate px-0.5">{t.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
