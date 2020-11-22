# dx3rd-charactor-create-app2


## 環境構築
本アプリはRuby + Ruby on Railsで動作するバックエンドサーバと、<br>
React + Material-UIで動作するフロントエンドサーバーから構成される。<br>
それぞれのサーバはDockerコンテナ上に構築する。サーバごとのDockerコンテナ構築手順を記す。
<br><br>

### 【フロントエンド】
クローンしたディレクトリ内で下記コマンドを実行し、Dockerコンテナをビルドする。
```
docker build -t dx3rd-frontend docs\frontend
```
DockerイメージからDockerコンテナを作成する
```
docker run -w /home/crud_front -p 127.0.0.1:3000:3000 -it -v <path>:/home/ dx3rd-frontend
```
必要なライブラリをインストールする。
```
npm install
```
別のターミナルで下記を実行し、DockerコンテナのIDを取得する。
```
docker ps
```
構築したDockerコンテナを上書き保存する
```
docker commit <containerID> dx3rd-frontend
```
<br>

### 【バックエンド】
クローンしたディレクトリ内で下記コマンドを実行し、Dockerコンテナをビルドする。
```
docker build -t dx3rd-backend docs\backend
```
DockerイメージからDockerコンテナを作成する
```
docker run -p 127.0.0.1:3001:3001 -it -v <path>:/home/ dx3rd-backend
```

`ruby`のライブラリをGemfileからインストールする。
```
bundle install
```
データベースを作成する
```
rake db:create
rake db:migrate
rake db:seed
```
別のターミナルで下記を実行し、DockerコンテナのIDを取得する。
```
docker ps
```
構築したDockerコンテナを上書き保存する
```
docker commit <containerID> dx3rd-backend
```
<br>

## 実行手順
### 【フロントエンド】
DockerイメージからDockerコンテナを作成する
```
docker run -w /home/crud_front -p 127.0.0.1:3000:3000 -it -v <path>:/home/ dx3rd-frontend
```
サーバを起動する。
```
npm start
```
<br>

### 【バックエンド】

DockerイメージからDockerコンテナを作成する
```
docker run -p 127.0.0.1:3001:3001 -it -v <path>:/home/ dx3rd-backend
```
サーバを起動する。
```
bundle exec rails s -p 3001 -b '0.0.0.0'
```