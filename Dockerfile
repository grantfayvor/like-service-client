FROM node:14.15.0-buster-slim
WORKDIR /app
COPY . /app
RUN npm install -g serve
RUN npm install && \
  npm run build
EXPOSE 4000
ENV NAME Like_Service_Client
ENV NODE_ENV production
CMD ["npm", "run", "serve"]