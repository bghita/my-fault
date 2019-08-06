const router = require('express').Router();

const authController = require('./../../controllers/authController');

const passportService = require('./../../services/passport');
const authMiddleware = require('./../../middlewares/authMiddlewares');

// /api/signup
router.route('/signup')
  .post(authController.signUp);

// /api/signin
router.route('/signin')
  .post(authMiddleware.requireSignIn, authController.signIn);

module.exports = router;