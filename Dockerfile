FROM node:20-alpine AS base

WORKDIR /app

# 1. ติดตั้ง dependencies โดยดึงจากโฟลเดอร์ย่อย
COPY blayblay-playlab/package.json blayblay-playlab/package-lock.json* ./
RUN npm ci

# 2. Build โปรเจกต์ โดยก๊อปปี้ของทั้งหมดในโฟลเดอร์ย่อยมา
COPY blayblay-playlab/ ./
RUN npm run build

# 3. เตรียมรัน
EXPOSE 3000
CMD ["npm", "start"]
