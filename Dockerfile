FROM nginx:1.16.1-alpine
COPY dist/ /usr/share/nginx/html
