'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
response.ok("APlikasi Rest APi ini berjalan.",res);
};

//menampilkan data dr database
exports.tampilsemuamahasiswa = function (req,res) {
connection.query('select * from mahasiswa', function(error, row, fields){
    if(error){
        console.log(error);
    } else{
        response.ok(row, res)
    }
}); 
};

//menampilkan semua data mahasiswa berdasarkan id
exports.tampilberdasarkanid = function(req,res){
let id = req.params.id;
connection.query('select * from mahasiswa where id_mahasiswa = ?', [id], 
function(error, rows, fields){
    if(error){
        console.log(error);
    }else {
        response.ok(rows, res);
    }
});
};