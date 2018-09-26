#download base Jenkins image
FROM jenkinsci/blueocean

#set user
USER root

#run update and install prerequisites
RUN apk update && apk add alpine-sdk python-dev ruby python python3 py-pip yarn openjdk8

#python install stuff
RUN pip install -U pip tox codecov

#plugins install *need to add plugin file
#COPY plugins.txt /usr/share/jenkins/plugins.txt
#RUN /usr/local/bin/install-plugins.sh < /usr/share/jenkins/plugins.txt

#tell docker which port to connect on
EXPOSE 8080

USER jenkins
