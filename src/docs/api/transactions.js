/* Transaction Model. */
/**
 * @typedef Transaction
 * @property {string} transaction_date - Tanggal transaksi (format: YYYY-MM-DD)
 * @property {number} member_no - Nomor anggota
 * @property {string} name - Nama anggota
 * @property {string} phone_no - Nomor telepon anggota
 * @property {string} email - Email anggota
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
 *     "items": "string",
 *     "total_amount": "number"
 * }
 * @returns {Error} 400 - {"message": "Permintaan tidak valid"}
 * @returns {Error} 500 - {"message": "Internal Server Error"}
 * @returns {Error} default - Kesalahan yang tidak terduga
 * @security [{"apiKey": []}]
 */
