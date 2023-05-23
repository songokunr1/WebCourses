# Base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install -g @vue/cli
RUN npm install

# Copy application code
COPY . .

# Build the application
RUN npm run build

# Specify the startup command
CMD ["npm", "run", "serve"]
