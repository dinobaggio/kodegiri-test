/* List Membership Model. */
/**
 * @typedef Membership
 * @property {number} id - ID anggota
 * @property {number} member_no - Nomor anggota
 * @property {string} name - Nama anggota
 * @property {string} email - Email anggota
 * @property {string} phone_no - Nomor telepon anggota
 * @property {string} join_date - Tanggal bergabung anggota (format: YYYY-MM-DD)
 * @property {number} remained_point - Jumlah poin tersisa anggota
 * @property {string} status - Status keanggotaan ("Active", "Inactive", dll)
 */

/**
 * Mendapatkan daftar anggota.
 * @route GET /api/membership
 * @group Membership - Operasi terkait Keanggotaan
 * @returns {Array.<Membership>} 200 - Daftar anggota berhasil diperoleh
 * @returns {Error} 500 - {"message": "Internal Server Error"}
 * @returns {Error} default - Kesalahan yang tidak terduga
 * @security [{"apiKey": []}]
 */

/* Detail Membership Model. */
/**
 * @typedef MembershipDetail
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
 * @property {string} status - Status keanggotaan ("Active", "Inactive", dll)
 * @property {Array.<HistoryPoint>} history_poin - Riwayat poin anggota
 */

/**
 * Mendapatkan detail anggota berdasarkan ID.
 * @route GET /api/membership/{id}/detail
 * @group Membership - Operasi terkait Keanggotaan
 * @param {number} id.path.required - ID anggota yang ingin dilihat detailnya
 * @returns {MembershipDetail.model} 200 - Detail anggota berhasil diperoleh
 * @returns {Error} 404 - {"message": "Anggota tidak ditemukan"}
 * @returns {Error} 500 - {"message": "Internal Server Error"}
 * @returns {Error} default - Kesalahan yang tidak terduga
 * @security [{"apiKey": []}]
 */

/* History Point Model. */
/**
 * @typedef HistoryPoint
 * @property {number} transaction_id - ID transaksi
 * @property {string} transaction_date - Tanggal transaksi (format: YYYY-MM-DD)
 * @property {string} type - Jenis transaksi (misalnya: "Pembelian", "Penukaran", "Hadiah", dll)
 * @property {number} poin - Jumlah poin yang terkait dengan transaksi
 */
