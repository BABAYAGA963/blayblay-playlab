"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Calendar,
  Wifi,
  Cpu,
  BrainCircuit,
  Server,
  Wrench,
  ArrowRight,
  Star,
  Users,
  BookOpen,
  Zap,
  Shield,
  Heart,
  Mail,
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  Trophy,
  Lightbulb,
  Menu,
  X,
} from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const courses = [
  {
    id: 1,
    title: "Raspberry Pi Home Server",
    desc: "สร้างเครื่องเซิร์ฟเวอร์ส่วนตัว จัดเก็บไฟล์ สตรีมมิ่ง และควบคุมอุปกรณ์ในบ้านผ่านเครือข่ายของตัวเอง",
    tag: "Beginner",
    tagColor: "bg-emerald-100 text-emerald-700 border border-emerald-200",
    duration: "8 ชั่วโมง",
    students: "120+ คน",
    icon: <Server size={28} />,
    gradient: "from-orange-400 via-amber-300 to-yellow-200",
    accentDot: "bg-orange-400",
    category: "Infrastructure",
  },
  {
    id: 2,
    title: "IoT Smart Home",
    desc: "เชื่อมต่ออุปกรณ์อัจฉริยะในบ้าน ควบคุมไฟ แอร์ และเซนเซอร์ด้วย MQTT และ Node-RED",
    tag: "Beginner",
    tagColor: "bg-emerald-100 text-emerald-700 border border-emerald-200",
    duration: "10 ชั่วโมง",
    students: "98+ คน",
    icon: <Wifi size={28} />,
    gradient: "from-sky-400 via-cyan-300 to-teal-200",
    accentDot: "bg-sky-400",
    category: "IoT",
  },
  {
    id: 3,
    title: "AI Vision & Object Detection",
    desc: "ฝึก Machine Learning Model ให้จำแนกและตรวจจับวัตถุด้วยกล้อง Raspberry Pi Camera",
    tag: "Advanced",
    tagColor: "bg-purple-100 text-purple-700 border border-purple-200",
    duration: "12 ชั่วโมง",
    students: "64+ คน",
    icon: <BrainCircuit size={28} />,
    gradient: "from-purple-500 via-fuchsia-400 to-pink-300",
    accentDot: "bg-purple-500",
    category: "AI / ML",
  },
  {
    id: 4,
    title: "Robot Arm with Pi",
    desc: "ประกอบและโปรแกรมหุ่นยนต์แขนกล ควบคุมผ่าน Python และ Web UI บน Raspberry Pi",
    tag: "Intermediate",
    tagColor: "bg-amber-100 text-amber-700 border border-amber-200",
    duration: "16 ชั่วโมง",
    students: "42+ คน",
    icon: <Cpu size={28} />,
    gradient: "from-rose-400 via-orange-300 to-amber-200",
    accentDot: "bg-rose-400",
    category: "Robotics",
  },
];

const stats = [
  {
    value: "500+",
    label: "นักเรียนทั้งหมด",
    icon: <Users size={28} />,
    color: "text-[#9A3B06]",
    bg: "bg-[#F3E5C8]",
  },
  {
    value: "50+",
    label: "Workshop จัดไปแล้ว",
    icon: <Calendar size={28} />,
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    value: "20+",
    label: "โปรเจกต์สำเร็จ",
    icon: <Trophy size={28} />,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    value: "5 ปี",
    label: "ประสบการณ์",
    icon: <Star size={28} />,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
];

const features = [
  {
    icon: <Lightbulb size={32} />,
    title: "เรียนแบบ Project-based",
    desc: "ทุกคอร์สมีโปรเจกต์จริงให้ทำ ไม่ใช่แค่ดูสไลด์ คุณจะได้ลงมือสร้างชิ้นงานของตัวเองกลับบ้านทุกครั้ง",
    color: "text-[#9A3B06]",
    bg: "bg-[#FDF0DC]",
    border: "border-[#E8DCC2]",
  },
  {
    icon: <Users size={32} />,
    title: "กลุ่มเล็ก ดูแลใกล้ชิด",
    desc: "จำกัดไม่เกิน 8 คนต่อรอบ ทำให้ผู้สอนดูแลได้ทั่วถึงและตอบคำถามได้ทันที",
    color: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-100",
  },
  {
    icon: <Shield size={32} />,
    title: "เหมาะกับทุกระดับ",
    desc: "ไม่ต้องมีพื้นฐานการเขียนโค้ด เราออกแบบหลักสูตรให้เข้าใจได้ตั้งแต่ต้นจนจบ",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: <Heart size={32} />,
    title: "ชุมชนที่อบอุ่น",
    desc: "เรียนจบแล้วยังมีกลุ่ม Community สำหรับแชร์ไอเดียและช่วยเหลือกัน ไม่ทิ้งกันแน่นอน",
    color: "text-rose-500",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
];

const testimonials = [
  {
    name: "ธนภัทร ว.",
    role: "นักศึกษาปี 3 วิศวกรรมคอมพิวเตอร์",
    initials: "ธว",
    avatarBg: "from-orange-400 to-amber-500",
    text: "มาเรียน IoT Smart Home แล้วรู้สึกว่าเนื้อหาเข้าใจง่ายมาก พี่ผู้สอนอธิบายละเอียดและคอยช่วยตลอดเวลา กลับบ้านมีโปรเจกต์จริงที่ใช้งานได้เลย ประทับใจมากครับ",
    stars: 5,
    course: "IoT Smart Home",
  },
  {
    name: "สุภาพร ก.",
    role: "เจ้าของธุรกิจ SME",
    initials: "สก",
    avatarBg: "from-purple-400 to-fuchsia-500",
    text: "ไม่เคยเขียนโค้ดมาก่อนเลยค่ะ แต่คอร์ส Raspberry Pi Home Server ทำให้เราตั้งเซิร์ฟเวอร์ backup ของบริษัทได้เองโดยไม่ต้องจ้างคน ประหยัดค่าใช้จ่ายได้เยอะมาก",
    stars: 5,
    course: "Raspberry Pi Home Server",
  },
  {
    name: "ปิยะพงษ์ ม.",
    role: "ครูมัธยมสาย STEM",
    initials: "ปม",
    avatarBg: "from-sky-400 to-cyan-500",
    text: "เอาความรู้ที่ได้จาก PlayLab ไปสอนนักเรียนต่อได้เลยครับ เนื้อหาทันสมัย อุปกรณ์ครบ บรรยากาศดี แนะนำสำหรับครูที่อยากอัพสกิลด้านเทคโนโลยีอย่างจริงจัง",
    stars: 5,
    course: "AI Vision & Object Detection",
  },
];

const galleryItems = [
  {
    gradient: "from-orange-300 via-amber-400 to-yellow-300",
    caption: "Workshop: Raspberry Pi Setup Day",
    tag: "🛠️ Workshop",
  },
  {
    gradient: "from-sky-300 via-cyan-400 to-teal-300",
    caption: "IoT Smart Sensor Demo",
    tag: "📡 IoT",
  },
  {
    gradient: "from-purple-300 via-fuchsia-400 to-pink-300",
    caption: "AI Model Training Session",
    tag: "🤖 AI / ML",
  },
  {
    gradient: "from-rose-300 via-orange-400 to-amber-300",
    caption: "Robot Arm Build & Test",
    tag: "⚙️ Robotics",
  },
  {
    gradient: "from-emerald-300 via-teal-400 to-cyan-300",
    caption: "Open House ครั้งที่ 5",
    tag: "🎉 Event",
  },
  {
    gradient: "from-indigo-300 via-purple-400 to-fuchsia-300",
    caption: "ทีม PlayLab ร่วมกันบนเวที TechFest",
    tag: "🏆 Achievement",
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function PlayLabLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [activeCategory, setActiveCategory] = useState("IoT Smart Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const categories = [
    { label: "Raspberry Pi", icon: <Server size={18} /> },
    { label: "IoT Smart Home", icon: <Wifi size={18} /> },
    { label: "AI & Machine Learning", icon: <BrainCircuit size={18} /> },
    { label: "Robotics", icon: <Cpu size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-[#FDF8EB] font-sans text-[#4A2B18] overflow-x-hidden">
      {/* ══════════════════════════════════════════════════════════
          1. NAVBAR
      ══════════════════════════════════════════════════════════ */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FDF8EB]/95 backdrop-blur-md shadow-md border-b border-[#E8DCC2]"
            : "bg-[#FDF8EB]/80 backdrop-blur-sm border-b border-[#E8DCC2]/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="text-2xl font-black text-[#7A3612] tracking-tighter group-hover:text-[#9A3B06] transition-colors">
              BLAY BLAY
            </span>
            <span className="text-base font-black text-[#9A3B06] tracking-widest -mt-1">
              PLAYLAB.
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 font-medium text-[#7A3612]/80">
            {[
              { label: "หน้าแรก", href: "#" },
              { label: "คอร์ส & Workshop", href: "#courses" },
              { label: "เรื่องราวของเรา", href: "#story" },
              { label: "แกลเลอรี", href: "#gallery" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 rounded-lg hover:bg-[#F3E5C8] hover:text-[#9A3B06] transition-all font-semibold"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="#courses"
              className="hidden md:flex bg-[#9A3B06] hover:bg-[#7A3612] text-white px-5 py-2.5 rounded-full font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 items-center gap-2 text-sm"
            >
              <Calendar size={16} />
              จอง Workshop
            </Link>
            <button
              className="md:hidden p-2 rounded-lg text-[#7A3612] hover:bg-[#F3E5C8] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FDF8EB] border-t border-[#E8DCC2] px-6 pb-6 pt-4 space-y-2">
            {[
              { label: "หน้าแรก", href: "#" },
              { label: "คอร์ส & Workshop", href: "#courses" },
              { label: "เรื่องราวของเรา", href: "#story" },
              { label: "แกลเลอรี", href: "#gallery" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl hover:bg-[#F3E5C8] text-[#7A3612] font-semibold transition-all"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#courses"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 mt-4 bg-[#9A3B06] text-white py-3 rounded-xl font-bold"
            >
              <Calendar size={18} /> จอง Workshop
            </Link>
          </div>
        )}
      </nav>

      {/* ══════════════════════════════════════════════════════════
          2. HERO
      ══════════════════════════════════════════════════════════ */}
      <section className="pt-28 pb-16 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-screen">
        {/* Left: Text */}
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F3E5C8] text-[#9A3B06] rounded-full text-sm font-bold border border-[#E8DCC2] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#27C93F] animate-pulse inline-block"></span>
            &gt;_ System.ready() — Raspberry Pi Powered
          </div>

          <div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-[#7A3612] leading-[1.05] tracking-tight">
              BLAY BLAY
            </h1>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-[#9A3B06] leading-[1.05] tracking-tight">
              PLAYLAB.
            </h1>
          </div>

          <p className="text-lg md:text-xl text-[#5A3A25] max-w-lg leading-relaxed">
            พื้นที่ทดลองไอเดีย พัฒนา <strong>IoT, Robot และ AI</strong>{" "}
            เรียนรู้การตั้งค่า Home Server ด้วย Raspberry Pi
            ในบรรยากาศเป็นกันเอง เหมาะกับทุกระดับ
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 py-2">
            {[
              { val: "500+", lbl: "นักเรียน" },
              { val: "50+", lbl: "Workshop" },
              { val: "5 ปี", lbl: "ประสบการณ์" },
            ].map((s) => (
              <div key={s.lbl} className="text-center">
                <div className="text-2xl font-black text-[#9A3B06]">
                  {s.val}
                </div>
                <div className="text-xs text-[#5A3A25] font-medium">
                  {s.lbl}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="#courses"
              className="bg-[#9A3B06] hover:bg-[#7A3612] text-white px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 hover:shadow-xl flex items-center gap-2"
            >
              JOIN WORKSHOP <ArrowRight size={18} />
            </Link>
            <Link
              href="#story"
              className="border-2 border-[#9A3B06] text-[#9A3B06] hover:bg-[#9A3B06] hover:text-white px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1"
            >
              รู้จักเรา
            </Link>
          </div>
        </div>

        {/* Right: Terminal card */}
        <div className="flex-1 w-full max-w-xl relative group cursor-default">
          {/* Decorative rings */}
          <div className="absolute -inset-4 rounded-[3.5rem] bg-gradient-to-br from-[#9A3B06]/20 to-[#F3E5C8]/40 blur-2xl -z-10 group-hover:scale-105 transition-transform duration-700" />

          <div className="bg-[#111] rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/10">
            {/* Window bar */}
            <div className="bg-[#1A1A1A] px-6 py-4 flex items-center gap-3 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <span className="ml-2 text-white/30 text-xs font-mono">
                blayblay@playlab ~ bash
              </span>
            </div>

            {/* Terminal body */}
            <div className="p-7 font-mono text-sm space-y-3">
              <p className="text-[#27C93F]">
                blayblay@playlab<span className="text-white/60">:~ $</span>{" "}
                <span className="text-white/90">./start_engine.sh</span>
              </p>
              <div className="space-y-2 text-white/50 pl-2 border-l-2 border-white/10">
                <p>
                  <span className="text-[#27C93F] font-bold">[ OK ]</span>{" "}
                  Booting Raspberry Pi 5 cluster...
                </p>
                <p>
                  <span className="text-[#27C93F] font-bold">[ OK ]</span>{" "}
                  Loading IoT protocols (MQTT, Zigbee)...
                </p>
                <p>
                  <span className="text-[#27C93F] font-bold">[ OK ]</span> AI
                  Models initialized (YOLOv8, MediaPipe)...
                </p>
                <p>
                  <span className="text-[#27C93F] font-bold">[ OK ]</span>{" "}
                  Workshop environment ready.
                </p>
              </div>
              <p className="text-[#F3E5C8] font-semibold animate-pulse mt-2">
                &gt; System online. Welcome to PlayLab_
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { label: "CPU Temp", val: "42°C", ok: true },
                  { label: "RAM", val: "1.2 GB / 8 GB", ok: true },
                  { label: "Active Nodes", val: "3 / 4", ok: true },
                  { label: "Uptime", val: "99.8%", ok: true },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="bg-white/5 rounded-xl px-3 py-2 border border-white/10"
                  >
                    <div className="text-white/30 text-xs">{row.label}</div>
                    <div className="text-[#27C93F] font-bold text-sm mt-0.5">
                      {row.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl border border-[#E8DCC2] px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F3E5C8] flex items-center justify-center text-[#9A3B06]">
              <CheckCircle size={22} />
            </div>
            <div>
              <div className="text-xs text-[#5A3A25]">รอบถัดไป</div>
              <div className="text-sm font-bold text-[#7A3612]">
                เสาร์ 14 มิ.ย.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3. CATEGORY PILLS
      ══════════════════════════════════════════════════════════ */}
      <section className="py-6 bg-white/60 border-y border-[#E8DCC2] sticky top-[73px] z-40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(cat.label)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeCategory === cat.label
                  ? "bg-[#9A3B06] text-white border-[#9A3B06] shadow-md"
                  : "bg-white text-[#7A3612] border-[#E8DCC2] hover:border-[#9A3B06] hover:text-[#9A3B06] shadow-sm"
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4. STATS
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 border border-[#E8DCC2] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center group"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${stat.bg} flex items-center justify-center mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.icon}
              </div>
              <div className="text-4xl font-black text-[#7A3612] mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-[#5A3A25] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. COURSES
      ══════════════════════════════════════════════════════════ */}
      <section
        id="courses"
        className="py-20 px-6 lg:px-8 bg-white/50 border-y border-[#E8DCC2]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[#9A3B06] font-bold text-sm mb-3 bg-[#F3E5C8] px-3 py-1.5 rounded-full border border-[#E8DCC2]">
                <Star size={14} className="fill-[#9A3B06]" /> คอร์สแนะนำ
              </span>
              <h2 className="text-4xl font-black text-[#7A3612]">
                คอร์ส & Workshop ยอดนิยม
              </h2>
              <p className="text-[#5A3A25] mt-2 max-w-lg">
                เรียนรู้จากโปรเจกต์จริง ผู้สอนประสบการณ์สูง กลุ่มเล็ก
                ดูแลทุกคนอย่างใกล้ชิด
              </p>
            </div>
            <Link
              href="#"
              className="flex items-center gap-1.5 text-[#9A3B06] hover:text-[#7A3612] font-semibold transition-colors whitespace-nowrap border-b-2 border-[#9A3B06] pb-0.5"
            >
              ดูคอร์สทั้งหมด <ChevronRight size={18} />
            </Link>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#E8DCC2] group flex flex-col"
              >
                {/* Gradient image placeholder */}
                <div
                  className={`h-44 bg-gradient-to-br ${course.gradient} relative overflow-hidden flex items-center justify-center`}
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg border border-white/30">
                    {course.icon}
                  </div>
                  {/* Category label */}
                  <div className="absolute top-3 left-3 bg-white/90 text-[#7A3612] text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                    {course.category}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full ${course.tagColor}`}
                    >
                      {course.tag}
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className="text-amber-400 fill-amber-400"
                        />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#7A3612] leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-sm text-[#5A3A25] line-clamp-2 leading-relaxed flex-1">
                    {course.desc}
                  </p>

                  <div className="flex items-center justify-between text-xs text-[#5A3A25]/70 pt-1 border-t border-[#F3E5C8]">
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={12} /> {course.students}
                    </span>
                  </div>

                  <button className="w-full py-2.5 rounded-xl border-2 border-[#9A3B06] text-[#9A3B06] font-bold group-hover:bg-[#9A3B06] group-hover:text-white transition-colors flex justify-center items-center gap-2 text-sm mt-auto">
                    ดูรายละเอียด <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-[#F3E5C8] border border-[#E8DCC2] rounded-2xl px-6 py-4">
              <BookOpen size={20} className="text-[#9A3B06]" />
              <span className="text-[#5A3A25] font-medium">
                มีคอร์สพิเศษและ Private Workshop สำหรับองค์กร —{" "}
              </span>
              <Link
                href="#"
                className="text-[#9A3B06] font-bold hover:underline flex items-center gap-1"
              >
                ติดต่อเรา <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6. WHY US / FEATURES
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-[#9A3B06] font-bold text-sm mb-3 bg-[#F3E5C8] px-3 py-1.5 rounded-full border border-[#E8DCC2]">
            <Zap size={14} /> ทำไมต้อง PlayLab?
          </span>
          <h2 className="text-4xl font-black text-[#7A3612]">
            เรียนที่นี่แตกต่างอย่างไร
          </h2>
          <p className="text-[#5A3A25] mt-3 max-w-xl mx-auto">
            เราออกแบบประสบการณ์การเรียนรู้ที่ไม่เหมือนใคร
            เน้นการลงมือทำจริงในบรรยากาศที่ผ่อนคลาย
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => (
            <div
              key={feat.title}
              className={`rounded-2xl p-6 border ${feat.border} ${feat.bg} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}
            >
              <div
                className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-5 shadow-sm ${feat.color} group-hover:scale-110 transition-transform duration-300`}
              >
                {feat.icon}
              </div>
              <h3 className="text-lg font-bold text-[#7A3612] mb-2">
                {feat.title}
              </h3>
              <p className="text-sm text-[#5A3A25] leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Checklist banner */}
        <div className="mt-12 bg-gradient-to-r from-[#7A3612] to-[#9A3B06] rounded-3xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black mb-1">มาทดลองเรียนฟรี!</h3>
              <p className="text-white/80">
                เข้ามาชมสถานที่ได้ทุกวันโดยไม่ต้องนัดล่วงหน้า หรือทดลองเรียน
                Intro class ฟรี 1 ชั่วโมง
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              {["ไม่มีค่าใช้จ่าย", "ไม่ต้องมีพื้นฐาน", "มีอุปกรณ์ให้ครบ"].map(
                (item) => (
                  <span
                    key={item}
                    className="flex items-center gap-1.5 bg-white/15 border border-white/20 px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    <CheckCircle size={14} className="text-[#27C93F]" /> {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          7. OUR STORY
      ══════════════════════════════════════════════════════════ */}
      <section
        id="story"
        className="py-20 bg-white/60 border-y border-[#E8DCC2]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-[#9A3B06] font-bold tracking-widest text-sm uppercase">
              <Wrench size={16} /> Our Story
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#7A3612] leading-tight">
              สร้างแรงบันดาลใจ
              <br />
              ผ่านการลงมือทำ
            </h2>
            <p className="text-[#5A3A25] text-lg leading-relaxed">
              Blay Blay PlayLab
              เกิดขึ้นจากความฝันของกลุ่มเพื่อนนักพัฒนาที่อยากให้ทุกคนเข้าถึงเทคโนโลยีได้จริง
              ไม่ใช่แค่ดูวิดีโอ แต่ต้องได้จับ ได้ทำ ได้สัมผัส
            </p>
            <p className="text-[#5A3A25] leading-relaxed">
              เราเปิดมาตั้งแต่ปี 2019 ด้วยห้องเล็กๆ และ Raspberry Pi ไม่กี่ตัว
              วันนี้เราเติบโตเป็น Community นักทำที่มีสมาชิกกว่า 500 คน
              ร่วมกันสร้างสรรค์โปรเจกต์ที่น่าทึ่งมากมาย
            </p>
            <button className="text-[#9A3B06] font-bold flex items-center gap-2 hover:gap-4 transition-all pb-1 border-b-2 border-[#9A3B06] w-max">
              รู้จักเราเพิ่มเติม <ArrowRight size={20} />
            </button>
          </div>

          {/* Right: Feature cards */}
          <div className="space-y-4">
            {/* Timeline-style cards */}
            {[
              {
                icon: <BrainCircuit size={28} />,
                title: "เหมาะกับทุกระดับ",
                desc: "ตั้งแต่เด็กอายุ 10 ปี ไปจนถึงผู้ใหญ่วัยทำงาน ทุกคนมีคอร์สที่ใช่สำหรับตัวเอง",
                year: "2019",
              },
              {
                icon: <Wrench size={28} />,
                title: "Project-based Learning",
                desc: "ลงมือทำจริงผ่านโปรเจกต์ที่ใช้งานได้จริง ไม่ใช่แค่แบบฝึกหัดในกระดาษ",
                year: "2021",
              },
              {
                icon: <Trophy size={28} />,
                title: "Community & Showcase",
                desc: "นักเรียนของเราได้นำเสนอโปรเจกต์ในงาน Maker Faire, TechFest และเวทีระดับประเทศ",
                year: "2023",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-5 items-start bg-white rounded-2xl p-5 border border-[#E8DCC2] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="p-3.5 bg-[#F3E5C8] rounded-2xl text-[#9A3B06] shrink-0 group-hover:bg-[#9A3B06] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-base font-bold text-[#7A3612]">
                      {item.title}
                    </h4>
                    <span className="text-xs bg-[#F3E5C8] text-[#9A3B06] px-2 py-0.5 rounded-full font-bold">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-sm text-[#5A3A25] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Bottom highlight */}
            <div className="bg-gradient-to-r from-[#F3E5C8] to-[#FDF8EB] rounded-2xl p-5 border border-[#E8DCC2] flex items-center gap-4">
              <div className="text-4xl font-black text-[#9A3B06]">5★</div>
              <div>
                <div className="font-bold text-[#7A3612]">
                  รีวิวเฉลี่ย 4.9 / 5.0
                </div>
                <div className="text-sm text-[#5A3A25]">
                  จากนักเรียนกว่า 500 คน ทุกรอบ
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          8. TESTIMONIALS
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-[#9A3B06] font-bold text-sm mb-3 bg-[#F3E5C8] px-3 py-1.5 rounded-full border border-[#E8DCC2]">
            <Heart size={14} className="fill-[#9A3B06]" /> รีวิวจากนักเรียน
          </span>
          <h2 className="text-4xl font-black text-[#7A3612]">
            เสียงจากคนที่เคยมาเรียน
          </h2>
          <p className="text-[#5A3A25] mt-3 max-w-lg mx-auto">
            ความประทับใจจากนักเรียนที่ผ่านการเรียนกับเรา
            บอกเล่าประสบการณ์จริงของพวกเขา
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-[#E8DCC2] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(t.stars)].map((_, s) => (
                  <Star
                    key={s}
                    size={16}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#5A3A25] text-sm leading-relaxed flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Course tag */}
              <div className="flex items-center gap-2">
                <BookOpen size={13} className="text-[#9A3B06]" />
                <span className="text-xs text-[#9A3B06] font-semibold bg-[#F3E5C8] px-2 py-0.5 rounded-full">
                  {t.course}
                </span>
              </div>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-3 border-t border-[#F3E5C8]">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.avatarBg} flex items-center justify-center text-white font-black text-sm shrink-0 shadow`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-[#7A3612] text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-[#5A3A25]/70">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate rating bar */}
        <div className="mt-10 bg-[#F3E5C8] rounded-2xl p-6 border border-[#E8DCC2] flex flex-col md:flex-row items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-6xl font-black text-[#7A3612]">4.9</div>
            <div className="flex gap-1 justify-center md:justify-start mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-amber-400 fill-amber-400"
                />
              ))}
            </div>
            <div className="text-sm text-[#5A3A25] mt-1 font-medium">
              จากรีวิว 500+ ครั้ง
            </div>
          </div>
          <div className="flex-1 w-full space-y-2">
            {[
              { stars: 5, pct: 89 },
              { stars: 4, pct: 8 },
              { stars: 3, pct: 2 },
              { stars: 2, pct: 1 },
              { stars: 1, pct: 0 },
            ].map((row) => (
              <div key={row.stars} className="flex items-center gap-3">
                <span className="text-xs font-semibold text-[#5A3A25] w-12 shrink-0">
                  {row.stars} ดาว
                </span>
                <div className="flex-1 bg-[#E8DCC2] rounded-full h-2.5">
                  <div
                    className="bg-amber-400 h-2.5 rounded-full transition-all duration-700"
                    style={{ width: `${row.pct}%` }}
                  />
                </div>
                <span className="text-xs text-[#5A3A25] w-8 text-right">
                  {row.pct}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          9. GALLERY
      ══════════════════════════════════════════════════════════ */}
      <section
        id="gallery"
        className="py-20 bg-white/60 border-y border-[#E8DCC2]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 text-[#9A3B06] font-bold text-sm mb-3 bg-[#F3E5C8] px-3 py-1.5 rounded-full border border-[#E8DCC2]">
              <Zap size={14} /> แกลเลอรี
            </span>
            <h2 className="text-4xl font-black text-[#7A3612]">
              ภาพบรรยากาศ Workshop
            </h2>
            <p className="text-[#5A3A25] mt-3 max-w-lg mx-auto">
              เก็บบรรยากาศการเรียน ผลงาน และกิจกรรมสนุกๆ ที่เกิดขึ้นใน PlayLab
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer border border-[#E8DCC2] shadow-sm hover:shadow-xl transition-all duration-300 ${
                  i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Gradient photo placeholder */}
                <div
                  className={`h-56 bg-gradient-to-br ${item.gradient} relative`}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  {/* Overlay play/zoom icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
                      <Zap size={22} className="text-[#9A3B06]" />
                    </div>
                  </div>
                </div>
                {/* Caption */}
                <div className="bg-white px-5 py-4 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-[#7A3612] text-sm">
                      {item.caption}
                    </div>
                    <div className="text-xs text-[#5A3A25]/70 mt-0.5">
                      {item.tag}
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#F3E5C8] flex items-center justify-center text-[#9A3B06] group-hover:bg-[#9A3B06] group-hover:text-white transition-colors duration-300">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#9A3B06] text-[#9A3B06] font-bold hover:bg-[#9A3B06] hover:text-white transition-all duration-200">
              ดูภาพทั้งหมด <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          10. NEWSLETTER / CTA BANNER
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#7A3612] via-[#9A3B06] to-[#C0571A] rounded-3xl p-10 md:p-14 text-center shadow-2xl relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#F3E5C8]/15 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 bg-white/15 border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-5">
                <Mail size={13} /> สมัครรับข่าวสาร
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                อย่าพลาดทุก Workshop!
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                ลงทะเบียนรับข่าวสารล่าสุด รอบเปิดใหม่ โปรโมชั่น
                และเนื้อหาเทคนิคที่ส่งตรงถึงอีเมลคุณ
              </p>

              {subscribed ? (
                <div className="inline-flex items-center gap-3 bg-white/20 border border-white/30 rounded-2xl px-8 py-4">
                  <CheckCircle size={24} className="text-[#27C93F]" />
                  <span className="text-white font-bold text-lg">
                    ขอบคุณ! เราจะส่งข่าวสารให้เร็วๆ นี้ 🎉
                  </span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="กรอกอีเมลของคุณ..."
                    required
                    className="flex-1 px-5 py-3.5 rounded-xl bg-white/15 border border-white/25 text-white placeholder:text-white/50 focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all font-medium"
                  />
                  <button
                    type="submit"
                    className="bg-white text-[#9A3B06] font-black px-7 py-3.5 rounded-xl hover:bg-[#FDF8EB] transition-colors hover:shadow-lg flex items-center gap-2 justify-center whitespace-nowrap"
                  >
                    สมัครเลย <ArrowRight size={18} />
                  </button>
                </form>
              )}

              <p className="text-white/50 text-xs mt-4">
                ไม่มีสแปม ยกเลิกได้ทุกเมื่อ • ส่งทุก 2 สัปดาห์
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          11. FOOTER
      ══════════════════════════════════════════════════════════ */}
      <footer className="bg-[#3D1800] text-[#FDF8EB] border-t-4 border-[#9A3B06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
            {/* Brand col */}
            <div className="md:col-span-4 space-y-5">
              <div>
                <div className="text-3xl font-black tracking-tighter leading-none">
                  BLAY BLAY
                </div>
                <div className="text-2xl font-black text-[#F3A96A] tracking-widest">
                  PLAYLAB.
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                พื้นที่เรียนรู้สำหรับคนชอบเทคโนโลยี ลงมือทำจริง • เข้าใจง่าย •
                สร้างสรรค์ได้ไม่รู้จบ
              </p>
              {/* Social icons */}
              <div className="flex gap-3">
                {["FB", "IG", "YT", "TK"].map((s) => (
                  <button
                    key={s}
                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#9A3B06] text-white/70 hover:text-white text-xs font-bold transition-all duration-200"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="md:col-span-2">
              <h4 className="font-bold text-sm mb-4 text-[#F3E5C8] uppercase tracking-wider">
                คอร์ส
              </h4>
              <ul className="space-y-2.5 text-white/60 text-sm">
                {[
                  "Raspberry Pi",
                  "IoT Smart Home",
                  "AI / ML",
                  "Robotics",
                  "Home Server",
                ].map((l) => (
                  <li key={l}>
                    <Link
                      href="#"
                      className="hover:text-[#F3A96A] transition-colors"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold text-sm mb-4 text-[#F3E5C8] uppercase tracking-wider">
                เกี่ยวกับ
              </h4>
              <ul className="space-y-2.5 text-white/60 text-sm">
                {[
                  "เรื่องราวของเรา",
                  "ทีมงาน",
                  "แกลเลอรี",
                  "Blog",
                  "ร่วมงานกับเรา",
                ].map((l) => (
                  <li key={l}>
                    <Link
                      href="#"
                      className="hover:text-[#F3A96A] transition-colors"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Hours */}
            <div className="md:col-span-4 space-y-5">
              <div>
                <h4 className="font-bold text-sm mb-4 text-[#F3E5C8] uppercase tracking-wider">
                  ติดต่อเรา
                </h4>
                <ul className="space-y-3 text-white/60 text-sm">
                  <li className="flex items-center gap-2.5">
                    <Phone size={14} className="text-[#9A3B06] shrink-0" />{" "}
                    096-xxx-xxxx
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Mail size={14} className="text-[#9A3B06] shrink-0" />{" "}
                    hello@playlab.co.th
                  </li>
                  <li className="flex items-start gap-2.5">
                    <MapPin
                      size={14}
                      className="text-[#9A3B06] shrink-0 mt-0.5"
                    />
                    123 ถนนเทคโนโลยี แขวงลาดพร้าว กทม. 10230
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-3 text-[#F3E5C8] uppercase tracking-wider flex items-center gap-2">
                  <Clock size={14} /> เวลาเปิดทำการ
                </h4>
                <ul className="space-y-1.5 text-white/60 text-sm">
                  <li>จันทร์ – อังคาร, พฤหัส – ศุกร์: 10:00 – 20:00</li>
                  <li>เสาร์ – อาทิตย์: 10:00 – 18:00</li>
                  <li className="text-[#F3A96A] font-semibold">
                    🚫 หยุดทุกวันพุธ
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
            <span>© 2026 Blay Blay PlayLab. All rights reserved.</span>
            <div className="flex gap-5">
              {["นโยบายความเป็นส่วนตัว", "เงื่อนไขการใช้งาน", "Sitemap"].map(
                (l) => (
                  <Link
                    key={l}
                    href="#"
                    className="hover:text-white/70 transition-colors"
                  >
                    {l}
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
