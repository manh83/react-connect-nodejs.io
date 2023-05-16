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
        <div className='d-flex justify-content-center'>

            <form className="form-group" style={{width:"40%",padding:"20px 30px 10px 30px",background: "#001529",borderRadius:"3%"}} id='form-data' onSubmit={handleSubmit(onHandleSubmit)}>
                  
                  <div className="form-group">
                    <label className='text-white' htmlFor="">Product Name</label>
                    <input className="form-control" type="text" placeholder="" {...register("name")} />
                  </div>

                <div className="form-group">
                    <label className='text-white'>Price</label>
                    <input className="form-control" type="number" placeholder="" {...register("price")} />
                </div>
               
                <div className="form-group">
                    <label className='text-white'>Category</label>
                    <select className="form-control" {...register("categoryId")}>
                        <option selected value="">Chọn</option>
                        {props.categories.map((category)=>{
                          return(
                            <option value={category._id}>{category.name}</option>
                          )
                        })}
                    </select>
                </div>

                <div className="form-group">
                    <label  className="form-label text-white">Upload Image</label>
                    <input className="form-control" type="file" id="product-image" multiple {...register("image")}/>
                </div>

                <div className="form-group">
                  <label className='text-white'>Description</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" {...register("description")} rows={3}></textarea>
              </div>

              <div className="form-group" style={{marginTop:"30px"}}>
                  <button type="submit" className="btn text-white" style={{background: "#0e3a63"}}>Add New Products</button>
              </div>
            </form>
        </div>
    )
}

export default AddProducts