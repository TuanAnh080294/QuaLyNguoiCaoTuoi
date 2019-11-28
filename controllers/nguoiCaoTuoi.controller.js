var db = require('../db');
const shortid = require('shortid');
var data = db.get('Sheet1').value();


var getDate = function () {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    var NgayKham = month + "/" + date + "/" + year;
    return NgayKham;
}

module.exports.index = function (req, res) {
    var NgayKham = getDate();
    var arrData = [];
    var arrIndex = []
    var dataIndex = db.get('Sheet1')
        .filter({
            NgayKham: NgayKham
        })
        .value();

    for (var i = 0; i < db.get('Sheet1').size().value(); i++) {
        arrData.push(data[i]);
    }

    lengthIndex = db.get('Sheet1')
        .filter({
            NgayKham: NgayKham
        })
        .size()
        .value();

    for (var i = 0; i < lengthIndex; i++) {
        arrIndex.push(dataIndex[i]);
    }

    arrIndex.sort(function (a, b) {
        return a._id - b._id;
    });

    console.log(arrIndex);

    // arrIndex = arrData.sort(function (a, b) {
    //     return b.Stt - a.Stt;
    // }).slice(0, 10);



    res.render('index', {
        users: arrIndex,
        data: data
    })
}

module.exports.add = function (req, res) {
    var id = shortid.generate();
    var NgayKham = getDate();
    var length = db.get('Sheet1').size().value();
    var Stt = length + 1;
    var HoTen = req.body.txtTen;
    var NamSinh = req.body.txtNamSinh;
    var DiaChi = req.body.txtDiaChi;
    var Xa = req.body.txtXa;

    db.get('Sheet1')
        .push({
            _id: id,
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

module.exports.search = function () {
    var HoTen = HTML.getElementsById()
}

// module.exports.deleteStt = function (req, res) {
//     // var i = 0;
//     db.unset('Sheet1.Stt')
//         .write()
// }