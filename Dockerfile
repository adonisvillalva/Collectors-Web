FROM node:12-alpine AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.19.0-alpine AS prod-stage
COPY --from=build /app/build /usr/share/nxing/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;"]