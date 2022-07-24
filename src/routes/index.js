const router = require('express').Router()
const kategoriControllers = require('../controllers/kategoriControllers')
const bookControllers = require('../controllers/bookControllers');


// router.get('/', bookControllers.getKategori);
router.get('/', bookControllers.findAll );
router.post('/add', bookControllers.create);
router.get('/update/:id', bookControllers.edit);
router.post('/update/:id', bookControllers.update);
router.get('/delete/:id', bookControllers.destoy);

router.get('/kategori', kategoriControllers.getAll);
router.post('/kategori/create', kategoriControllers.post);
router.get('/kategori/update/:id', kategoriControllers.edit);
router.post('/kategori/update/:id', kategoriControllers.update);
router.get('/kategori/delete/:id', kategoriControllers.destroy);



module.exports = router