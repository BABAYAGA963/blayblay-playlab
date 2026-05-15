FROM node:20-alpine AS base
WORKDIR /app

# ต้องระบุชื่อโฟลเดอร์ blayblay-playlab นำหน้าตอน COPY
COPY blayblay-playlab/package.json blayblay-playlab/package-lock.json* ./
RUN npm ci

COPY blayblay-playlab/ ./
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
