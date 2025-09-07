
# Single-stage Dockerfile: install dependencies and build in the same stage
FROM node:18-alpine AS app
WORKDIR /app

# Install system dependencies
RUN apk add --no-cache libc6-compat

# Copy package files and install all dependencies (including dev for build)
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source code
COPY . .

# Build application
RUN npm run build

# Set up runtime user
RUN addgroup --system --gid 1001 nodejs \
	&& adduser --system --uid 1001 nextjs

# Set permissions for .next
RUN mkdir -p .next && chown nextjs:nodejs .next

USER nextjs

EXPOSE 3000
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the Next.js app (standalone or regular)
CMD ["npm", "start"]
