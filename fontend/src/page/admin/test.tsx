import axios from "axios";
import React, { useEffect } from "react";



const Upload = () =>{
    useEffect(() => {
        const productImage = document.querySelector("#product-image") as HTMLFormElement;
        const form = document.querySelector("#form-data") as HTMLFormElement;
        
        if (form) {
            form.addEventListener("submit", function(e) {
              e.preventDefault();
              uploadFile(productImage.files)
            })
          } else {
            console.error("Could not find form element");
          }
    },[])

    const uploadFile = async (files:string) => {
        const CLOUD_NAME = "dajtruy2v"
        const PRESET_NAME = "uploadFile"
        const FOLDER_NAME = "test"
        const url = []
        const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
        const formData = new FormData()
        formData.append("upload_preset",PRESET_NAME)
        formData.append("folder",FOLDER_NAME)

        for(const file of files){
            formData.append("file",file)
         const respone = await axios.post(api,formData,{
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            url.push(respone.data.secure_url)
            console.log(url);
            
        }
    }

    return(
        <div>
            <form action="" id="form-data">
                <label htmlFor="">Upload</label>
                <input type="file" multiple name="product-image" id="product-image" />
                <button>Submit</button>
            </form>
        </div>
    )
} 

export default Upload