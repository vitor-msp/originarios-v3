FROM node:18.16.1 as builder
WORKDIR /frontend
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:1.21.0-alpine
ENV NODE_ENV production
COPY --from=builder /frontend/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]