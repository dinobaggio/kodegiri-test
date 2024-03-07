/* Point Transaction Request Model. */
/**
 * @typedef PointTransactionRequest
 * @property {number} member_no.required - Nomor anggota
 * @property {number} value.required - Nilai transaksi poin
 */

/* Point Transaction Response Model. */
/**
 * @typedef PointTransactionResponse
 * @property {number} id - ID transaksi poin
 * @property {number} member_no - Nomor anggota
 * @property {string} name - Nama anggota
 * @property {string} email - Email anggota
 * @property {string} phone_no - Nomor telepon anggota
 * @property {string} birth_date - Tanggal lahir anggota (format: YYYY-MM-DD)
 * @property {string} address - Alamat anggota
 * @property {string} join_date - Tanggal bergabung anggota (format: YYYY-MM-DD)
 * @property {string} referral - Kode referal anggota
 * @property {number} earned_point - Jumlah poin yang diperoleh anggota
 * @property {number} redeemed_point - Jumlah poin yang ditebus anggota
 * @property {number} remained_point - Jumlah poin tersisa anggota
 * @property {string} status - Status keanggotaan ("active", "inactive", dll)
 * @property {string} created_at - Tanggal dibuat transaksi (format: YYYY-MM-DDTHH:MM:SS.ZZZZ)
 * @property {string} updated_at - Tanggal diperbarui transaksi (format: YYYY-MM-DDTHH:MM:SS.ZZZZ)
 */

/**
 * Melakukan transaksi poin.
 * @route POST /api/point/{type}
 * @group Point Transaction - Operasi terkait Transaksi Poin
 * @param {string} type.path.required - Jenis transaksi poin ("earned" untuk poin yang diperoleh, "redeemed" untuk poin yang ditebus)
 * @param {PointTransactionRequest.model} data.body.required - Data transaksi poin yang ingin dilakukan
 * @returns {PointTransactionResponse.model} 200 - Transaksi poin berhasil
 * @returns {Error} 400 - {"message": "Permintaan tidak valid"}
 * @returns {Error} 500 - {"message": "Internal Server Error"}
 * @returns {Error} default - Kesalahan yang tidak terduga
 * @security [{"JWT":[]}]
 */

/* History Point Report Response Model. */
/**
 * @typedef HistoryPointReportResponse
 * @property {number} id - ID riwayat transaksi poin
 * @property {string} transaction_id - ID transaksi
 * @property {number} member_no - Nomor anggota
 * @property {string} transaction_date - Tanggal transaksi (format: YYYY-MM-DD)
 * @property {string} type - Jenis transaksi poin
 * @property {string} loyalty_name - Nama program loyalty
 * @property {number} loyalty_id - ID program loyalty
 * @property {number} existing_poin - Jumlah poin yang sudah ada sebelum transaksi
 * @property {number} earned_poin - Jumlah poin yang diperoleh dalam transaksi
 * @property {number} balance_poin - Jumlah poin tersisa setelah transaksi
 * @property {string} created_at - Tanggal dibuat riwayat transaksi (format: YYYY-MM-DD)
 * @property {string} updated_at - Tanggal diperbarui riwayat transaksi (format: YYYY-MM-DD)
 */

/**
 * Mendapatkan laporan riwayat transaksi poin.
 * @route GET /api/history-point/report/{type}
 * @group History Point - Operasi terkait Riwayat Transaksi Poin
 * @param {string} type.path - Jenis transaksi poin ("earned" untuk poin yang diperoleh, "redeemed" untuk poin yang ditebus)
 * @param {string} member_no.query - Nomor anggota
 * @param {string} start_date.query - Tanggal awal periode (format: YYYY-MM-DD)
 * @param {string} end_date.query - Tanggal akhir periode (format: YYYY-MM-DD)
 * @param {string} loyalty_name.query - Nama program loyalty
 * @param {string} name.query - Nama anggota
 * @returns {Array.<HistoryPointReportResponse>} 200 - Laporan riwayat transaksi poin berhasil diperoleh
 * @returns {Error} 400 - {"message": "Permintaan tidak valid"}
 * @returns {Error} 500 - {"message": "Internal Server Error"}
 * @returns {Error} default - Kesalahan yang tidak terduga
 * @security [{"JWT":[]}]
 */
