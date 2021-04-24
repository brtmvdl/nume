
# To build

## From .aab to .apk

Get `bundletool` in [github.com/google/bundletool](https://github.com/google/bundletool/releases)

Set alias

```bash
alias bundletool="java -jar .../bundletool-all-1.5.0.jar"
```

Run the command

```bash
bundletool build-apks --bundle=./builds/my_app.aab --output=./builds/my_app.apks
```

