FROM ubuntu:18.04

# tzdata対策環境変数
ENV DEBIAN_FRONTEND=noninteractive

LABEL version="1.0"
LABEL description="Dx3rd：バックエンド"

# 実行に必要なライブラリ
RUN apt -y update && \
    apt -y upgrade
RUN apt install -y vim tzdata wget zlib1g-dev git gcc make libssl-dev libreadline-dev zlib1g-dev libsqlite3-dev

WORKDIR /tmp

# rbenv + ruby + bundler
RUN git clone https://github.com/rbenv/rbenv.git ~/.rbenv && \
    git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build && \
    export PATH="$HOME/.rbenv/bin:$PATH" && \
    eval "$(rbenv init -)" && \
    CONFIGURE_OPTS='--disable-install-rdoc' rbenv install 2.6.6 && \
    rbenv global 2.6.6 && \
    rbenv exec gem install bundler && \
    rbenv rehash

RUN echo "export PATH=\"\$HOME/.rbenv/bin:\$PATH\"" >> ~/.bashrc && \
    echo "eval \"\$(rbenv init -)\"" >> ~/.bashrc && \
    echo "export PATH=\"/root/.rbenv/shims:\$PATH\"" >> ~/.bashrc

WORKDIR /home/