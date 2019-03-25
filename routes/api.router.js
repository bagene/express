const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));
router.use('/user', require('./user.router'));

module.exports = router;