## Detail
Backend: app.py

## Cara menjalankan di Local Device
1. Buat virtual environment python di directory ini
2. Install semua dependensi python yang diperlukan
3. Buka 3 terminal berbeda

### Di terminal pertama (Menjadikan local directory menjadi server public
1. <nama virtual environment>\Scripts\activate
2. npm install -g http-server
3. http-server ./

### Di terminal kedua (menjalankan back-end)
1. <nama virtual environment>\Scripts\activate
2. set FLASK_APP=app.py 
3. flask run 
 
### Di terminal ketiga (menjalankan front-end)
1. <nama virtual environment>\Scripts\activate
2. npm start

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat website.
