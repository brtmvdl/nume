#!/bin/sh

npm ci

ionic build --prod --project=nume

cordova telemetry off

cordova platform add android

cordova build android --release --buildConfig

mkdir -p /builds

cp /app/platforms/android/app/build/outputs/bundle/release/app-release.aab /builds
