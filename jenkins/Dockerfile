# Stage with Node.js - official Node 22 LTS runtime [pulls from Docker Hub]
FROM node:22-bookworm-slim AS node

# Jenkins base
FROM jenkins/jenkins:2.516.2-jdk21
USER root
ENV DEBIAN_FRONTEND=noninteractive

# Tools
RUN apt-get update && apt-get install -y --no-install-recommends \
    lsb-release ca-certificates curl gnupg python3 python3-pip python3-venv \
    git build-essential unzip jq && rm -rf /var/lib/apt/lists/*

# Copy Node.js and npm from the official Node image
COPY --from=node /usr/local/bin/node /usr/local/bin/node
COPY --from=node /usr/local/bin/npm /usr/local/bin/npm
COPY --from=node /usr/local/bin/npx /usr/local/bin/npx
COPY --from=node /usr/local/lib/node_modules /usr/local/lib/node_modules
COPY --from=node /usr/local/bin/corepack /usr/local/bin/corepack
# Create symbolic links for npm and npx to ensure proper operation
RUN ln -sf /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm && \
    ln -sf /usr/local/lib/node_modules/npm/bin/npx-cli.js /usr/local/bin/npx

# Docker CLI
RUN curl -fsSLo /usr/share/keyrings/docker-archive-keyring.asc \
      https://download.docker.com/linux/debian/gpg && \
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.asc] \
      https://download.docker.com/linux/debian $(lsb_release -cs) stable" \
      > /etc/apt/sources.list.d/docker.list && \
    apt-get update && apt-get install -y docker-ce-cli && rm -rf /var/lib/apt/lists/*

USER jenkins
RUN jenkins-plugin-cli --plugins "blueocean docker-workflow json-path-api"
