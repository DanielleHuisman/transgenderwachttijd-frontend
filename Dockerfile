# Based on https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile

# Install dependencies only when needed
FROM node:lts-alpine AS deps
RUN apk add --no-cache libc6-compat
RUN corepack enable
WORKDIR /srv/app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Rebuild the source code only when needed
FROM node:lts-alpine AS builder
WORKDIR /srv/app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
RUN pnpm build

# Production image, copy all the files and run next
FROM node:lts-alpine AS runner
WORKDIR /srv/app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 worker
RUN adduser --system --uid 1001 worker

COPY --from=builder /srv/app/public ./public

COPY --from=builder --chown=worker:nodejs /srv/app/.next/standalone ./
COPY --from=builder --chown=worker:nodejs /srv/app/.next/static ./.next/static

USER worker

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
