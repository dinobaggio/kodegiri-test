## **How to run dev**

Langkah-langkah untuk menjalankan environtment dev

Install secara global sequelize-cli
```bash
npm i -g sequelize-cli
```

Kemudian install dependecies
```bash
npm install
```

Rubah sesuai kebutuhan `.env` akan tetapi untuk menjalankan dengan docker atau run production tidak perlu dirubah
```env
DB_DIALECT=mysql
DB_HOST=mysql
DB_PORT=33006
DB_USERNAME=root
DB_PASSWORD=
DB_NAME=kodegiri_test
```

Lalu migrate database
```bash
sequelize db:migrate
```

Kemudian jalankan aplikasi environment dev
```bash
npm run dev
```

Maka aplikasi berjalan di port `:3000`
```bash
> kodegiri-test@1.0.0 dev
> nodemon

[nodemon] 2.0.12
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src/**/* public/**/* views/**/*
[nodemon] watching extensions: js,json,hbs,html
[nodemon] starting `prettier --write src/ | babel-node ./src/bin/server.js`
Listening on port 3000
```

## **How to run production**

Menggunakan `.env` dengan default value
```bash
DB_DIALECT=mysql
DB_HOST=mysql
DB_PORT=33006
DB_USERNAME=root
DB_PASSWORD=
DB_NAME=kodegiri_test
```

Kemudian jalankan perintah
```bash
docker-compose up -d --build
```

Maka aplikasi akan berjalan di port `:3000`
```bashs
> kodegiri-test@1.0.0 serve
> node ./dist/bin/server.js

Listening on port 3000
```

## **Dokumentasi Swagger**

- Jalankan aplikasi
- Akses [apidocs](`http://localhost:3000/api-docs`)

## **Penjelasan alur aplikasi disini**

Klik [disini](https://github.com/dinobaggio/kodegiri-test/blob/main/src/docs/flow.js)

## **Credentials**

```bash
email: john@example.com
password: Password123@
```

