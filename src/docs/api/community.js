/**
 * Mendapatkan community.
 * @route GET /api/community
 * @group Community - Operasi terkait
 * @returns 200 - Daftar berhasil diperoleh
 * @returns {Error} 500 - {"message": "Internal Server Error"}
 * @returns {Error} default - Kesalahan yang tidak terduga
 * @security [{"JWT":[]}]
 */
