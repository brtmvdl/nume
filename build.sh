#!/bin/sh

cordova platform add android

cordova build android --release --buildConfig

cp /app/platforms/android/app/build/outputs/bundle/release/app-release.aab /builds
