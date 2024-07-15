const express = require('express');
const router = express.Router();


// Data  yang akan kita tampilkan
const anggota = [
{ IDnggota: 211, nama: 'anis', noHP: 123456 },
{ IDanggota: 212, nama: 'vivi', noHP: 1223456 },
];
// Rute GET untuk mendapatkan daftar 
router.get('/', function(req, res, next) {
res.json(anggota);
});

router.post('/', function(req, res, next){
    const newAnggota = {
        idAnggota: anggota.length + 1,
        nama: req.body.nama,
        noHP: req.body.noHP
    };
    res.json(newAnggota);
});

module.exports = router;