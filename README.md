# dx3rd-charactor-create-app2
TRPG『ダブルクロス』ルールブック1に則ったキャラクター作成アプリ。<br>
エフェクトの取得等に使用した経験点の管理等、面倒な作業を自動化する。

<br>


# 機能

### 【キャラクター詳細設定】
キャラクターの基本設定を行う。
下記のうち、「ワークス」「衝動」「覚醒」はプルダウンメニューからルールブックに基づいた種類を選択することができる。
- 名前
- コードネーム
- 性別
- ワークス
- カヴァー
- 出自
- 経験
- 邂逅
- 衝動
- 覚醒

「成長点管理表」はエフェクトの取得等に使用した経験点を自動で算出し、保有している経験点との差を計算する。<br>
「財産点管理表」はアイテムの取得に使用した財産点を自動で算出し、保有している財産点との差を計算する。

<br>

![detail](https://user-images.githubusercontent.com/19168787/103451455-9a135480-4d07-11eb-95fa-96b9adb28524.gif)

<br>

### 【技能設定】
技能を設定する。<br>
成長値列に成長させたいポイント数を入力する。<br>
右上のプラスボタンを押下することで「運転」「芸術」「知識」「情報」を選択できる行を追加する。<br>
詳細設定画面で選択したワークスに応じ、技能の初期値と適切な技能が自動で設定される<br>


<br>

![skill](https://user-images.githubusercontent.com/19168787/103451466-b44d3280-4d07-11eb-938a-2ce80fd6fb26.gif)

<br>

### 【能力値設定】
任意のシンドロームを選択する。<br>
成長分行に成長させたいポイント数を入力する。<br>
選択したシンドロームに応じて能力値が自動で設定される。<br>
キャラクター詳細設定画面で選択した衝動等に応じて初期侵食値が自動で設定される。<br>

<br>

![ability](https://user-images.githubusercontent.com/19168787/103451470-bb744080-4d07-11eb-817e-c4d777343652.gif)

<br>

### 【エフェクト設定】
画面右上のプラスボタンを押下して表示されるエフェクトダイアログから、取得したいエフェクトを選択する。<br>
ダイアログには選択したシンドロームに応じた、取得できるエフェクトのみが表示される。

<br>

![effect](https://user-images.githubusercontent.com/19168787/103451473-c333e500-4d07-11eb-9ba8-f73cdd9a59a6.gif)

<br>

### 【アイテム設定】
武器、防具、アイテム表それぞれの右上にあるプラスボタンを押すと追加ダイアログが表示される。<br>
ダイアログ上で追加したいアイテムを選択すると、各表に選択したアイテムが追加される。<br>
追加に消費した財産点はキャラクター詳細設定画面の財産点表に反映される。


<br>

![item](https://user-images.githubusercontent.com/19168787/103451476-cd55e380-4d07-11eb-9a5e-453866cedcdd.gif)

<br>

### 【ロイス設定】
ロイスを7人まで設定できる。<br>
ロイスごとに好意と悪意をプルダウンメニューから任意の感情を選択する。

<br>

![rois](https://user-images.githubusercontent.com/19168787/103451480-d47cf180-4d07-11eb-91b4-8c8302eda502.gif)

<br>

### 【コンボ作成】
左上のプラスボタンを押して表示されるコンボ作成ダイアログから、取得しているエフェクトからコンボを作成する。<br>
コンボ作成ダイアログでは、選択できるエフェクト以外の行が非活性化される。<br>
これにより、組み合わせ可能なコンボを都度確認しながらコンボの作成を行うことができる。

<br>

![combo](https://user-images.githubusercontent.com/19168787/103451483-db0b6900-4d07-11eb-92c2-5b06a0029723.gif)

<br>

### 【キャラクター保存＆読込機能】
作成したキャラクターはサイドメニューの「JSON出力」ボタンを押下することでPC上に保存することができる。<br>
右上の雲ボタンを押下して表示されるファイル選択ダイアログで、保存したJSONファイルを選択することで、<br>
作成したキャラクター情報を読み込むことができる。

<br>

![save](https://user-images.githubusercontent.com/19168787/103451485-e2327700-4d07-11eb-8721-959b81cea295.gif)

<br>

![load](https://user-images.githubusercontent.com/19168787/103451489-e78fc180-4d07-11eb-9f1f-bd4e145f3405.gif)

<br>

# 環境構築
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