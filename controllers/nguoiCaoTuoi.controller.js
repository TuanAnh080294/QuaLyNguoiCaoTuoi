var db = require('../db');
var dataIndex = db.get('Sheet1').value().sort(function (a, b) {
    return a.Stt - b.Stt;
}).slice(0, 10)
var data = db.get('Sheet1').value();

module.exports.index = function (req, res) {
    res.render('index', {
        users: dataIndex,
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