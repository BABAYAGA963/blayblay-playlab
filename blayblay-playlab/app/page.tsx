"use client";
import { motion } from "framer-motion";
import {
  Cpu,
  Radio,
  Bot,
  BrainCircuit,
  Terminal,
  Server,
  ChevronRight,
} from "lucide-react";
// Import ของเล่นใหม่
import Spline from "@splinetool/react-spline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import CSS ของ Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PlayLabPage() {
  return (
    <div className="min-h-screen bg-[#FFFBEB] text-[#422006] font-sans selection:bg-[#FCD34D] pb-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6 relative z-10"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FEF3C7] border-2 border-[#FDE68A] text-[#D97706] font-bold text-sm mb-4 shadow-sm"
          >
            <Terminal size={18} />{" "}
            <span>System.ready() — Raspberry Pi Powered</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-[#78350F] leading-[1.1]">
            BLAY BLAY <br /> PLAYLAB.
          </h1>
          <p className="text-xl text-[#78350F]/80 max-w-2xl leading-relaxed font-medium">
            พื้นที่ทดลองไอเดีย พัฒนา IoT, Robot และ AI เรียนรู้การตั้งค่า Home
            Server ด้วย Raspberry Pi ในบรรยากาศเป็นกันเอง
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#78350F] text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg">
              JOIN WORKSHOP
            </button>
            <button className="border-2 border-[#78350F] text-[#78350F] px-8 py-4 rounded-xl font-bold hover:bg-[#78350F] hover:text-white transition-all">
              OUR PROJECTS
            </button>
          </div>
        </motion.div>

        {/* 🌟 พระเอกของเรามาแล้ว: Spline 3D Model */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex-1 w-full relative"
        >
          <div className="w-full h-[400px] md:h-[500px] bg-[#FEF3C7] rounded-[3rem] border-4 border-white shadow-2xl overflow-hidden relative group">
            {/* ข้อความใบ้ให้คนรู้ว่าลากเล่นได้ */}
            <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-[#D97706] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              ✨ Drag to rotate
            </div>
            {/* ลิงก์โมเดล 3D (สามารถเปลี่ยนเป็นโมเดลตัวเองที่ปั้นในเว็บ Spline.design ได้ทีหลัง) */}
            <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-black text-[#78350F] uppercase">
            Our Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <LabCard
            delay={0.1}
            icon={<Cpu size={40} />}
            title="Workshop"
            desc="อบรมการเขียนโปรแกรมและการประกอบฮาร์ดแวร์"
            color="text-[#D97706]"
          />
          <LabCard
            delay={0.2}
            icon={<Server size={40} />}
            title="Home Server"
            desc="จัดการ Server ส่วนตัวด้วย Raspberry Pi"
            color="text-[#059669]"
          />
          <LabCard
            delay={0.3}
            icon={<Bot size={40} />}
            title="IoT & Robot"
            desc="สร้างระบบอัตโนมัติและหุ่นยนต์อัจฉริยะ"
            color="text-[#2563EB]"
          />
          <LabCard
            delay={0.4}
            icon={<BrainCircuit size={40} />}
            title="AI & Data"
            desc="ประยุกต์ใช้โมเดล AI ในการประมวลผลข้อมูล"
            color="text-[#E11D48]"
          />
        </div>
      </section>

      {/* 🌟 ของเล่นชิ้นที่ 2: Swiper Slider Project Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-10 relative z-10">
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-4xl font-black text-[#78350F] uppercase">
            Project Gallery
          </h2>
          <p className="text-[#78350F]/70 font-medium mt-2">
            ภาพบรรยากาศผลงานและการทดลองในแล็บของเรา
          </p>
        </div>

        <div className="bg-white p-6 rounded-[2.5rem] shadow-xl border-4 border-[#FEF3C7]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full rounded-2xl pb-10" // เผื่อที่ให้จุดไข่ปลาด้านล่าง
          >
            {/* สไลด์ที่ 1 */}
            <SwiperSlide>
              <ProjectSlide
                imgUrl="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=800&auto=format&fit=crop"
                title="Raspberry Pi Cluster"
              />
            </SwiperSlide>
            {/* สไลด์ที่ 2 */}
            <SwiperSlide>
              <ProjectSlide
                imgUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
                title="Smart Home IoT"
              />
            </SwiperSlide>
            {/* สไลด์ที่ 3 */}
            <SwiperSlide>
              <ProjectSlide
                imgUrl="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop"
                title="AI Object Detection"
              />
            </SwiperSlide>
            {/* สไลด์ที่ 4 */}
            <SwiperSlide>
              <ProjectSlide
                imgUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
                title="Hardware Workshop"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Live Server Status */}
      <section className="max-w-5xl mx-auto px-6 mt-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border-4 border-[#FEF3C7] rounded-[2.5rem] p-10 shadow-xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4 border-b-2 border-[#FEF3C7] pb-6">
            <h3 className="text-3xl font-black text-[#78350F] flex items-center gap-3">
              <Radio className="text-[#D97706] animate-pulse" size={32} /> LIVE
              LAB STATUS
            </h3>
            <span className="text-sm text-[#D97706] uppercase tracking-widest bg-[#FEF3C7] px-5 py-2.5 rounded-xl font-bold">
              Node: Raspberry Pi 4
            </span>
          </div>

          <div className="space-y-8">
            <StatusRow
              label="CPU Usage"
              value="12%"
              color="bg-[#F59E0B]"
              delay={0.2}
            />
            <StatusRow
              label="Memory (RAM)"
              value="1.2GB / 8GB"
              percentage="15%"
              color="bg-[#10B981]"
              delay={0.4}
            />
            <StatusRow
              label="Coolify Containers"
              value="3 Active"
              percentage="100%"
              color="bg-[#3B82F6]"
              delay={0.6}
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}

// ---- Components ย่อย ----

function LabCard({
  icon,
  title,
  desc,
  delay,
  color,
}: {
  icon: any;
  title: string;
  desc: string;
  delay: number;
  color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="p-8 rounded-[2rem] bg-white border-2 border-transparent hover:border-[#FCD34D] transition-all group shadow-lg text-center flex flex-col h-full"
    >
      <div
        className={`mx-auto mb-6 p-5 rounded-3xl bg-[#FEF3C7] w-fit group-hover:scale-110 transition-transform ${color}`}
      >
        {icon}
      </div>
      <h3 className="text-2xl font-black text-[#78350F] mb-4">{title}</h3>
      <p className="text-[#78350F]/70 font-medium leading-relaxed flex-grow">
        {desc}
      </p>

      <button className="mt-6 text-[#D97706] font-bold flex items-center justify-center w-full gap-1 group-hover:gap-2 transition-all">
        Explore <ChevronRight size={18} />
      </button>
    </motion.div>
  );
}

function ProjectSlide({ imgUrl, title }: { imgUrl: string; title: string }) {
  return (
    <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#422006]/80 to-transparent flex items-end p-6">
        <h4 className="text-white font-bold text-xl translate-y-2 group-hover:translate-y-0 transition-transform">
          {title}
        </h4>
      </div>
    </div>
  );
}

function StatusRow({
  label,
  value,
  percentage,
  color,
  delay,
}: {
  label: string;
  value: string;
  percentage?: string;
  color: string;
  delay: number;
}) {
  const finalWidth = percentage || value;
  return (
    <div className="space-y-3">
      <div className="flex justify-between font-bold text-[#78350F] text-lg">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-4 w-full bg-[#FEF3C7] rounded-full overflow-hidden shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: finalWidth }}
          transition={{ delay: delay, duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`h-full ${color} rounded-full`}
        />
      </div>
    </div>
  );
}
