import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form' //import useForm hook
import { ICategory, IProduct } from '../../model/interface';
import axios from 'axios';
interface IProps {
    onAdd: (product: IProduct) => void
    categories: ICategory[]
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

    const uploadFile = async (files:FileList,callback:(urls:string[])=>void) => {
      const CLOUD_NAME = "dajtruy2v"
      const PRESET_NAME = "uploadFile"
      const FOLDER_NAME = "test"
      const urls:string[] = []
      const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    
      for (const file of files) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
    
        reader.onload = async () => {
          const formData = new FormData();
          formData.append("upload_preset", PRESET_NAME);
          formData.append("folder", FOLDER_NAME);
          formData.append("file", reader.result as string);
    
          const response = await axios.post(api, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          urls.push(response.data.secure_url)
          if(urls.length === files.length){
            callback(urls)
          }
        };
      }
    }
    
    const onHandleSubmit: SubmitHandler<IFormInput> = async (data: IProduct) => {
      const productImage = document.querySelector("#product-image") as HTMLFormElement;
      const form = document.querySelector("#form-data") as HTMLFormElement;
    
      if (form) {
        form.addEventListener("submit", function(e) {
          e.preventDefault();
          uploadFile(productImage.files,(urls)=>{
            const newData = {
              ...data,
              image: urls.join(",") as any,
            }
            console.log(newData.image);
    
            axios.post('http://localhost:8080/api/products',newData)
            .then((res)=>{
              props.onAdd(newData)
              console.log(res.data);
            })
            .catch((error)=>{
              console.error(error);
            })
          })
        })
      } else {
        console.error("Form đang không được thực hiện");
      }
    }
    

    return (
        <div>
            <form id='form-data' action="" onSubmit={handleSubmit(onHandleSubmit)}>
              <label htmlFor="">Product Name</label>
                <input type="text" {...register("name")} />
                <label htmlFor="">Price</label>
                <input type="number" {...register("price")} />
                <label htmlFor="">Category</label>
                <select id="" {...register("categoryId")}>
                    <option value="">Chọn</option>
                  {props.categories.map((cate)=>{
                      return(
                        <option value={cate._id}>{cate.name}</option>
                      )
                  })}
                </select>
                <label htmlFor="">Image</label>
                <input type="file" multiple id="product-image" {...register("image")} />
                <button type="submit">Add New Product</button>
            </form>
        </div>
    )
}

export default AddProducts