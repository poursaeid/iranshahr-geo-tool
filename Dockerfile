FROM node:18.16.0-alpine

# Add files to the docker dir /app
COPY . /app/

WORKDIR /app

# Environment variables
ENV PORT=5000

# Enable pnpm package manager
RUN corepack enable
# Install packages
RUN pnpm install
# Build the ts app
RUN pnpm build

CMD [ "node","dist/src/index.js" ]