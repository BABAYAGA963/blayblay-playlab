FROM node:20-alpine AS base

# 1. ติดตั้ง dependencies
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# 2. Build โปรเจกต์
COPY . .
RUN npm run build

# 3. เตรียมรัน
EXPOSE 3000
CMD ["npm", "start"]
