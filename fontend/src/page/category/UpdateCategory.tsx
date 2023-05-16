import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { ICategory } from "../../model/interface";


interface IProps {
  category: ICategory[];
  onUpdate: (category: ICategory) => void;
}
interface IFormInput{
  name: string;
}  

const UpdateCategory = (props: IProps) => {
  const { id } = useParams();
  const [categories, setCategories] = useState<ICategory>();
  const {register,handleSubmit} = useForm<IFormInput>()

  useEffect(() => {
    const currentCategory = props.category.find((category) => category._id === id);
    setCategories(currentCategory);
    // console.log(currentCategory);
  }, [props,id]);

    const onHandleSubmit = handleSubmit((data:IFormInput) => {
      const updatedCategory: ICategory = {
        _id:  id,
        name: data.name,
      };
        props.onUpdate(updatedCategory)
        // console.log(updatedCategory);
    })

  return (
    <div className='d-flex justify-content-center '>
    <form className="form-group" style={{width:"40%",padding:"20px 30px 10px 30px",background: "#001529",borderRadius:"3%",marginTop:"55px"}} id='form-data'  onSubmit={onHandleSubmit}>
          
          <div className="form-group">
            <label className='text-white' htmlFor="">Category Name</label>
            <input className="form-control" type="text" defaultValue={categories?.name} {...register("name")} />
          </div>

      <div className="form-group" style={{marginTop:"30px"}}>
          <button type="submit" className="btn text-white" style={{background: "#0e3a63"}}>Update Category</button>
      </div>
    </form>
</div>
  );
};

export default UpdateCategory;
