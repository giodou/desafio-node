FROM nginx:latest

COPY custom-conf/conf.d/default.conf /etc/nginx/conf.d/
COPY custom-html/index.html /usr/share/nginx/html/

ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD ["nginx", "-g", "daemon off;"]