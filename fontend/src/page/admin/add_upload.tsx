import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form' //import useForm hook
import { IProduct } from '../../model/interface';
import axios from 'axios';
interface IProps {
    onAdd: (product: IProduct) => void
}
interface IFormInput {
    _id: string,
    name: string,
    price: number,
    image: string,
    description: string,
    categoryId: string
}

const AddProducts = (props: IProps) => {
    const { register, handleSubmit } = useForm<IFormInput>()

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
            // url.push(respone.data.secure_url)
            console.log(respone.data.secure_url); 
        }
    }
   

    const onHandleSubmit: SubmitHandler<IFormInput> = (data: IProduct) => {
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
        props.onAdd(data);
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
              <label htmlFor="">Product Name</label>
                <input type="text" {...register("name")} />
                <label htmlFor="">Price</label>
                <input type="number" {...register("price")} />
                <label htmlFor="">Image</label>
                <input type="file" multiple id="product-image" {...register("image")} />
                <button type="submit">Add New Product</button>
            </form>
        </div>
    )
}

export default AddProducts