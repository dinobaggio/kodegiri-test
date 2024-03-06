/* Transaction Model. */
/**
 * @typedef Transaction
 * @property {number} member_no - Nomor anggota
 * @property {string} items - Item yang dibeli atau transaksi lainnya
 * @property {number} total_amount - Total jumlah yang dibayarkan dalam transaksi
 */

/**
 * Melakukan transaksi baru.
 * @route POST /api/transaction
 * @group Transaction - Operasi terkait Transaksi
 * @param {Transaction.model} data.body Transaction - Data transaksi yang ingin dilakukan
 * @returns {object} 200 - {
 *     "transaction_id": "number",
 *     "transaction_date": "string",
 *     "member_no": "number",
 *     "name": "string",
 *     "phone_no": "string",
 *     "email": "string",
 *     "items": "[{ 'item_name': 'item 1', 'item_price': 1000, 'item_qty': 1, 'item_subtotal': 1000 }]",
 *     "total_amount": "number"
 * }
 * @returns {Error} 400 - {"message": "Permintaan tidak valid"}
 * @returns {Error} 500 - {"message": "Internal Server Error"}
 * @returns {Error} default - Kesalahan yang tidak terduga
 * @security [{"JWT":[]}]
 */
