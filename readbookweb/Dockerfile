FROM ubuntu:16.04
MAINTAINER Johnny Tsai

RUN dpkg-divert --local --rename --add /sbin/initctl
RUN mv /sbin/initctl /sbin/initctl.org
RUN ln -s /bin/true /sbin/initctl

RUN echo "deb mirror://mirrors.ubuntu.com/mirrors.txt xenial main restricted universe multiverse" >> /etc/apt/sources.list
RUN echo "deb mirror://mirrors.ubuntu.com/mirrors.txt xenial-updates main restricted universe multiverse" >> /etc/apt/sources.list
RUN echo "deb mirror://mirrors.ubuntu.com/mirrors.txt xenial-backports main restricted universe multiverse" >> /etc/apt/sources.list
RUN echo "deb mirror://mirrors.ubuntu.com/mirrors.txt xenial-security main restricted universe multiverse" >> /etc/apt/sources.list

RUN apt-get update
RUN apt-get upgrade -y

RUN apt-get install -y curl apt-transport-https

RUN echo "deb https://deb.nodesource.com/node_6.x xenial main" > /etc/apt/sources.list.d/nodesource.list
RUN echo "deb-src https://deb.nodesource.com/node_6.x xenial main " >> /etc/apt/sources.list.d/nodesource.list

RUN curl -s https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add -

RUN apt-get update
RUN apt-get install -y nginx zip nodejs

#RUN echo 'if [ -f "/.dockerenv" ]; then PS1="[DOCKER ${DOCKER_NAME}] $PS1"; fi' >> /root/.bashrc

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm install


RUN cd /etc/nginx/sites-enabled; rm -f default
ADD default /etc/nginx/sites-enabled

EXPOSE 80 3000 5432

CMD service nginx start;node test.js & npm start; 
