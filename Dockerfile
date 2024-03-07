# Menggunakan image Node.js terbaru dari Docker Hub sebagai base image
FROM node:16

# Menentukan direktori kerja di dalam kontainer
WORKDIR /usr/src/app

# Menyalin package.json dan package-lock.json (jika ada) ke dalam kontainer
COPY package*.json ./

# Menginstall dependensi dari package.json
RUN npm install

# Menyalin seluruh kode aplikasi ke dalam kontainer
COPY . .

# Mengexpos port yang akan digunakan oleh aplikasi
EXPOSE 3000

# Menjalankan perintah untuk mem-build aplikasi (jika diperlukan)
RUN npm i -g sequelize-cli
