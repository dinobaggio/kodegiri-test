## **Flow**

Disini saya akan menjelaskan alur terkai aplikasi yang telah saya buat

### **Pertama-tama login dengan akun ini**
```bash
email: john@example.com
password: Password123@
```

## **Untuk melihat loaylty program yang tersedia bisa akses**

Akases endpoint `GET /api/loyalty-program` maka akan tampil list loyalty yang telah di seeder saat migration awal

## **Untuk mendapatkan poin pertama dari transaksi pertama**

- Akses endpoint `POST /api/transactions`
- Masukan request body
```json
{
    "member_no": 1,
    "items": "[{ 'item_name': 'item 1', 'item_price': 1000, 'item_qty': 1, 'item_subtotal': 50000 }]",
    "total_amount": 50000
}
```

Maka ketika akses dengan request body diatas akan mendpatkan dua loyalty program `First Purchase Get 10 Point`  dan `First Purchase Get Discount 20%`

## **Untuk mendapatkan earned point dan redeemed point secara input**

Bisa akses melalui endpoint `POST /api/point/{type}` value type berupa `earned` atau `redeemed` dengan request body sebagai berikut:
```json
{
    "member_no": 1,
    "value": 100
}
```