/* History Point Model. */
/**
 * @typedef HistoryPoint
 * @property {number} transaction_id - ID transaksi
 * @property {string} transaction_date - Tanggal transaksi (format: YYYY-MM-DD)
 * @property {string} type - Jenis transaksi (misalnya: "reedemed", "earned")
 * @property {number} poin - Jumlah poin yang terkait dengan transaksi
 */

/**
 * Mendapatkan daftar riwayat poin.
 * @route GET /api/history-point
 * @group History Point - Operasi terkait Riwayat Poin
 * @returns {Array.<HistoryPoint>} 200 - Daftar riwayat poin berhasil diperoleh
 * @returns {Error} 500 - {"message": "Internal Server Error"}
 * @returns {Error} default - Kesalahan yang tidak terduga
 * @security [{"JWT":[]}]
 */
