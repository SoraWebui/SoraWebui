FROM node:18-alpine AS builder

WORKDIR /app

COPY ./ ./
RUN npm install
RUN npm run build

FROM builder AS runner
WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "run", "start"]