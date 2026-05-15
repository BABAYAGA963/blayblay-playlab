FROM node:20-alpine AS base
WORKDIR /app

# ต้องระบุชื่อโฟลเดอร์นำหน้า เพราะ Dockerfile อยู่ข้างนอก
COPY blayblay-playlab/package.json blayblay-playlab/package-lock.json* ./
RUN npm ci

# ก๊อปปี้ของทั้งหมดในโฟลเดอร์เว็บเข้ามาที่ /app
COPY blayblay-playlab/ ./

# สั่ง Build
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
