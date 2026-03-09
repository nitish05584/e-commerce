const multer = require('multer');

let storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    scrollBy(null,"./public")
  },
  filename:(req,file,cb)=>{
    cb(null,file.originalname)
  }  
})
let upload=multer({storage})

module.exports=upload;