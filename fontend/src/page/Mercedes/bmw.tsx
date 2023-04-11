import React, { useEffect, useState } from "react";
import {  IProduct } from "../../model/interface";

interface IProps {
  products: IProduct[];
}
const BMW = (props: IProps) => {
  const category = props.products;
  console.log(category);
  
  return (
    <div>
      <div className="pl-5 pt-5">
        <h3
          className="rounded text-center pt-2 border border-primary fs-2"
          style={{ width: 200 ,background:"blue",color:"white"}}
        >
          BMW
        </h3>
      </div>
      <div
        className="row  pt-4 justify-content-center"
        style={{ marginLeft: -70 }}
      >
        {category.map((item) => {
          const categoryId = "64341415121cf38ff5e9cd43"
          if(item.categoryId===categoryId){
            return (
              <div key={item._id} className="ml-5 mb-5 col-3 border border-primary">
                <img
                  className="pt-2 figure-img img-fluid rounded"
                  src={item.image}
                  alt=""
                  style={{ borderRadius: 40 }}
                />
                <h1>{item.name}</h1>
                <p style={{color:"#576B95",fontSize:17,fontWeight:"bold"}}>{item.price}</p>
                <p>{item.description}</p>
                <button style={{marginBottom:10,marginTop:20}} type="button" className="btn btn-primary">
                  <a className="text-white" href={`/products/${item._id}`}>
                    Xem chi tiết
                  </a>
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default BMW;
