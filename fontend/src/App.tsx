import React ,{ useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./page/HomePage";
import { addProduct, deleteProduct, getAll, updateProduct } from "./api/products";
import Product from "./page/Product";
import Dashboard from "./page/admin/Dashboard";
import AdminProducts from "./page/admin/Products";
import { IProduct,ICategory } from "./model/interface";
import WebsiteLayout from "./layout/WebsiteLayout";
import AdminLayout from "./layout/AdminLayout";
import ProductDetails from "./page/ProductDetails";
import UpdateProduct from "./page/admin/UpdateProduct";
import bootstrap from 'react-bootstrap' 
import MenuProducts from "./page/MenuProducts";
import AddCategory from "./page/category/AddCategory";
import AdminCategory from "./page/category/Category";
import {addCategory,deleteCategory,getCategory, updateCategory} from "./api/category"
import UpdateCategory from "./page/category/UpdateCategory";
import LoginAdmin from "./page/admin/loginAdmin";
import Signup from "./page/signup";
import Signin from "./page/signin";
import { signin, signup } from "./api/user";
import { IUser } from "./model/interface";
import Mercedes from "./page/Mercedes/mercedes";
import AddProductPage from "./page/admin/AddProdut"
import BMW from "./page/Mercedes/bmw";
import Lamborghini from "./page/Mercedes/Lamborghini";
import AddProducts from "./page/admin/add_upload";
import requireAdminAuth from "./page/requireAdminAuth";


function App() {
  const [product, setProduct] = useState<IProduct[]>([]);
  const [categories,setCategories] = useState<ICategory[]>([])
  const navigate = useNavigate()
  useEffect(() => {
    getAll().then(({ data }) => setProduct(data.docs));
  }, []);


  useEffect(() => {
    getCategory().then(({data}) => setCategories(data)
    )
  },[])

  const onHandleRemove = (id:string) =>{
    deleteProduct(id).then(() => setProduct(product.filter((product)=> product._id !== id)))
  }

  const onHandleRemoveCategory = (id:string) =>{
    deleteCategory(id).then(() => setCategories(categories.filter((cate)=> cate._id !== id)))
  }

  const onHandleAdd = (products:IProduct) => {
      addProduct(products)
      // console.log(products);
      
      navigate("/admin/products")
  }

  const register = (user:IUser) => {
    signup(user)
    // console.log(user);
    // navigate("/admin/products")
}

const login = (user:IUser) => {
  signin(user)
    .then((res)=>{
      const token = res.data.accessToken;
      localStorage.setItem("login",JSON.stringify(token));
      if(token.role == "admin"){
        requireAdminAuth();
        navigate("/admin")
      } else {
        navigate("/");
      }
    })
    .catch(({res})=>{
      alert(res.data.message);
    });
};

  const onHandleAddCategory = (category:ICategory) => {
    addCategory(category)
    navigate("/admin/category")
}

  const onHandleUpdate = (products:IProduct) => {
      updateProduct(products)
      navigate("/admin/products")
  }

  const onHandleUpdateCategory = (category:ICategory) => {
    updateCategory(category)
    // console.log(category);
    navigate("/admin/category")
}
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<Signup onAdd={register} />} />
          <Route path="signin" element={<Signin onAdd={login}/>} />
          <Route path="products" element={<MenuProducts/>}>
              <Route index element={<Product products={product} />} />
              <Route path="mercedes" element={<Mercedes products={product}/>}/>
              <Route path="BMW" element={<BMW products={product}/>}/>
              <Route path="lamborghini" element={<Lamborghini products={product}/>}/>
              <Route path= ":id" element={<ProductDetails products={product} />} />
          </Route>
          
      </Route>
        <Route path="/admin" element={<AdminLayout />}>
          {/* <Route index element={<LoginAdmin onAdd={login}/>}/> */}
          <Route index element={<Dashboard />} />
          <Route  path="products">
            <Route index element={<AdminProducts products={product} onRemove={onHandleRemove}/>} />
            {/* <Route path="add" element={<AddProductPage onAdd={onHandleAdd}/>} /> */}
            {/* <Route path="add" element={<Upload/>} /> */}
            <Route path="add" element={<AddProducts categories={categories} onAdd={onHandleAdd}/>} />
            <Route path=":id/update" element={<UpdateProduct products={product} onUpdate={onHandleUpdate} />} />
          </Route>

          <Route path="category">
            <Route index element={<AdminCategory category={categories} onRemove={onHandleRemoveCategory}/>} />
            <Route path="add" element={< AddCategory onAddCategory={onHandleAddCategory}/>}/>
            <Route path=":id/update" element={< UpdateCategory category={categories} onUpdate={onHandleUpdateCategory} />}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
