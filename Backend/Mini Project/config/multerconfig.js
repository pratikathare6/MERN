
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');

//disk storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/uploads')
  },
  filename: function (req, file, cb) {

    crypto.randomBytes(12,function(err,name){

        let fn = name.toString('hex') + path.extname(file.originalname)

        cb(null, fn)
    })

  }
})



const upload = multer({ storage: storage })


//upload storage

module.exports = upload;