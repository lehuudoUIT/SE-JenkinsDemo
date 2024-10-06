# Stage 1: Install dependencies and run tests
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other source code
COPY . .

# Run tests
RUN npm test

# Build the app
RUN npm run build

# Stage 2: Create a lightweight production image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy the built app from the previous stage
COPY --from=build /app/build /app/build

# Install only production dependencies
COPY package*.json ./
RUN npm install --only=production

# Expose the app port (e.g., 3000)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
