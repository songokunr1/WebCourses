
# Base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Install the desired version of npm

RUN npm install -g @vue/cli
# Copy package.json and package-lock.json

# Copy application code
COPY . .

COPY package*.json ./

# Install dependencies
RUN npm install --force

RUN npm install vuetify
# Apply npm audit fix with the --force flag
RUN npm audit fix --force



# Build the application
RUN npm run build

# Specify the startup command
CMD ["npm", "run", "serve"]