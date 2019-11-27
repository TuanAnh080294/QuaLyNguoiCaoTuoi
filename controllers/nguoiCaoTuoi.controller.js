var db = require('../db');
var data = db.get('Sheet1').value();


module.exports.index = function (req, res) {
    var arrData = [];

    for(var i=0; i<db.get('Sheet1').size().value(); i++) {
        arrData.push(data[i]);
    }
    
    arrIndex = arrData.sort(function(a, b) {
        return b.Stt - a.Stt;
    }).slice(0, 10);

    res.render('index', {
        users: arrIndex,
        data: data
    })
}

module.exports.add = function (req, res) {

    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    var NgayKham = month + "/" + date + "/" + year;

    var length = db.get('Sheet1').size().value();
    var Stt = length + 1;
    var HoTen = req.body.txtTen;
    var NamSinh = req.body.txtNamSinh;
    var DiaChi = req.body.txtDiaChi;
    var Xa = req.body.txtXa;

    db.get('Sheet1')
        .push({
            Stt: Stt,
            HoTen: HoTen,
            NamSinh: NamSinh,
            DiaChi: DiaChi,
            Xa: Xa,
            NgayKham: NgayKham
        })
        .write();
    res.redirect('/');
}

// module.exports.deleteStt = function (req, res) {
//     // var i = 0;
//     db.get('Sheet1')
//         .each(function (item) {
//             // i = i + 1;
//             item.NgayKham.delete();
//         })
//         .write();
// }