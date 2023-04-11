import instance from "./instace";
import { ICategory } from "../model/interface";

const getCategory = () =>{
    return instance.get("/api/categories")
}
const addCategory = (category:ICategory) => {
    const token = JSON.parse(localStorage.getItem("token")??"")
    return instance.post("/api/categories",category,{
        headers: {
            "Content-Type" : "application/json",
            Authorization: `Bearer ${token}`
        }
    })
}

const deleteCategory = (id:string) => {
    const token = JSON.parse(localStorage.getItem("token")??"")
    return instance.delete("/api/categories/"+id,{
        headers: {
            "Content-Type" : "application/json",
            Authorization: `Bearer ${token}`
        }
    })
}

const updateCategory = (category:ICategory) => {
    const token = JSON.parse(localStorage.getItem("token")??"")
    return instance.put("/api/categories/" + category._id,category,{
        headers: {
            "Content-Type" : "application/json",
            Authorization: `Bearer ${token}`
        }
    })
}

export {getCategory,addCategory,deleteCategory,updateCategory}

