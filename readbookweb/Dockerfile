From node:6.7.0-onbuild

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -y curl apt-transport-https
RUN apt-get install -y nginx

RUN cd /etc/nginx/sites-enabled; rm -f default
ADD default.conf /etc/nginx/sites-enabled

CMD service nginx start;npm start

EXPOSE 80 3000-3002
