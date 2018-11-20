FROM node:11-alpine
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 5000
ENTRYPOINT ["npm", "run", "start:docker"]
