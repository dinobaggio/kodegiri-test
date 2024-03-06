/* Program Loyalty Model. */
/**
 * @typedef LoyaltyProgram
 * @property {number} id - ID program loyalty
 * @property {string} loyalty_name - Nama program loyalty
 * @property {string} tier_name - Nama tier terkait dengan program loyalty
 * @property {number} tier_id - ID tier terkait dengan program loyalty
 * @property {string} policy_name - Nama kebijakan program loyalty
 * @property {string} benefit_name - Nama manfaat program loyalty
 * @property {string} type - Jenis manfaat program loyalty ("fixed point", "percentage", dll)
 * @property {number} value - Nilai manfaat program loyalty
 */

/**
 * Mendapatkan daftar program loyalty.
 * @route GET /api/loyalty-program
 * @group Loyalty Program - Operasi terkait Program Loyalty
 * @returns {Array.<LoyaltyProgram>} 200 - Daftar program loyalty berhasil diperoleh
 * @returns {Error} 500 - {"message": "Internal Server Error"}
 * @returns {Error} default - Kesalahan yang tidak terduga
 * @security [{"JWT":[]}]
 */
