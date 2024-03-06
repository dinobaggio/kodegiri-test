/* Tier Model. */
/**
 * @typedef Tier
 * @property {string} tier_name - Nama tier
 * @property {number} min_poin - Jumlah poin minimum untuk tier ini
 * @property {number} max_poin - Jumlah poin maksimum untuk tier ini
 */

/**
 * Mendapatkan daftar tier.
 * @route GET /api/tier
 * @group Tier - Operasi terkait Tier
 * @returns {Array.<Tier>} 200 - Daftar tier berhasil diperoleh
 * @returns {Error} 500 - {"message": "Internal Server Error"}
 * @returns {Error} default - Kesalahan yang tidak terduga
 * @security [{"JWT":[]}]
 */

/* Tier Request Model. */
/**
 * @typedef TierRequest
 * @property {string} tier_name.required - Nama tier
 * @property {number} min_poin.required - Jumlah poin minimum untuk tier ini
 * @property {number} max_poin.required - Jumlah poin maksimum untuk tier ini
 */

/* Tier Response Model. */
/**
 * @typedef TierResponse
 * @property {number} id - ID tier
 * @property {string} tier_name - Nama tier
 * @property {number} min_poin - Jumlah poin minimum untuk tier ini
 * @property {number} max_poin - Jumlah poin maksimum untuk tier ini
 * @property {string} created_at - Tanggal dibuat tier (format: YYYY-MM-DD)
 * @property {string} updated_at - Tanggal diperbarui tier (format: YYYY-MM-DD)
 */

/**
 * Menambahkan tier baru.
 * @route POST /api/tier
 * @group Tier - Operasi terkait Tier
 * @param {TierRequest.model} data.body.required - Data tier yang ingin ditambahkan
 * @returns {TierResponse.model} 200 - Tier berhasil ditambahkan
 * @returns {Error} 400 - {"message": "Permintaan tidak valid"}
 * @returns {Error} 500 - {"message": "Internal Server Error"}
 * @returns {Error} default - Kesalahan yang tidak terduga
 * @security [{"JWT":[]}]
 */

/**
 * Mengupdate tier berdasarkan ID.
 * @route PUT /api/tier/{id}
 * @group Tier - Operasi terkait Tier
 * @param {number} id.path.required - ID tier yang ingin diperbarui
 * @param {TierRequest.model} data.body.required - Data tier yang ingin diperbarui
 * @returns {TierResponse.model} 200 - Tier berhasil diperbarui
 * @returns {Error} 400 - {"message": "Permintaan tidak valid"}
 * @returns {Error} 404 - {"message": "Tier tidak ditemukan"}
 * @returns {Error} 500 - {"message": "Internal Server Error"}
 * @returns {Error} default - Kesalahan yang tidak terduga
 * @security [{"JWT":[]}]
 */

/**
 * Menghapus tier berdasarkan ID.
 * @route DELETE /api/tier/{id}
 * @group Tier - Operasi terkait Tier
 * @param {number} id.path.required - ID tier yang ingin dihapus
 * @returns {object} 204 - Tier berhasil dihapus
 * @returns {Error} 404 - {"message": "Tier tidak ditemukan"}
 * @returns {Error} 500 - {"message": "Internal Server Error"}
 * @returns {Error} default - Kesalahan yang tidak terduga
 * @security [{"JWT":[]}]
 */
