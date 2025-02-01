FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

FROM node:18-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

COPY --from=build /app/build /app/build
COPY --from=build /app/package*.json /app/

RUN npm install --production

RUN npm install -g pm2

EXPOSE 3000

USER node

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD curl --fail http://localhost:3000/health || exit 1

CMD ["pm2-runtime", "build/index.js"]
