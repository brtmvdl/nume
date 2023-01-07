for i in $( find -name "*.apk" -exec echo {} + ); do cp $i /dist ; done;
