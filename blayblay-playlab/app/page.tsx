import Link from "next/link";

export default function PlayLabLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDF8EB] via-[#FAF3E0] to-[#F3E5C8] text-[#4A2B18] font-sans selection:bg-[#9A3B06] selection:text-white">
      {/* --- NAVBAR --- */}
      <nav className="bg-white/70 backdrop-blur-md border-b border-[#E8DCC2] sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-black flex items-center gap-2">
            <span className="text-3xl">π</span>
            <div className="leading-tight">
              <div className="text-xl text-[#2D1B10] tracking-wide">
                BLAY BLAY
              </div>
              <div className="text-sm text-[#9A3B06] tracking-widest">
                PLAYLAB.
              </div>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold text-[#5A3A25]">
            <Link
              href="#courses"
              className="hover:text-[#9A3B06] transition-colors"
            >
              คอร์ส
            </Link>
            <Link
              href="#about"
              className="hover:text-[#9A3B06] transition-colors"
            >
              เกี่ยวกับเรา
            </Link>
            <Link
              href="#contact"
              className="hover:text-[#9A3B06] transition-colors"
            >
              ติดต่อ
            </Link>
          </div>
          <a
            href="#contact"
            className="bg-gradient-to-r from-[#D97736] to-[#9A3B06] text-white text-sm px-6 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            จอง Workshop
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12 relative">
        <div className="flex-1 space-y-8 z-10">
          <div className="inline-flex items-center gap-2 bg-[#F3E5C8] text-[#9A3B06] text-sm font-bold px-4 py-2 rounded-full border border-[#D97736]/30 shadow-sm">
            🍓 Raspberry Pi Powered
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#2D1B10] leading-tight">
            BLAY BLAY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A3B06] to-[#5A2300]">
              PLAYLAB.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#5A3A25] max-w-lg leading-relaxed font-medium">
            พื้นที่ทดลองไอเดีย พัฒนา IoT, Robot และ AI เรียนรู้การตั้งค่า Home
            Server ด้วย Raspberry Pi ในบรรยากาศเป็นกันเอง
          </p>
          <div className="flex gap-4 flex-wrap pt-2">
            <a
              href="#courses"
              className="bg-[#9A3B06] text-white px-8 py-3.5 rounded-xl font-bold shadow-[0_8px_15px_rgba(154,59,6,0.2)] hover:bg-[#7A3612] hover:-translate-y-1 transition-all"
            >
              JOIN WORKSHOP
            </a>
            <a
              href="#about"
              className="bg-white border-2 border-[#5A3A25] text-[#5A3A25] px-8 py-3.5 rounded-xl font-bold hover:bg-[#5A3A25] hover:text-white transition-all"
            >
              รู้จักเรา
            </a>
          </div>
        </div>

        <div className="flex-1 w-full relative">
          <div className="absolute inset-0 bg-white/40 rounded-[2.5rem] transform rotate-3 scale-105 border border-white/60"></div>
          <div className="relative bg-white p-4 rounded-[2rem] shadow-2xl border border-[#E8DCC2]">
            {/* Terminal Window */}
            <div className="bg-[#1C1C1C] rounded-xl overflow-hidden shadow-inner mb-4">
              <div className="bg-[#2D2D2D] px-4 py-2.5 flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                <span className="ml-2 text-white/40 text-xs font-mono">
                  blayblay@playlab:~
                </span>
              </div>
              <div className="p-5 font-mono text-sm space-y-2">
                <p className="text-[#27C93F]">$ ./start_engine.sh</p>
                <p className="text-white/60">[ OK ] Booting Raspberry Pi...</p>
                <p className="text-white/60">[ OK ] Loading IoT protocols...</p>
                <p className="text-[#F3E5C8] font-bold mt-2">
                  &gt; System ready_
                </p>
              </div>
            </div>
            {/* Hero Image */}
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
              alt="Technology Workspace"
              className="w-full h-56 object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 pb-16 relative z-20 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { val: "500+", label: "ทดลองไอเดีย", color: "border-[#D97736]" },
            { val: "50+", label: "เพื่อนร่วมคลาส", color: "border-[#7A3612]" },
            { val: "20+", label: "โปรเจกต์ IoT", color: "border-[#5A3A25]" },
            {
              val: "5 ปี",
              label: "คนชอบความท้าทาย",
              color: "border-[#9A3B06]",
            },
          ].map((s, i) => (
            <div
              key={i}
              className={`bg-white/80 backdrop-blur rounded-2xl p-6 text-center shadow-lg border-b-4 ${s.color} hover:-translate-y-1 transition-transform`}
            >
              <div className="text-4xl md:text-5xl font-black text-[#2D1B10] mb-1">
                {s.val}
              </div>
              <div className="text-sm font-bold text-[#7A3612] bg-[#F3E5C8]/50 inline-block px-3 py-1 rounded-full">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- COURSES SECTION --- */}
      <section id="courses" className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-4xl font-black text-[#2D1B10] uppercase flex items-center gap-3">
              COURSES{" "}
              <span className="text-lg text-[#D97736]">
                ⭐⭐⭐⭐⭐ คอร์สแนะนำ
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Server and Home",
              bg: "bg-gradient-to-b from-[#8B5A2B] to-[#3E2723]",
              icon: "🖧",
              desc: "เซิร์ฟเวอร์ส่วนตัวสำหรับจัดเก็บไฟล์และใช้งานในบ้าน",
            },
            {
              title: "Connected Smart Home",
              bg: "bg-gradient-to-b from-[#4A90E2] to-[#003366]",
              icon: "🏠",
              desc: "เชื่อมต่ออุปกรณ์อัจฉริยะในบ้านด้วย MQTT และ Node-RED",
            },
            {
              title: "AI Vision Detection",
              bg: "bg-gradient-to-b from-[#8E44AD] to-[#4A235A]",
              icon: "👁️",
              desc: "ฝึก ML Model ตรวจจับวัตถุด้วยกล้อง Raspberry Pi",
            },
            {
              title: "Robotic Detection",
              bg: "bg-gradient-to-b from-[#C0392B] to-[#641E16]",
              icon: "🦾",
              desc: "ประกอบและโปรแกรมหุ่นยนต์แขนกลด้วย Python",
              featured: true,
            },
          ].map((c) => (
            <div
              key={c.title}
              className={`${c.bg} rounded-[2rem] p-6 text-white flex flex-col h-[320px] relative overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300`}
            >
              {c.featured && (
                <div className="absolute top-4 right-4 bg-[#FFBD2E] text-[#4A2B18] text-xs font-black px-3 py-1 rounded-full">
                  featured
                </div>
              )}
              <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                <span className="text-6xl drop-shadow-md">{c.icon}</span>
                <div className="w-16 h-1 bg-white/20 rounded-full"></div>
              </div>
              <div className="mt-auto space-y-2">
                <h3 className="font-bold text-lg leading-tight">{c.title}</h3>
                <p className="text-xs text-white/70 line-clamp-2">{c.desc}</p>
                <button className="mt-4 w-full bg-white/10 hover:bg-white/20 border border-white/20 py-2 rounded-full text-sm font-bold backdrop-blur-sm transition-colors">
                  BUTTON DESIGN
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="border-y border-[#E8DCC2] bg-white/40">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-black text-[#2D1B10]">ABOUT</h2>
            <p className="text-[#5A3A25] leading-relaxed font-medium">
              เราเชื่อว่าทุกคนสามารถสร้างสรรค์สิ่งใหม่ได้ Blay Blay PlayLab
              จึงเป็นพื้นที่แห่งการเรียนรู้ที่อบอุ่น ปลอดภัย
              และเปิดโอกาสให้ทุกคนได้ลองคิด ลองทำ และสร้างผลงานของตัวเอง
              (Raspberry Pi and Projects เป็นต้น)
            </p>
            <div className="space-y-4 pt-4">
              {[
                {
                  icon: "💡",
                  title: "เรียนแบบ Project-based",
                  desc: "ทุกคอร์สมีโปรเจกต์จริงให้ทำ",
                },
                {
                  icon: "👥",
                  title: "กลุ่มเล็ก ดูแลใกล้ชิด",
                  desc: "จำกัดไม่เกิน 8 คนต่อรอบ",
                },
                {
                  icon: "🛡️",
                  title: "เหมาะกับทุกระดับ",
                  desc: "ไม่ต้องมีพื้นฐานก็เรียนได้",
                },
                {
                  icon: "❤️",
                  title: "ชุมชนที่อบอุ่น",
                  desc: "มีกลุ่ม Community สำหรับแชร์ไอเดีย",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="flex gap-4 items-center bg-white p-4 rounded-2xl shadow-sm border border-[#E8DCC2]/50"
                >
                  <div className="w-12 h-12 bg-[#F3E5C8] rounded-xl flex items-center justify-center text-2xl shrink-0 text-[#9A3B06]">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2D1B10]">{f.title}</h4>
                    <p className="text-sm text-[#5A3A25]">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 h-full">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400"
              alt="Students working"
              className="w-full h-48 md:h-full object-cover rounded-3xl shadow-md"
            />
            <div className="grid grid-rows-2 gap-4 h-full">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400"
                alt="Teamwork"
                className="w-full h-32 md:h-full object-cover rounded-3xl shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"
                alt="Lab equipment"
                className="w-full h-32 md:h-full object-cover rounded-3xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION & MAP --- */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-[#E8DCC2] grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-[#2D1B10]">CONTACT</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-2xl mt-1">📍</span>
                <div>
                  <h4 className="font-bold text-[#2D1B10]">ที่อยู่ร้าน</h4>
                  <a
                    href="https://www.bing.com/maps/search?q=22/10+ถ.+ชากังราว+Kamphaeng+Phet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5A3A25] hover:text-[#9A3B06] text-sm mt-1 block leading-relaxed"
                  >
                    22/10 ถ.ชากังราว กำแพงเพชร 62000
                    <br />
                    (โซน Blay Blay Boardgame)
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl mt-1">📞</span>
                <div>
                  <h4 className="font-bold text-[#2D1B10]">เบอร์โทรศัพท์</h4>
                  <a
                    href="tel:0837278422"
                    className="text-[#5A3A25] hover:text-[#9A3B06] text-sm mt-1 block"
                  >
                    083-727-8422
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl mt-1">📧</span>
                <div>
                  <h4 className="font-bold text-[#2D1B10]">อีเมล</h4>
                  <a
                    href="mailto:blayblayplaywork@gmail.com"
                    className="text-[#5A3A25] hover:text-[#9A3B06] text-sm mt-1 block"
                  >
                    blayblayplaywork@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl mt-1">🕐</span>
                <div>
                  <h4 className="font-bold text-[#2D1B10]">เวลาทำการ</h4>
                  <p className="text-[#5A3A25] text-sm mt-1">
                    จ.-ศ. 10:00 - 21:00 น.
                    <br />
                    ส.-อา. 10:00 - 18:00 น.{" "}
                    <span className="text-[#9A3B06] font-bold">
                      (หยุดวันพุธ)
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* 🔗 [เชื่อมลิงก์กลับคืนตำแหน่งให้แล้วครับ] ไอคอน Social ตรงตาม Mockup พร้อมใส่ลิงก์จริงให้เรียบร้อย */}
            <div className="flex gap-3 pt-4">
              <a
                href="https://www.facebook.com/blayblayboardgame"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold hover:scale-110 hover:shadow-lg transition-all text-lg"
              >
                f
              </a>
              <a
                href="https://www.instagram.com/blayblay_playwork"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white rounded-xl flex items-center justify-center font-bold hover:scale-110 hover:shadow-lg transition-all text-lg"
              >
                ig
              </a>
              <a
                href="https://line.me/ti/g2/UMChaAeRCHCi8WiD0rlVOYpYTa8eD74fA6H72w"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center font-bold hover:scale-110 hover:shadow-lg transition-all text-lg"
              >
                L
              </a>
              <a
                href="https://www.tiktok.com/@blayblay_playwork"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center font-bold hover:scale-110 hover:shadow-lg transition-all text-lg"
              >
                tk
              </a>
            </div>
          </div>

          {/* แผนที่จำลอง */}
          <div className="relative h-64 md:h-auto bg-[#F3E5C8] rounded-[2rem] overflow-hidden border-4 border-white shadow-inner">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
              alt="Map Background"
              className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href="https://www.bing.com/maps/search?q=22/10+ถ.+ชากังราว+Kamphaeng+Phet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-[#9A3B06] rounded-full flex items-center justify-center text-white text-3xl shadow-xl shadow-[#9A3B06]/40 animate-bounce hover:scale-110 transition-transform"
              >
                📍
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#2D1B10] text-[#FDF8EB] py-8 border-t-[12px] border-[#D97736]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-white/60">
            <p className="font-bold text-white mb-1">FOOTER</p>
            <p>© 2026 Blay Blay PlayLab. All rights reserved.</p>
          </div>
          <div className="text-right">
            <div className="text-xl font-black text-white">
              BLAY BLAY PLAYLAB..
            </div>
            <p className="text-white/40 text-xs mt-1">
              www.blayblayplaylab.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
