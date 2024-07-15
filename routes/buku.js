const express = require('express');

const router = express.Router();



// Data  yang akan kita tampilkan
const buku = [
    {IDbuku: 1111, judul: 'Dear Nathan', penerbit: 'Best Media', isbn: '978-602-6940-14-8', tahunterbit: '2016'},
    {IDbuku: 1222, judul: 'Hello Cello', penerbit: 'Kawah Media', isbn: '9786022204381', tahunterbit: '2023'}
];

// Rute GET untuk mendapatkan daftar 
router.get('/', function(req, res, next) {
    res.json(buku);
    });

    router.post('/', function(req, res, next){
        const newBuku = {
            IDbuku: buku.length + 5,
            judul: req.body.judul,
            penerbit: req.body.penerbit,
            isbn: req.body.isbn,
            tahunTerbit: req.body.tahunTerbit
        };
        res.json(newBuku);
    });
    module.exports = router;

