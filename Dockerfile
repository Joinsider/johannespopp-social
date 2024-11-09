FROM node:14

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build --prod

# Expose the port the app runs on
EXPOSE 4200

# Start the Angular server
CMD ["npm", "start"]
