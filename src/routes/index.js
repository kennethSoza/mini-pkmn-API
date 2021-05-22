const { Router } = require('express');
const router = Router();

const { welcome, getPkmn, getTypes } = require('../controllers/controllers.js')

router.get('/', welcome);
router.get('/mons', getPkmn);
router.get('/elemental-types', getTypes);

module.exports = router;