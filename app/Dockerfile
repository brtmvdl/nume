FROM tmvdl/android:ionic

# RUN keytool -genkey -alias alias -keyalg RSA -keysize 2048 -keystore release.keystore -storepass password -storetype jks -validity 7

RUN apt update && apt install -y gradle

RUN npm i -g cordova phonegap

WORKDIR /app

COPY . .

CMD sh ./build.sh
