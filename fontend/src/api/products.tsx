import instance from "./instace";

import {IProduct } from "../model/interface";

const getAll = () =>{
    return instance.get("/api/products")
}

const getOneProduct = (id:number) => {
    return instance.get("/api/products"+ id)
}

const addProduct = (products:IProduct) => {
    const token = JSON.parse(localStorage.getItem("token")?? "")
    return instance.post("/api/products",products,{
        headers: {
            "Content-Type" : "application/json",
            Authorization: `Bearer ${token}`
        }
    })
}

const deleteProduct = (id:string) => {
   const token = JSON.parse(localStorage.getItem("token")??"")
    return instance.delete("/api/products/"+id,{
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
}

const updateProduct = (products:IProduct) => {
    const token = JSON.parse(localStorage.getItem("token")??"")
    return instance.patch("api/products/" + products._id,products,{
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
}




// const uploadImage = () => {
//     return instance.post("/upload")
// }
export {getAll,getOneProduct,addProduct,deleteProduct,updateProduct} 