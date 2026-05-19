import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// เพิ่มบล็อก icons เข้าไปใน metadata ตรงนี้แล้วครับ 🎯
export const metadata: Metadata = {
  title: "PlayLab",
  description: "พื้นที่ทดลองไอเดีย พัฒนา IoT, Robot และ AI",
  icons: {
    icon: "/icon.png", // Next.js จะวิ่งไปหาไฟล์ icon.png ในโฟลเดอร์ app มาทำเป็น Favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
