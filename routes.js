'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);


//untuk menampilkan data dari controller
app.route('/tampil')
    .get(jsonku.tampilsemuamahasiswa);
app.route('/tampil/:id')
    .get(jsonku.tampilberdasarkanid)
}