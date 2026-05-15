FROM node:20-alpine AS base
WORKDIR /app

COPY blayblay-playlab/package.json blayblay-playlab/package-lock.json* ./
RUN npm install

COPY blayblay-playlab/ ./

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
