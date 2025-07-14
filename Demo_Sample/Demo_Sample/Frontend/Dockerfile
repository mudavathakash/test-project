# Stage 1: Build React App using node:alpine
FROM node:20-alpine AS builder

# Install required build tools for some npm packages
RUN apk add --no-cache python3 make g++

# Set working directory
WORKDIR /app

# Copy only package files to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Fix react-scripts permission issue
RUN chmod -R +x node_modules/.bin

# Build production static files
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built React files from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Optional: Copy custom nginx config (for React Router)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
