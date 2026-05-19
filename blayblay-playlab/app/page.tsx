import Link from "next/link";

export default function PlayLabLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDF8EB] via-[#FAF3E0] to-[#F3E5C8] text-[#4A2B18] font-sans selection:bg-[#9A3B06] selection:text-white">
      {/* --- NAVBAR --- */}
      <nav className="bg-white/70 backdrop-blur-md border-b border-[#E8DCC2] sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-black flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
            <span className="text-3xl text-[#D97736]"></span>
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
              className="hover:text-[#9A3B06] transition-colors relative group"
            >
              คอร์ส
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9A3B06] transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="#about"
              className="hover:text-[#9A3B06] transition-colors relative group"
            >
              เกี่ยวกับเรา
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9A3B06] transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="#contact"
              className="hover:text-[#9A3B06] transition-colors relative group"
            >
              ติดต่อ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9A3B06] transition-all group-hover:w-full"></span>
            </Link>
          </div>
          <a
            href="#contact"
            className="bg-gradient-to-r from-[#D97736] to-[#9A3B06] text-white text-sm px-6 py-2.5 rounded-full font-bold shadow-[0_4px_14px_0_rgba(154,59,6,0.39)] hover:shadow-[0_6px_20px_rgba(154,59,6,0.23)] hover:-translate-y-0.5 transition-all"
          >
            จอง Workshop
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12 relative">
        <div className="flex-1 space-y-8 z-10">
          <div className="inline-flex items-center gap-2 bg-white text-[#9A3B06] text-sm font-bold px-4 py-2 rounded-full border border-[#D97736]/30 shadow-sm animate-pulse">
            🍓 Raspberry Pi Powered
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#2D1B10] leading-tight">
            BLAY BLAY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97736] to-[#9A3B06]">
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
              className="bg-[#9A3B06] text-white px-8 py-3.5 rounded-xl font-bold shadow-[0_8px_15px_rgba(154,59,6,0.2)] hover:bg-[#7A3612] hover:-translate-y-1 transition-all flex items-center gap-2"
            >
              JOIN WORKSHOP <span>→</span>
            </a>
            <a
              href="#about"
              className="bg-white border-2 border-[#5A3A25] text-[#5A3A25] px-8 py-3.5 rounded-xl font-bold hover:bg-[#5A3A25] hover:text-white transition-all"
            >
              รู้จักเรา
            </a>
          </div>
        </div>

        <div className="flex-1 w-full relative group perspective-1000">
          <div className="absolute inset-0 bg-white/40 rounded-[2.5rem] transform rotate-3 scale-105 border border-white/60 transition-transform duration-500 group-hover:rotate-6"></div>
          <div className="relative bg-white p-4 rounded-[2rem] shadow-2xl border border-[#E8DCC2] transform transition-transform duration-500 group-hover:-translate-y-2">
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
                <p className="text-[#F3E5C8] font-bold mt-2 animate-pulse">
                  &gt; System ready_
                </p>
              </div>
            </div>
            {/* Hero Image */}
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
              alt="Technology Workspace"
              className="w-full h-56 object-cover rounded-xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 pb-16 relative z-20 -mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { val: "500+", label: "ทดลองไอเดีย" },
            { val: "50+", label: "เพื่อนร่วมคลาส" },
            { val: "20+", label: "โปรเจกต์ IoT" },
            { val: "5 ปี", label: "คนชอบความท้าทาย" },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center shadow-md border border-[#E8DCC2] hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#2D1B10] to-[#9A3B06] mb-2">
                {s.val}
              </div>
              <div className="text-sm font-bold text-[#7A3612] bg-[#FDF8EB] inline-block px-4 py-1.5 rounded-full border border-[#E8DCC2]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- COURSES SECTION (ปรับสีใหม่ให้เข้าธีม) --- */}
      <section id="courses" className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-4xl font-black text-[#2D1B10] uppercase flex items-center gap-3">
              COURSES{" "}
              <span className="text-lg text-[#D97736] bg-[#FDF8EB] px-3 py-1 rounded-full border border-[#D97736]/20">
                ⭐⭐⭐⭐⭐ คอร์สแนะนำ
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Server and Home",
              icon: "🖧",
              desc: "เซิร์ฟเวอร์ส่วนตัวสำหรับจัดเก็บไฟล์และใช้งานในบ้าน",
              featured: false,
            },
            {
              title: "Connected Smart Home",
              icon: "🏠",
              desc: "เชื่อมต่ออุปกรณ์อัจฉริยะในบ้านด้วย MQTT และ Node-RED",
              featured: false,
            },
            {
              title: "AI Vision Detection",
              icon: "👁️",
              desc: "ฝึก ML Model ตรวจจับวัตถุด้วยกล้อง Raspberry Pi",
              featured: false,
            },
            {
              title: "Robotic Detection",
              icon: "🦾",
              desc: "ประกอบและโปรแกรมหุ่นยนต์แขนกลด้วย Python",
              featured: true,
            },
          ].map((c) => (
            <div
              key={c.title}
              className={`bg-white rounded-[2rem] p-6 text-[#2D1B10] flex flex-col h-[320px] relative overflow-hidden shadow-lg border-2 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 group ${
                c.featured ? "border-[#D97736]" : "border-[#E8DCC2]"
              }`}
            >
              {c.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#D97736] to-[#9A3B06] text-white text-xs font-black px-3 py-1 rounded-full shadow-sm">
                  HOT 🔥
                </div>
              )}
              <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                <div className="w-20 h-20 bg-[#FDF8EB] rounded-2xl flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300 border border-[#E8DCC2]">
                  {c.icon}
                </div>
              </div>
              <div className="mt-auto space-y-3 text-center">
                <h3 className="font-bold text-lg leading-tight">{c.title}</h3>
                <p className="text-sm text-[#5A3A25] line-clamp-2">{c.desc}</p>
                <button className="mt-4 w-full bg-[#FDF8EB] hover:bg-[#9A3B06] hover:text-white text-[#9A3B06] border border-[#9A3B06]/30 py-2.5 rounded-xl text-sm font-bold transition-all duration-300">
                  ดูรายละเอียด
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section
        id="about"
        className="border-y border-[#E8DCC2] bg-white/60 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-black text-[#2D1B10]">
              ABOUT <span className="text-[#D97736]">US</span>
            </h2>
            <p className="text-[#5A3A25] leading-relaxed font-medium text-lg">
              เราเชื่อว่าทุกคนสามารถสร้างสรรค์สิ่งใหม่ได้ Blay Blay PlayLab
              จึงเป็นพื้นที่แห่งการเรียนรู้ที่อบอุ่น ปลอดภัย
              และเปิดโอกาสให้ทุกคนได้ลองคิด ลองทำ และสร้างผลงานของตัวเอง
              (Raspberry Pi and Projects)
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                {
                  icon: "💡",
                  title: "Project-based",
                  desc: "มีโปรเจกต์จริงให้ทำ",
                },
                {
                  icon: "👥",
                  title: "ดูแลใกล้ชิด",
                  desc: "จำกัดไม่เกิน 8 คน/รอบ",
                },
                {
                  icon: "🛡️",
                  title: "เหมาะกับทุกคน",
                  desc: "ไม่มีพื้นฐานก็เรียนได้",
                },
                {
                  icon: "❤️",
                  title: "ชุมชนอบอุ่น",
                  desc: "กลุ่มแชร์ไอเดียตลอดชีพ",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="flex gap-4 items-center bg-white p-4 rounded-2xl shadow-sm border border-[#E8DCC2] hover:border-[#D97736] transition-colors"
                >
                  <div className="w-12 h-12 bg-[#FDF8EB] rounded-xl flex items-center justify-center text-2xl shrink-0 border border-[#E8DCC2]">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2D1B10]">{f.title}</h4>
                    <p className="text-xs text-[#5A3A25] mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 h-full">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400"
              alt="Students working"
              className="w-full h-48 md:h-full object-cover rounded-3xl shadow-md hover:scale-[1.02] transition-transform"
            />
            <div className="grid grid-rows-2 gap-4 h-full">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400"
                alt="Teamwork"
                className="w-full h-32 md:h-full object-cover rounded-3xl shadow-md hover:scale-[1.02] transition-transform"
              />
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"
                alt="Lab equipment"
                className="w-full h-32 md:h-full object-cover rounded-3xl shadow-md hover:scale-[1.02] transition-transform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION & MAP --- */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(45,27,16,0.05)] border border-[#E8DCC2] grid md:grid-cols-2 gap-12 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDF8EB] rounded-full blur-3xl -mr-20 -mt-20 opacity-50"></div>

          <div className="space-y-8 relative z-10">
            <h2 className="text-4xl font-black text-[#2D1B10]">
              CONTACT <span className="text-[#D97736]">US</span>
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="w-10 h-10 bg-[#FDF8EB] rounded-full flex items-center justify-center text-xl shrink-0 group-hover:bg-[#9A3B06] group-hover:text-white transition-colors">
                  📍
                </div>
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
              <div className="flex gap-4 group">
                <div className="w-10 h-10 bg-[#FDF8EB] rounded-full flex items-center justify-center text-xl shrink-0 group-hover:bg-[#9A3B06] group-hover:text-white transition-colors">
                  📞
                </div>
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
              <div className="flex gap-4 group">
                <div className="w-10 h-10 bg-[#FDF8EB] rounded-full flex items-center justify-center text-xl shrink-0 group-hover:bg-[#9A3B06] group-hover:text-white transition-colors">
                  📧
                </div>
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
              <div className="flex gap-4 group">
                <div className="w-10 h-10 bg-[#FDF8EB] rounded-full flex items-center justify-center text-xl shrink-0 group-hover:bg-[#9A3B06] group-hover:text-white transition-colors">
                  🕐
                </div>
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

            {/* SVG Social Icons แทนตัวอักษร */}
            <div className="flex gap-4 pt-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/blayblayboardgame"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border border-[#E8DCC2] text-blue-600 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/blayblay_playwork"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border border-[#E8DCC2] text-pink-600 rounded-2xl flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* Line */}
              <a
                href="https://line.me/ti/g2/UMChaAeRCHCi8WiD0rlVOYpYTa8eD74fA6H72w"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border border-[#E8DCC2] text-green-500 rounded-2xl flex items-center justify-center hover:bg-green-500 hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 3.54 8.846 8.432 9.585.39.083.921.258 1.057.593.124.298.082.763.039 1.066l-.173 1.052c-.052.321-.24.978.857.514 1.098-.464 5.926-3.489 8.13-5.998 1.067-1.189 1.658-2.673 1.658-4.353zm-14.715 2.19h-2.138v-4.48c0-.285-.231-.516-.516-.516-.285 0-.516.231-.516.516v4.996c0 .285.231.516.516.516h2.654c.285 0 .516-.231.516-.516 0-.285-.231-.516-.516-.516zm1.745-.516v-3.964c0-.285-.231-.516-.516-.516-.285 0-.516.231-.516.516v3.964c0 .285.231.516.516.516.285 0 .516-.231.516-.516zm5.836-1.572h-1.348v1.056h1.348c.285 0 .516.231.516.516 0 .285-.231.516-.516.516h-1.864c-.285 0-.516-.231-.516-.516v-4.996c0-.285.231-.516.516-.516h1.864c.285 0 .516.231.516.516 0 .285-.231.516-.516.516h-1.348v.984h1.348c.285 0 .516.231.516.516 0 .286-.231.516-.516.516zm3.268.494l-2.029-3.428c-.08-.135-.224-.217-.38-.217-.285 0-.516.231-.516.516v3.964c0 .285.231.516.516.516.285 0 .516-.231.516-.516v-2.42l1.863 3.146c.105.176.294.282.502.282.285 0 .516-.231.516-.516v-3.964c0-.285-.231-.516-.516-.516-.285 0-.516.231-.516.516v2.536z" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@blayblay_playwork"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border border-[#E8DCC2] text-black rounded-2xl flex items-center justify-center hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* แผนที่จำลอง */}
          <div className="relative h-72 md:h-auto bg-[#FDF8EB] rounded-3xl overflow-hidden border border-[#E8DCC2] shadow-inner group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
              alt="Map Background"
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all">
              <a
                href="https://www.bing.com/maps/search?q=22/10+ถ.+ชากังราว+Kamphaeng+Phet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-gradient-to-br from-[#D97736] to-[#9A3B06] rounded-full flex items-center justify-center text-white text-2xl shadow-xl shadow-[#9A3B06]/40 animate-bounce hover:scale-110 transition-transform border-4 border-white"
              >
                📍
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#2D1B10] text-[#FDF8EB] py-12 border-t-[8px] border-[#D97736]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-black text-white flex items-center gap-2 justify-center md:justify-start">
              <span className="text-[#D97736]"></span> BLAY BLAY PLAYLAB.
            </div>
            <p className="text-white/60 text-sm mt-2">
              พื้นที่สร้างสรรค์และเรียนรู้เทคโนโลยีสำหรับทุกคน
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-white/40 text-sm">
              © 2026 Blay Blay PlayLab. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
