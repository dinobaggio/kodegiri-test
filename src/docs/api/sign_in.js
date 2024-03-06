/* Sign In Model. */
/**
 * @typedef SignIn
 * @property {string} email.required - admin - Email user
 * @property {string} password.required - password123 - Password user
 * @property {boolean} remember_me - remember ME
 *
 */

/**
 * This function comment is parsed by doctrine
 * @route POST /api/auth/sign-in
 * @group Auth - Operations about Auth
 * @param {SignIn.model} data.body SignIn - Some Name description
 * @returns {object} 200 - {"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gR"}
 * @returns {Error}  422 - {"message": "Unprocessable Entity","errors": {"email": ["Email must be in email format"]}}
 * @returns {Error}  400 - {"message": "Email/password tidak ditemukan"}
 * @returns {Error}  500 - {"message": "Internal Server Error"}
 * @returns {Error}  default - Unexpected error
 */
