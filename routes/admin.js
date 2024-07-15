var express = require('express');
var router = express.Router();

// Data  yang akan kita tampilkan
const admin = [
{ idAdmin: 123, nama: 'Salsa', alamat:'jln.ki ageng pemanahan' },
{ idAdmin: 122, nama: 'bayu', alamat:'jln.ki ageng pemanahan' },
];
// Rute GET untuk mendapatkan daftar 
router.get('/', function(req, res, next) {
res.json(admin);
});

router.post('/', function(req, res, next){
    const newAdmin = {
        idAdmin: admin.length + 1,
        nama: req.body.nama,
        alamat: req.body.alamat
    };
    res.json(newAdmin);
});




module.exports = router;