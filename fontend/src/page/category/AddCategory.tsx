import React, { useEffect, useState } from "react";
import { ICategory } from "../../model/interface";
import { useForm,SubmitHandler } from "react-hook-form";
import { log } from "console";

interface IProps {
    onAddCategory: (category: ICategory) => void;
}
interface IFormInput{
  _id: string;
  name: string;
}  


const AddCategory = (props: IProps) => {
  const {register,handleSubmit} = useForm<IFormInput>()
  const onHandleSubmit:SubmitHandler<IFormInput> =  (data:ICategory) =>{
      props.onAddCategory(data)
      console.log(data);
  } 
  
  return (
    <div className='d-flex justify-content-center '>
        <form className="form-group" style={{width:"40%",padding:"20px 30px 10px 30px",background: "#001529",borderRadius:"3%",marginTop:"55px"}} id='form-data' onSubmit={handleSubmit(onHandleSubmit)}>
              <div className="form-group">
                <label className='text-white' htmlFor="">Category Name</label>
                <input className="form-control" type="text" placeholder="" {...register("name")} />
              </div>

          <div className="form-group" style={{marginTop:"30px"}}>
              <button type="submit" className="btn text-white" style={{background: "#0e3a63"}}>Add New Category</button>
          </div>
        </form>
    </div>
  );
};

export default AddCategory;
