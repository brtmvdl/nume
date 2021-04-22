FROM tmvdl/android:ionic

# RUN keytool -genkey -alias alias -keyalg RSA -keysize 2048 -keystore release.keystore -storepass password -storetype jks -validity 30

RUN apt update && apt install -y gradle

RUN npm i -g cordova phonegap

WORKDIR /builds

WORKDIR /app

COPY . .

RUN npm ci

RUN ionic build --prod --project=nume

RUN cordova telemetry off

CMD sh ./build.sh
