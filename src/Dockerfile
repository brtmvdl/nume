FROM tmvdl/android:cordova

WORKDIR /dist

COPY ./cp.sh .

WORKDIR /app

RUN cordova create nume com.brtmvdl.nume Nume

WORKDIR /app/nume

RUN cordova platform add android

RUN cordova build android
