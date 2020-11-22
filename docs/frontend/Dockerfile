FROM ubuntu:18.04

LABEL version="1.0"
LABEL description="Dx3rd：フロントサイド"

RUN apt -y update && \
    apt -y upgrade

RUN apt install -y curl make gcc g++

# Ubuntuでnpmのサポートが切れている問題解決
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
    apt install -y nodejs && \
    npm cache clean --force
WORKDIR /home/crud_front