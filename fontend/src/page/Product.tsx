import React, { useEffect, useState } from "react";

import { IProduct } from "../model/interface";

interface IProps {
  products: IProduct[];
}
const Product = (props: IProps) => {
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    setData(props.products);
  }, [props]);

  return (
  <div>
    <div className="pl-5 pt-5">
      <h3 className="rounded text-center pt-2 border border-primary fs-2" style={{width:200,background:"blue",color:"white"}}>SẢN PHẨM BÁN CHẠY</h3>
    </div>
    <div className="row  pt-4 justify-content-center" style={{marginLeft:-70}}>
      {data.map((product) => {
        if(product){
          return (
            <div className="ml-5 mb-5 col-3 border border-primary">
              <img className="pt-2 figure-img img-fluid rounded" src={product.image} alt="" style={{borderRadius:40}} />
              <h1>{product.name}</h1>
              <p style={{color:"#576B95",fontSize:17,fontWeight:"bold"}}>{product.price}</p>
              <p>{product.description}</p>
              <button style={{marginBottom:10,marginTop:20}} type="button" className="btn btn-primary"><a className="text-white" href={`/products/${product._id}`}>Xem chi tiết</a></button>
            </div>
          );
        } 
      })}
    </div>
    </div>
  );
};

export default Product;
