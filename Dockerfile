############# BUILD STAGE #############
FROM node:18.18.1-alpine as builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN npm install --frozen-lockfile

COPY . .

RUN npm build

############# RUNTIME STAGE #############
FROM node:alpine as runtime

RUN adduser -D -u 1001 soli-fe
RUN mkdir /app && chown lindy-fe:lindy-fe /app
USER lindy-fe
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/next-i18next.config.js ./next-i18next.config.js
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
