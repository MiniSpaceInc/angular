# Build stage
FROM --platform=amd64 node:20 AS build
WORKDIR /app
COPY package*.json .
RUN npm install -g @angular/cli
RUN npm install
COPY . .
RUN ng build -c production

# Maven base image stage
FROM --platform=linux/amd64 maven:3.9.6-amazoncorretto-21-debian
COPY --from=build /app/dist/mi-nispace-angular /angular-build
