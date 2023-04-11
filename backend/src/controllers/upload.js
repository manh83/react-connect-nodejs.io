import multer from "multer"

const multerConfig = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null,'public/')
    },
    filename: (req,file,callback) => {
        const ext = file.mimetype.split("/")[1];
        callback(null,`image-${Date.now()}.${ext}`)
    }
})

const isImage = (req,file,callback) => {
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(new Error("Only Image is Allowed..."))
    }
}

const fileUpload = multer({
    storage: multerConfig,
    fileFilter:isImage
})

export const uploadFile = fileUpload.single('image')

export const upload = (req,res) => {
    console.log(req.file);
    res.status(200).json({
        message: "Success"
    })
} 