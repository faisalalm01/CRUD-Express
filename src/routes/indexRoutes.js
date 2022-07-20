const router = require('express').Router();

const bookControllers = require('../controllers/bookControllers');
const kategoriControllers = require('../controllers/kategoriControllers')

router.get('/', bookControllers.findAll );
router.post('/add', bookControllers.create);
router.get('/update/:id', bookControllers.edit);
router.post('/update/:id', bookControllers.update);
router.get('/delete/:id', bookControllers.destoy);

router.get('/kategori', kategoriControllers.getAll);
router.post('/add', kategoriControllers.post);
router.get('/update/:id', bookControllers.edit);
router.post('/update/:id', bookControllers.update);
router.get('/delete/:id', kategoriControllers.delete);

module.exports = router;

