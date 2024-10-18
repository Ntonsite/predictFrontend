FROM node:18.19.0 as build

WORKDIR /app

RUN npm install -g npm@latest

COPY package*.json ./

RUN npm install --force

RUN npm install -g @angular/cli

COPY . .

RUN ng build --configuration=production

FROM nginx:latest

COPY --from=build app/dist/niweseshe /usr/share/nginx/html

EXPOSE 80