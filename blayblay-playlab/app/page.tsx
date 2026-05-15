"use client";

import React from "react";
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
} from "lucide-react";

// โค้ดสีหลัก (คุมโทนตามงานเดิมของคุณ)
// พื้นหลังหลัก: bg-[#FDF8EB]
// สีน้ำตาลเข้ม (ปุ่ม/หัวข้อ): #9A3B06, #7A3612

export default function PlayLabLandingPage() {
  return (
    <div className="min-h-screen bg-[#FDF8EB] font-sans text-[#4A2B18] overflow-x-hidden">
      {/* 1. NAVBAR (แถบนำทาง) */}
      <nav className="fixed w-full z-50 bg-[#FDF8EB]/90 backdrop-blur-md border-b border-[#E8DCC2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-black text-[#7A3612] tracking-tighter"
          >
            BLAY BLAY
            <br />
            <span className="text-xl">PLAYLAB.</span>
          </Link>

          {/* Menu */}
          <div className="hidden md:flex space-x-8 font-medium text-[#7A3612]/80">
            <Link
              href="#"
              className="hover:text-[#9A3B06] border-b-2 border-transparent hover:border-[#9A3B06] transition-all pb-1"
            >
              หน้าแรก
            </Link>
            <Link
              href="#courses"
              className="hover:text-[#9A3B06] transition-all pb-1"
            >
              คอร์ส & โปรเจกต์
            </Link>
            <Link
              href="#story"
              className="hover:text-[#9A3B06] transition-all pb-1"
            >
              เรื่องราวของเรา
            </Link>
            <Link
              href="#gallery"
              className="hover:text-[#9A3B06] transition-all pb-1"
            >
              แกลเลอรี
            </Link>
          </div>

          {/* CTA Button */}
          <button className="bg-[#9A3B06] hover:bg-[#7A3612] text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:shadow-lg flex items-center gap-2">
            <Calendar size={18} />
            จอง Workshop
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 min-h-screen">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F3E5C8] text-[#9A3B06] rounded-full text-sm font-bold border border-[#E8DCC2]">
            <span>&gt;_ System.ready() — Raspberry Pi Powered</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-[#7A3612] leading-[1.1] tracking-tight">
            BLAY BLAY
            <br />
            PLAYLAB.
          </h1>

          <p className="text-lg md:text-xl text-[#5A3A25] max-w-lg leading-relaxed">
            พื้นที่ทดลองไอเดีย พัฒนา IoT, Robot และ AI เรียนรู้การตั้งค่า Home
            Server ด้วย Raspberry Pi ในบรรยากาศเป็นกันเอง
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="#courses"
              className="bg-[#9A3B06] hover:bg-[#7A3612] text-white px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 hover:shadow-xl shadow-[#9A3B06]/20"
            >
              JOIN WORKSHOP
            </Link>
            <Link
              href="#projects"
              className="border-2 border-[#9A3B06] text-[#9A3B06] hover:bg-[#9A3B06] hover:text-white px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1"
            >
              OUR PROJECTS
            </Link>
          </div>
        </div>

        {/* ตรงนี้คือกล่องดำ (เปลี่ยนเป็นหน้าจอ Terminal สุดเท่) */}
        <div className="flex-1 w-full relative group cursor-default">
          <div className="aspect-square bg-[#121212] rounded-[3rem] shadow-2xl overflow-hidden relative flex items-center justify-center border border-[#3A3A3A]">
            {/* กราฟิกหน้าจอ Terminal โปรแกรมเมอร์ */}
            <div className="w-4/5 max-w-md p-6 bg-[#0A0A0A] rounded-2xl border border-white/10 shadow-2xl font-mono text-sm sm:text-base text-left group-hover:scale-105 transition-transform duration-500 z-10">
              {/* ปุ่มจุด 3 สีบนหน้าต่าง MacOS */}
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>

              <p className="text-[#27C93F] mb-2">
                blayblay@playlab
                <span className="text-white/80">:~ $ ./start_engine.sh</span>
              </p>
              <div className="space-y-2 text-white/50">
                <p className="flex items-center gap-2">
                  <span className="text-[#27C93F]">[ OK ]</span> Booting
                  Raspberry Pi cluster...
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#27C93F]">[ OK ]</span> Loading IoT
                  protocols...
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#27C93F]">[ OK ]</span> AI Models
                  initialized.
                </p>
              </div>
              <p className="text-[#F3E5C8] mt-6 animate-pulse font-semibold">
                &gt; System is online and ready_
              </p>
            </div>

            {/* แสง Gradient ตกแต่งพื้นหลังกล่อง */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#9A3B06]/30 rounded-full blur-[80px] pointer-events-none transition-all group-hover:bg-[#9A3B06]/50"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#F3E5C8]/20 rounded-full blur-[80px] pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* 3. CATEGORY PILLS */}
      <section className="py-8 bg-white/50 border-y border-[#E8DCC2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-[#E8DCC2] shadow-sm hover:border-[#9A3B06] hover:text-[#9A3B06] cursor-pointer transition-all">
            <Server size={20} className="text-[#9A3B06]" /> Raspberry Pi
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-[#F3E5C8] rounded-full border border-[#9A3B06] text-[#9A3B06] font-bold shadow-sm cursor-pointer transition-all">
            <Wifi size={20} /> IoT Smart Home
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-[#E8DCC2] shadow-sm hover:border-[#9A3B06] hover:text-[#9A3B06] cursor-pointer transition-all">
            <BrainCircuit size={20} className="text-[#9A3B06]" /> AI & Machine
            Learning
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-[#E8DCC2] shadow-sm hover:border-[#9A3B06] hover:text-[#9A3B06] cursor-pointer transition-all">
            <Cpu size={20} className="text-[#9A3B06]" /> Robotics
          </div>
        </div>
      </section>

      {/* 4. COURSES & PROJECTS */}
      <section id="courses" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[#9A3B06] font-bold flex items-center gap-2 mb-2">
              ⭐ คอร์สแนะนำ
            </span>
            <h2 className="text-4xl font-black text-[#7A3612]">
              คอร์ส & โปรเจกต์ยอดนิยม
            </h2>
          </div>
          <Link
            href="#"
            className="hidden md:flex items-center gap-1 text-[#9A3B06] hover:underline font-semibold"
          >
            ดูคอร์สทั้งหมด <ChevronRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#E8DCC2] group">
            <div className="h-48 bg-stone-200 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-stone-400 group-hover:scale-110 transition-transform duration-500">
                Image 1
              </div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-[#7A3612]">
                Raspberry Pi Home Server
              </h3>
              <p className="text-sm text-[#5A3A25] line-clamp-2">
                สร้างเครื่องเซิร์ฟเวอร์ส่วนตัว สำหรับจัดเก็บไฟล์และใช้งานในบ้าน
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-[#FDF8EB] text-[#9A3B06] rounded border border-[#E8DCC2]">
                  Raspberry Pi
                </span>
                <span className="text-xs px-2 py-1 bg-[#FDF8EB] text-[#9A3B06] rounded border border-[#E8DCC2]">
                  Home Server
                </span>
              </div>
              <button className="w-full mt-4 py-2 rounded-lg border-2 border-[#9A3B06] text-[#9A3B06] font-bold group-hover:bg-[#9A3B06] group-hover:text-white transition-colors flex justify-center items-center gap-2">
                ดูรายละเอียด <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#E8DCC2] group">
            <div className="h-48 bg-stone-300 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-stone-500 group-hover:scale-110 transition-transform duration-500">
                Image 2
              </div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-[#7A3612]">
                IoT Smart Home
              </h3>
              <p className="text-sm text-[#5A3A25] line-clamp-2">
                เรียนรู้การเชื่อมต่ออุปกรณ์ และสร้างบ้านอัจฉริยะด้วยตัวเอง
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-[#FDF8EB] text-[#9A3B06] rounded border border-[#E8DCC2]">
                  IoT
                </span>
                <span className="text-xs px-2 py-1 bg-[#FDF8EB] text-[#9A3B06] rounded border border-[#E8DCC2]">
                  Smart Home
                </span>
              </div>
              <button className="w-full mt-4 py-2 rounded-lg border-2 border-[#9A3B06] text-[#9A3B06] font-bold group-hover:bg-[#9A3B06] group-hover:text-white transition-colors flex justify-center items-center gap-2">
                ดูรายละเอียด <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR STORY */}
      <section
        id="story"
        className="py-24 bg-white/60 border-y border-[#E8DCC2]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="text-[#9A3B06] font-bold tracking-widest text-sm flex items-center gap-2 uppercase">
              <Wrench size={16} /> Our Story
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#7A3612] leading-tight">
              สร้างแรงบันดาลใจ
              <br />
              ผ่านการลงมือทำ
            </h2>
            <p className="text-[#5A3A25] text-lg">
              เราเชื่อว่าทุกคนสามารถสร้างสรรค์สิ่งใหม่ได้ Blay Blay PlayLab
              จึงเป็นพื้นที่แห่งการเรียนรู้ที่อบอุ่น ปลอดภัย
              และเปิดโอกาสให้ทุกคนได้ลองคิด ลองทำ และสร้างผลงานของตัวเอง
            </p>
            <button className="text-[#9A3B06] font-bold flex items-center gap-2 hover:gap-4 transition-all pb-1 border-b-2 border-[#9A3B06] w-max">
              รู้จักเราเพิ่มเติม <ArrowRight size={20} />
            </button>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#E8DCC2] space-y-8">
            <div className="flex gap-6 items-start">
              <div className="p-4 bg-[#F3E5C8] rounded-2xl text-[#9A3B06]">
                <BrainCircuit size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#7A3612]">
                  เหมาะกับมือใหม่
                </h4>
                <p className="text-[#5A3A25] mt-1">
                  ไม่ต้องมีพื้นฐานก็เรียนได้ ค่อยๆ เรียนรู้ไปด้วยกัน
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="p-4 bg-[#F3E5C8] rounded-2xl text-[#9A3B06]">
                <Wrench size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#7A3612]">
                  เรียนแบบ Project-based
                </h4>
                <p className="text-[#5A3A25] mt-1">
                  ลงมือทำจริงผ่านโปรเจกต์ เข้าใจจากการลงมือทำ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-[#5A2300] text-[#FDF8EB] pt-16 pb-8 border-t-8 border-[#9A3B06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-3xl font-black tracking-tighter">
              BLAY BLAY
              <br />
              PLAYLAB.
            </h3>
            <p className="text-white/70 max-w-sm">
              พื้นที่เรียนรู้สำหรับคนชอบเทคโนโลยี ลงมือทำจริง • เข้าใจง่าย •
              สร้างสรรค์ได้ไม่รู้จบ
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#F3E5C8]">
              เวลาเปิดทำการ
            </h4>
            <ul className="space-y-2 text-white/70">
              <li>จันทร์ - ศุกร์ : 10:00 - 20:00</li>
              <li>เสาร์ - อาทิตย์ : 10:00 - 18:00</li>
              <li className="text-[#F3E5C8] font-semibold mt-2">
                หยุดทุกวันพุธ
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#F3E5C8]">ติดต่อเรา</h4>
            <ul className="space-y-2 text-white/70">
              <li>📞 096-xxx-xxxx</li>
              <li>💬 Line: @blayplaylab</li>
              <li>📧 hello@playlab.co.th</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          © 2026 Blay Blay PlayLab. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
