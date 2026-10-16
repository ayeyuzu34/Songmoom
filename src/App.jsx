import { useState } from "react";
import BottomNav from "./components/layout/BottomNav";
import Header from "./components/layout/Header";
import { currentUser, stations } from "./data/mock";
import ExplorePage from "./pages/ExplorePage";
import CarePage from "./pages/CarePage";
import KibblePage from "./pages/KibblePage";
import ProfilePage from "./pages/ProfilePage";
import LiveFeedingPage from "./pages/LiveFeedingPage";

const tabTitles = {
  explore: "หน้าหลัก",
  kibble: "สะสมอาหารเม็ด",
  care: "ดูแล",
  my: "โปรไฟล์ของฉัน",
};

export default function App() {
  const [tab, setTab] = useState("explore");
  const [liveStationId, setLiveStationId] = useState(null);
  const [kibbles, setKibbles] = useState(currentUser.kibbles);

  const liveStation = stations.find((s) => s.id === liveStationId) ?? null;

  const openLive = (s) => {
    setLiveStationId(s.id);
  };

  if (liveStation) {
    return (
      <div className="min-h-screen bg-[#f3ece2]">
        <div className="relative mx-auto flex min-h-screen w-full max-w-[430px] flex-col overflow-hidden shadow-[0_0_40px_rgba(74,63,53,0.12)]">
          <LiveFeedingPage
            station={liveStation}
            kibbles={kibbles}
            onBack={() => setLiveStationId(null)}
            onSpend={(n) => setKibbles((k) => Math.max(0, k - n))}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f3ece2]">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[430px] flex-col overflow-hidden bg-[#fff8f0] shadow-[0_0_40px_rgba(74,63,53,0.12)] sm:my-0">
        <Header kibbles={kibbles} />

        <main className="flex-1 pb-28">
          {tab === "explore" && (
            <ExplorePage stations={stations} onOpenStation={openLive} />
          )}
          {tab === "kibble" && (
            <KibblePage kibbles={kibbles} onCheckin={(n) => setKibbles((k) => k + n)} />
          )}
          {tab === "care" && <CarePage />}
          {tab === "my" && <ProfilePage kibbles={kibbles} />}
          {tab !== "explore" && tab !== "kibble" && tab !== "care" && tab !== "my" && (
            <div className="px-4 pt-10 text-center">
              <p className="mx-auto grid h-14 w-14 place-items-center rounded-3xl bg-[#ffe8cc] text-2xl">
                🐾
              </p>
              <h2 className="mt-3 text-[18px] font-black text-[#4a3f35]">
                {tabTitles[tab] ?? tab} —  coming soon
              </h2>
              <p className="mt-1 text-[13px] font-bold text-[#8a7d70]">
                หน้านี้จะมาใน Step ถัดไป ตอนนี้โฟกัสที่หน้าสถานี
              </p>
              <button
                onClick={() => setTab("explore")}
                className="mt-4 rounded-full bg-[#ff8a7a] px-5 py-2.5 text-[14px] font-extrabold text-white shadow-[0_8px_20px_rgba(255,138,122,0.4)]"
              >
                กลับไปหน้าหลัก
              </button>
            </div>
          )}
        </main>

        <BottomNav active={tab} onChange={setTab} />
      </div>
    </div>
  );
}
