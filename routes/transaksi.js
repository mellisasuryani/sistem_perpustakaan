const express = require('express');
const router = express.Router();


// Data  yang akan kita tampilkan
const transaksi = [
    {IDtransaksi:4123, tanggalPengembalian : 12, IDanggota :123 , IDbuku : 1111 , IDpengembalian: 3123  },
    {IDtransaksi:4122, tanggalPengembalian : 21, IDanggota :212, IDbuku : 1222 , IDpengembalian:3122  },
];

// Rute GET untuk mendapatkan daftar 
router.get('/', function(req, res, next) {
    res.json(transaksi);
    });

    router.post('/', function(req, res, next){
        const newTransaksi = {
            IDtransaksi: transaksi.length + 5,
            tanggalPengembalian: req.body.tanggalPengembalian,
            IDanggota: req.body.idAnggota,
            IDbuku: req.body.IDbuku,
            IDpengembalian: req.body.IDpengembalian
        };
        res.json(newTransaksi);
    });
    module.exports = router;