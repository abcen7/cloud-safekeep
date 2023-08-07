# Stage 1: Build React app
FROM node:14 as build

# Update npm to the latest version
RUN npm install -g npm

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Set up Nginx and Certbot
FROM nginx:alpine

# Install certbot
RUN apk add certbot

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy React build
COPY --from=build /app/dist /usr/share/nginx/html

# Expose ports
EXPOSE 80
EXPOSE 443

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
