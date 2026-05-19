import Link from "next/link";
import {
  Cpu,
  Server,
  Home,
  Eye,
  Layers,
  CheckCircle,
  Users,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Flame,
} from "lucide-react";

export default function PlayLabLandingPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#3D2517] font-sans selection:bg-[#9A3B06] selection:text-white antialiased">
      {/* --- NAVBAR --- */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-[#E8DCC2]/60 sticky top-0 z-50 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-black flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 bg-gradient-to-br from-[#D97736] to-[#9A3B06] rounded-xl flex items-center justify-center text-white shadow-md shadow-[#9A3B06]/20">
              <Cpu className="w-6 h-6 animate-pulse" />
            </div>
            <div className="leading-tight">
              <div className="text-xl text-[#2D1B10] font-black tracking-wide">
                BLAY BLAY
              </div>
              <div className="text-xs text-[#9A3B06] font-extrabold tracking-widest">
                PLAYLAB.
              </div>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold text-[#5A3A25]">
            <Link
              href="#courses"
              className="hover:text-[#9A3B06] transition-colors relative group py-1"
            >
              คอร์สเรียน
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9A3B06] transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="#about"
              className="hover:text-[#9A3B06] transition-colors relative group py-1"
            >
              เกี่ยวกับเรา
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9A3B06] transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="#contact"
              className="hover:text-[#9A3B06] transition-colors relative group py-1"
            >
              ติดต่อเรา
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9A3B06] transition-all group-hover:w-full"></span>
            </Link>
          </div>
          <a
            href="#contact"
            className="bg-gradient-to-r from-[#D97736] to-[#9A3B06] text-white text-sm px-6 py-2.5 rounded-full font-extrabold shadow-[0_4px_14px_0_rgba(154,59,6,0.3)] hover:shadow-[0_6px_20px_rgba(154,59,6,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            จอง Workshop
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#D97736]/5 rounded-full blur-3xl -z-10"></div>

        <div className="flex-1 space-y-8 z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[#FEEFDD] text-[#9A3B06] text-xs font-extrabold px-4 py-2 rounded-full border border-[#D97736]/20 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Raspberry Pi & IoT Powered Lab
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#2D1B10] leading-tight tracking-tight">
            BLAY BLAY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97736] via-[#B84A0E] to-[#9A3B06]">
              PLAYLAB.
            </span>
          </h1>
          <p className="text-base md:text-lg text-[#5A3A25] max-w-lg leading-relaxed font-medium mx-auto lg:mx-0">
            พื้นที่ทดลองไอเดียสุดสร้างสรรค์ ปลุกปั้นโปรเจกต์ IoT, Robot และ AI
            เรียนรู้การตั้งค่าระบบ Home Server ด้วย Raspberry Pi
            ในบรรยากาศที่สนุกสนานและเป็นกันเอง
          </p>
          <div className="flex gap-4 justify-center lg:justify-start flex-wrap pt-2">
            <a
              href="#courses"
              className="bg-[#9A3B06] text-white px-8 py-4 rounded-2xl font-extrabold shadow-[0_8px_20px_rgba(154,59,6,0.25)] hover:bg-[#7A3612] hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(154,59,6,0.35)] transition-all duration-300 flex items-center gap-2"
            >
              เริ่มต้นเรียนรู้ <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="bg-white border-2 border-[#5A3A25] text-[#5A3A25] px-8 py-4 rounded-2xl font-extrabold hover:bg-[#5A3A25] hover:text-white hover:-translate-y-1 shadow-sm transition-all duration-300"
            >
              รู้จักเรา
            </a>
          </div>
        </div>

        {/* 🎯 เนรมิตแผงวงจรจำลองด้วย Tailwind CSS แบบไม่พึ่งรูปภาพ หมดสิทธิ์ภาพแตก 100% */}
        <div className="flex-1 w-full relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#9A3B06]/10 to-[#D97736]/5 rounded-[2.5rem] transform rotate-2 scale-105 border border-[#E8DCC2]/40 transition-transform duration-500 group-hover:rotate-4"></div>
          <div className="relative bg-white p-5 rounded-[2.5rem] shadow-2xl border border-[#E8DCC2]/50 transform transition-transform duration-500 group-hover:-translate-y-2">
            <div className="relative rounded-2xl overflow-hidden h-[420px] bg-gradient-to-br from-[#1E110A] via-[#2D1B10] to-[#4A2B18] flex flex-col items-center justify-center p-8 text-center group/panel">
              {/* ลายเส้น Dot ตารางแผงวงจร */}
              <div className="absolute inset-0 bg-[radial-gradient(#D97736_1px,transparent_1px)] [background-size:16px_16px] opacity-20 group-hover/panel:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-[#D97736]/10 rounded-full blur-3xl animate-pulse"></div>

              <div className="relative z-10 space-y-5">
                <div className="w-24 h-24 bg-gradient-to-br from-[#D97736] to-[#9A3B06] rounded-3xl flex items-center justify-center text-white mx-auto shadow-xl shadow-[#9A3B06]/40 transform group-hover/panel:rotate-12 transition-transform duration-500 border border-white/10">
                  <Cpu className="w-12 h-12 animate-pulse" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-white tracking-wide">
                    BLAY BLAY HARDWARE CORE
                  </h3>
                  <p className="text-xs text-[#D97736] font-mono tracking-widest uppercase font-bold">
                    Embedded System & IoT Node
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs text-zinc-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-[#27C93F] animate-ping"></span>
                  hardware_status: active
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 pb-20 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              val: "500+",
              label: "ชั่วโมงทดลองไอเดีย",
              icon: <Cpu className="w-5 h-5" />,
            },
            {
              val: "50+",
              label: "เมมเบอร์ร่วมคลาส",
              icon: <Users className="w-5 h-5" />,
            },
            {
              val: "20+",
              label: "โปรเจกต์ IoT สำเร็จ",
              icon: <Layers className="w-5 h-5" />,
            },
            {
              val: "100%",
              label: "เน้นลงมือปฏิบัติจริง",
              icon: <CheckCircle className="w-5 h-5" />,
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 text-center shadow-md border border-[#E8DCC2]/60 hover:-translate-y-2 hover:shadow-xl hover:border-[#D97736]/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-[#FDF8EB] rounded-2xl flex items-center justify-center text-[#9A3B06] mx-auto mb-3 group-hover:bg-[#9A3B06] group-hover:text-white transition-all duration-300">
                {s.icon}
              </div>
              <div className="text-3xl md:text-4xl font-black text-[#2D1B10] tracking-tight mb-1">
                {s.val}
              </div>
              <div className="text-xs font-bold text-[#7A3612]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- COURSES SECTION --- */}
      <section
        id="courses"
        className="max-w-7xl mx-auto px-6 py-16 bg-[#FDFBF7]"
      >
        <div className="text-center md:text-left mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#9A3B06] block mb-2">
              Our Laboratories
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#2D1B10] uppercase tracking-tight">
              คอร์สเรียน & WORKSHOP
            </h2>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#7A3612] bg-[#F7EED3] px-4 py-2 rounded-full border border-[#E8DCC2]">
              ⭐⭐⭐⭐⭐ เน้น Workshop ใช้งานได้จริง
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Server & Home Cloud",
              icon: <Server className="w-8 h-8" />,
              desc: "สร้างระบบคลาวด์ส่วนตัวสำหรับจัดเก็บไฟล์ ซิงค์ข้อมูล และใช้งานเองอย่างปลอดภัยภายในบ้าน",
              featured: false,
            },
            {
              title: "Connected Smart Home",
              icon: <Home className="w-8 h-8" />,
              desc: "เชื่อมต่อและสั่งการอุปกรณ์อัจฉริยะแบบเรียลไทม์ผ่านสวิตช์ สปอต มอนิเตอร์ ด้วย MQTT และ Node-RED",
              featured: false,
            },
            {
              title: "AI Vision Object Detection",
              icon: <Eye className="w-8 h-8" />,
              desc: "ฝึกฝนและติดตั้งปัญญาประดิษฐ์เพื่อตรวจจับวัตถุ ทะเบียนรถ ใบหน้า ผ่านกล้อง Raspberry Pi",
              featured: false,
            },
            {
              title: "Robotic Arm Control",
              icon: <Layers className="w-8 h-8" />,
              desc: "ประกอบโครงสร้างและเขียนโค้ดภาษา Python บังคับแขนกลหุ่นยนต์เพื่อทำงานตามสั่งแบบอัตโนมัติ",
              featured: true,
            },
          ].map((c) => (
            <div
              key={c.title}
              className={`bg-white rounded-[2.5rem] p-6 text-[#2D1B10] flex flex-col justify-between min-h-[380px] relative overflow-hidden shadow-md border-2 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 group ${
                c.featured ? "border-[#D97736]" : "border-[#E8DCC2]/60"
              }`}
            >
              {c.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#D97736] to-[#9A3B06] text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                  <Flame className="w-3 h-3" /> POPULAR
                </div>
              )}

              <div className="space-y-6 pt-4">
                <div className="w-14 h-14 bg-[#FDF8EB] text-[#9A3B06] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-[#9A3B06] group-hover:text-white transition-all duration-300 border border-[#E8DCC2]">
                  {c.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-extrabold text-lg leading-snug group-hover:text-[#9A3B06] transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-sm text-[#5A3A25] leading-relaxed font-medium line-clamp-4">
                    {c.desc}
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button className="w-full bg-[#FDF8EB] hover:bg-[#9A3B06] hover:text-white text-[#9A3B06] border border-[#9A3B06]/20 py-3 rounded-xl text-xs font-bold transition-all duration-300">
                  ดูรายละเอียดและตารางเรียน
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section
        id="about"
        className="border-y border-[#E8DCC2]/60 bg-gradient-to-b from-white to-[#FDFBF7]"
      >
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#9A3B06]">
              About our Lab
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#2D1B10] tracking-tight">
              พื้นที่ทดลองวิจัยของคน <br />
              <span className="text-[#D97736]">หลงรักในเทคโนโลยี</span>
            </h2>
            <p className="text-[#5A3A25] leading-relaxed font-medium text-base md:text-lg">
              เราเชื่อว่านวัตกรรมที่เปลี่ยนโลกเกิดขึ้นจากการกล้าลองผิดลองถูก
              Blay Blay PlayLab
              จึงถูกเซ็ตอัพขึ้นมาเพื่อให้เป็นห้องแล็บสไตล์คอมมูนิตี้ที่ปลอดภัย
              เป็นกันเอง และพร้อมสนับสนุนให้ทุกคนได้ลองแปลงไอเดียในหัว
              ออกมาเป็นฮาร์ดแวร์และซอฟต์แวร์ที่ใช้งานได้จริง
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                {
                  icon: "💡",
                  title: "Project-based Coding",
                  desc: "เรียนผ่านการทำของเล่นชิ้นจริง",
                },
                {
                  icon: "👥",
                  title: "Premium Mentor",
                  desc: "ดูแลใกล้ชิด จำกัดไม่เกิน 8 คน/คลาส",
                },
                {
                  icon: "🛡️",
                  title: "Zero to Hero",
                  desc: "ไม่มีพื้นฐานเขียนโค้ดก็เรียนเข้าใจ",
                },
                {
                  icon: "❤️",
                  title: "Lifetime Community",
                  desc: "กลุ่มแชร์ไอเดีย ซัพพอร์ตกันตลอดชีพ",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="flex gap-3 items-center bg-white p-4 rounded-2xl shadow-sm border border-[#E8DCC2]/50 hover:border-[#D97736]/40 transition-all"
                >
                  <div className="w-10 h-10 bg-[#FDF8EB] rounded-xl flex items-center justify-center text-xl shrink-0 border border-[#E8DCC2]/40">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#2D1B10]">
                      {f.title}
                    </h4>
                    <p className="text-[11px] text-[#5A3A25] mt-0.5">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400"
              alt="Students working"
              className="w-full h-full object-cover rounded-[2.5rem] shadow-md hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="grid grid-rows-2 gap-4 h-full">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400"
                alt="Teamwork"
                className="w-full h-full object-cover rounded-[2rem] shadow-md hover:scale-[1.02] transition-transform duration-500"
              />
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"
                alt="Lab equipment"
                className="w-full h-full object-cover rounded-[2rem] shadow-md hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION & MAP --- */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-[#E8DCC2]/60 grid md:grid-cols-2 gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FDF8EB] rounded-full blur-3xl -mr-20 -mt-20 opacity-60"></div>

          <div className="space-y-8 relative z-10">
            <div>
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#9A3B06] block mb-2">
                Location & Time
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#2D1B10] tracking-tight">
                แวะมาคุยโปรเจกต์ <span className="text-[#D97736]">กับเรา</span>
              </h2>
            </div>

            <div className="space-y-5">
              <div className="flex gap-4 group items-start">
                <div className="w-10 h-10 bg-[#FDF8EB] rounded-xl flex items-center justify-center text-[#9A3B06] shrink-0 group-hover:bg-[#9A3B06] group-hover:text-white transition-colors border border-[#E8DCC2]/40">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#2D1B10]">
                    พิกัดแล็บ
                  </h4>
                  <a
                    href="https://www.bing.com/maps/search?q=22/10+ถ.+ชากังราว+Kamphaeng+Phet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5A3A25] hover:text-[#9A3B06] text-sm mt-0.5 block leading-relaxed font-medium"
                  >
                    22/10 ถ.ชากังราว ต.ในเมือง อ.เมือง จ.กำแพงเพชร 62000 <br />
                    <span className="text-xs text-[#9A3B06] font-bold">
                      (ตั้งอยู่ที่เดียวกับโซน Blay Blay Boardgame)
                    </span>
                  </a>
                </div>
              </div>

              <div className="flex gap-4 group items-start">
                <div className="w-10 h-10 bg-[#FDF8EB] rounded-xl flex items-center justify-center text-[#9A3B06] shrink-0 group-hover:bg-[#9A3B06] group-hover:text-white transition-colors border border-[#E8DCC2]/40">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#2D1B10]">
                    สายตรงติดต่อ
                  </h4>
                  <a
                    href="tel:0837278422"
                    className="text-[#5A3A25] hover:text-[#9A3B06] text-sm mt-0.5 block font-medium"
                  >
                    083-727-8422
                  </a>
                </div>
              </div>

              <div className="flex gap-4 group items-start">
                <div className="w-10 h-10 bg-[#FDF8EB] rounded-xl flex items-center justify-center text-[#9A3B06] shrink-0 group-hover:bg-[#9A3B06] group-hover:text-white transition-colors border border-[#E8DCC2]/40">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#2D1B10]">
                    ช่องทางอีเมล
                  </h4>
                  <a
                    href="mailto:blayblayplaywork@gmail.com"
                    className="text-[#5A3A25] hover:text-[#9A3B06] text-sm mt-0.5 block font-medium"
                  >
                    blayblayplaywork@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 group items-start">
                <div className="w-10 h-10 bg-[#FDF8EB] rounded-xl flex items-center justify-center text-[#9A3B06] shrink-0 group-hover:bg-[#9A3B06] group-hover:text-white transition-colors border border-[#E8DCC2]/40">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#2D1B10]">
                    ตารางเปิดทำการ
                  </h4>
                  <p className="text-[#5A3A25] text-sm mt-0.5 leading-relaxed font-medium">
                    จันทร์ - ศุกร์ : 10:00 - 21:00 น. <br />
                    เสาร์ - อาทิตย์ : 10:00 - 18:00 น.{" "}
                    <span className="text-[#9A3B06] font-black">
                      (หยุดทุกวันพุธ)
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {[
                {
                  name: "FB",
                  url: "https://www.facebook.com/blayblayboardgame",
                  color: "hover:bg-blue-600",
                  path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                },
                {
                  name: "IG",
                  url: "https://www.instagram.com/blayblay_playwork",
                  color: "hover:bg-pink-600",
                  path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
                },
                {
                  name: "LN",
                  url: "https://line.me/ti/g2/UMChaAeRCHCi8WiD0rlVOYpYTa8eD74fA6H72w",
                  color: "hover:bg-green-500",
                  path: "M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 3.54 8.846 8.432 9.585.39.083.921.258 1.057.593.124.298.082.763.039 1.066l-.173 1.052c-.052.321-.24.978.857.514 1.098-.464 5.926-3.489 8.13-5.998 1.067-1.189 1.658-2.673 1.658-4.353zm-14.715 2.19h-2.138v-4.48c0-.285-.231-.516-.516-.516-.285 0-.516.231-.516.516v4.996c0 .285.231.516.516.516h2.654c.285 0 .516-.231.516-.516 0-.285-.231-.516-.516-.516zm1.745-.516v-3.964c0-.285-.231-.516-.516-.516-.285 0-.516.231-.516.516v3.964c0 .285.231.516.516.516.285 0 .516-.231.516-.516zm5.836-1.572h-1.348v1.056h1.348c.285 0 .516.231.516.516 0 .285-.231.516-.516.516h-1.864c-.285 0-.516-.231-.516-.516v-4.996c0-.285.231-.516.516-.516h1.864c.285 0 .516.231.516.516 0 .285-.231.516-.516.516h-1.348v.984h1.348c.285 0 .516.231.516.516 0 .286-.231.516-.516.516zm3.268.494l-2.029-3.428c-.08-.135-.224-.217-.38-.217-.285 0-.516.231-.516.516v3.964c0 .285.231.516.516.516.285 0 .516-.231.516-.516v-2.42l1.863 3.146c.105.176.294.282.502.282.285 0 .516-.231.516-.516v-3.964c0-.285-.231-.516-.516-.516-.285 0-.516.231-.516.516v2.536z",
                },
                {
                  name: "TK",
                  url: "https://www.tiktok.com/@blayblay_playwork",
                  color: "hover:bg-black",
                  path: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z",
                },
              ].map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 bg-[#FDFBF7] border border-[#E8DCC2] text-[#5A3A25] rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm ${soc.color} hover:text-white hover:-translate-y-1`}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d={soc.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* แผนที่กูเกิลจำลอง */}
          <div className="relative h-72 md:h-auto bg-[#FDF8EB] rounded-[2rem] overflow-hidden border border-[#E8DCC2]/60 shadow-inner group">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
              alt="Map Background"
              className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-[#2D1B10]/20 to-transparent">
              <a
                href="https://www.bing.com/maps/search?q=22/10+ถ.+ชากังราว+Kamphaeng+Phet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-gradient-to-br from-[#D97736] to-[#9A3B06] rounded-full flex items-center justify-center text-white text-2xl shadow-xl shadow-[#9A3B06]/50 animate-bounce hover:scale-110 transition-transform border-4 border-white"
              >
                📍
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#1E110A] text-[#FDF8EB] py-12 border-t-[6px] border-[#D97736]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-2">
            <div className="text-xl font-black text-white flex items-center gap-2 justify-center md:justify-start">
              <div className="w-6 h-6 bg-[#D97736] rounded-md flex items-center justify-center text-white text-xs">
                <Cpu className="w-4 h-4" />
              </div>
              BLAY BLAY PLAYLAB.
            </div>
            <p className="text-white/50 text-xs font-medium">
              พื้นที่สร้างสรรค์และเรียนรู้การพัฒนาเทคโนโลยี
              แพลตฟอร์มเซิร์ฟเวอร์สำหรับทุกคน
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-white/40 text-xs font-mono">
              © 2026 Blay Blay PlayLab. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
