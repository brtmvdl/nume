FROM tmvdl/android:ionic

WORKDIR /app

COPY . .

RUN npm ci --force

ENV NG_APP=nume
