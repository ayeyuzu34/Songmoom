export const currentUser = {
  id: "user_01",
  name: "เพื่อนมูม",
  avatar: "https://i.pravatar.cc/100?img=47",
  kibbles: 1250,
  totalFed: 34,
  level: "เพื่อนบ้านใจดี",
};

export const FEED_COST = 50;

export function foodStatus(level) {
  if (level <= 0) return { label: "ว่าง", tone: "empty" };
  if (level < 25) return { label: "หิว", tone: "hungry" };
  if (level < 65) return { label: "เหลือน้อย", tone: "low" };
  return { label: "เต็ม", tone: "full" };
}

export const stations = [
  {
    id: "st_01",
    name: "นำโชค",
    location: "ไทรน้อย, ไทย",
    thumbnail:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop",
    isLive: true,
    viewers: 128,
    food_level: 15,
    water_level: 80,
    status: "hungry",
    activeStrayId: "cat_01",
    lastFed: "12 นาทีที่แล้ว",
  },
  {
    id: "st_02",
    name: "มีตังค์",
    location: "สวนจตุจักร",
    thumbnail:
      "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=600&auto=format&fit=crop",
    isLive: true,
    viewers: 89,
    food_level: 82,
    water_level: 90,
    status: "eating",
    activeStrayId: "cat_02",
    lastFed: "2 นาทีที่แล้ว",
  },
  {
    id: "st_03",
    name: "ไข่ตุ๋น",
    location: "ตลาดนัดจตุจักร",
    thumbnail:
      "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=600&auto=format&fit=crop",
    isLive: true,
    viewers: 54,
    food_level: 0,
    water_level: 40,
    status: "empty",
    activeStrayId: null,
    lastFed: "2 ชม. ที่แล้ว",
  },
  {
    id: "st_04",
    name: "เฉาก๊วย",
    location: "ดาดฟ้าซังอัม",
    thumbnail:
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=600&auto=format&fit=crop",
    isLive: false,
    viewers: 0,
    food_level: 64,
    water_level: 70,
    status: "resting",
    activeStrayId: null,
    lastFed: "38 นาทีที่แล้ว",
  },
  {
    id: "st_05",
    name: "ส้มจี๊ด",
    location: "ไทรน้อย, ไทย",
    thumbnail:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop",
    isLive: true,
    viewers: 1,
    food_level: 30,
    water_level: 75,
    status: "eating",
    activeStrayId: "cat_03",
    lastFed: "ตอนนี้",
  },
];

export const strays = [
  {
    id: "cat_01",
    name: "Cheese",
    code: "Cat A",
    breed: "ส้มแท็บบี้",
    avatar:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=200&auto=format&fit=crop",
    personality: ["ขี้อาย", "ออกหากินกลางคืน"],
    health: "สุขภาพดี",
    visits: 42,
    favoriteStationId: "st_01",
    lastSeen: "ตอนนี้ที่ Hongdae",
    isPresent: true,
  },
  {
    id: "cat_02",
    name: "Mackerel",
    code: "Cat B",
    breed: "ลายสลิดเทา",
    avatar:
      "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=200&auto=format&fit=crop",
    personality: ["กล้าหาญ", "ชอบกิน"],
    health: "ควรตรวจสุขภาพ",
    visits: 27,
    favoriteStationId: "st_02",
    lastSeen: "5 นาทีที่แล้วที่ Yeontral",
    isPresent: true,
  },
  {
    id: "cat_03",
    name: "ส้มจี๊ด",
    code: "Cat C",
    breed: "ส้มแท็บบี้",
    avatar:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=200&auto=format&fit=crop",
    personality: ["อ้อนเก่ง", "กินจุ"],
    health: "สุขภาพดี",
    visits: 15,
    favoriteStationId: "st_05",
    lastSeen: "ตอนนี้ที่ส้มจี๊ด",
    isPresent: true,
  },
];

export const kibbleStats = {
  usersReceived: 100467,
  myKibbleDays: 0,
  fullDays: 0,
  resetIn: "18h 30m 19s (UTC-8)",
};

export const checkinWeek = [
  { day: "10/01", amount: 0 },
  { day: "02", amount: 0 },
  { day: "03", amount: 0 },
  { day: "04", amount: 0 },
  { day: "05", amount: 0 },
  { day: "06", amount: 0 },
];

export const earnTasks = [
  {
    id: "follow",
    title: "สมัครสมาชิก / ติดตาม",
    desc: "เปิดแจ้งเตือนและรับโบนัส",
    reward: 10,
    action: "สมัคร",
  },
  {
    id: "social",
    title: "ติดตามเรา (0/2)",
    desc: "บน TikTok และ IG",
    reward: 10,
    action: "ติดตาม",
  },
  {
    id: "video",
    title: "โพสต์วิดีโอ",
    desc: "รับ 30–160 เมล็ดต่อคลิป",
    reward: 30,
    action: "เข้าร่วม",
  },
  {
    id: "ads",
    title: "ดูโฆษณา (0/10)",
    desc: "ดู 1 ครั้ง รับรางวัล",
    reward: 10,
    action: "ดู",
  },
];

export const feeders = [
  {
    id: "fd_01",
    location: "ไทรน้อย, ไทย",
    title: "นำโชค Secret Paws",
    desc: "สวนหลังบ้านมีผู้มาเยือนลึกลับมากมาย เห็นแค่รอยเท้าน้อยๆ แต่พวกมันออกมาแค่ตอนกลางคืน อยากสร้างบ้านปลอดภัยให้แมวขี้อายเหล่านี้",
    raised: 180,
    goal: 499,
    thumbnail:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "fd_02",
    location: "สวนจตุจักร",
    title: "มีตังค์ Rooftop Home",
    desc: "ดาดฟ้าเล็กๆ ที่แมวจรแวะมาทุกเย็น อยากติดเครื่องให้อาหารอัตโนมัติให้เด็กๆ อิ่มทุกวัน",
    raised: 320,
    goal: 500,
    thumbnail:
      "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "fd_03",
    location: "ตลาดนัดจตุจักร",
    title: "ไข่ตุ๋น Alley Shelter",
    desc: "ซอกตึกตลาดที่ฝนสาดถึง อยากสร้างที่หลบฝนอบอุ่นพร้อมจุดให้อาหารประจำ",
    raised: 95,
    goal: 400,
    thumbnail:
      "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=600&auto=format&fit=crop",
  },
];
