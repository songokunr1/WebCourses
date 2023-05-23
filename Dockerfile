# Base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Install the desired version of npm
RUN npm install -g npm@9.2.0

RUN npm install -g @vue/cli
# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Apply npm audit fix with the --force flag
RUN npm audit fix --force

# Copy application code
COPY . .

# Build the application
RUN npm run build

# Specify the startup command
CMD ["npm", "run", "serve"]
