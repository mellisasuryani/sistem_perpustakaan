const express = require('express');
const router = express.Router();

// Data  yang akan kita tampilkan
const pengembalian = [
    {IDpengembalian: 3123, tanggalPengembalian : 12, denda:0 , total: 0 },
    {IDpengembalian: 3122, tanggalPengembalian : 21, denda:0 , total: 0 }
];

// Rute GET untuk mendapatkan daftar 
router.get('/', function(req, res, next) {
    res.json(pengembalian);
    });

    router.post('/', function(req, res, next){
        const newPengembalian = {
            IDpengembalian: pengembalian.length + 1,
            tanggalPengembalian: req.body.tanggalPengembalian,
            denda: req.body.denda,
            total: req.body.total
        };
        res.json(newPengembalian);
    });

    module.exports = router;