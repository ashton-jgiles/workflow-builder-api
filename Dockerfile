FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Expose Nest port
EXPOSE 3001

# Start Nest in dev mode with hot reload
CMD ["npm", "run", "start:dev"]
