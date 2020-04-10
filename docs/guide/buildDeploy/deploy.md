# 部署

## 使用docker
推荐使用 docker 实现容器化部署。
```bash
# 构建docker镜像
docker build
```

## 使用nginx
nginx 作为最流行的 web 容器之一，配置和使用相当简单，只要简单的配置就能拥有高性能和高可用。推荐使用 nginx 托管。示例配置如下：
```bash
user  root;
# Nginx work 进程数
worker_processes  2;
events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    # gzip开启
    gzip  on;
    gzip_min_length 1k;
    gzip_buffers 4 16k;
    gzip_http_version 1.0;
    gzip_comp_level 6;
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php;

 server {
        listen  80;
        location / {
            root   /usr/share/nginx/html;
            try_files $uri $uri/ /index.html;

            index  index.html index.htm;
        }
   }
}

```