
import { useParams } from 'react-router-dom'
import { IProduct } from '../model/interface'
import { useEffect, useState } from 'react'

interface IProps{
    products:IProduct[]
}


const ProductDetails = (props:IProps) => {
  // console.log(props.products);
    const {id} = useParams()
    const [data,setData] = useState<IProduct>()
    useEffect(()=>{
      const currentProduct = props.products.find((item)=> item._id === id);
      setData(currentProduct);
    }, [props.products, id]);
   
  return (
    <div>

    <div className="pl-5 pt-5">
      <h3 className="rounded text-center pt-2 border border-primary fs-2" style={{width:200}}>SẢN PHẨM BÁN CHẠY</h3>
    </div>
    <div className="row  pt-4 justify-content-center" style={{marginLeft:-70}}>
        <div className="ml-5 mb-5 col-3 border border-primary">
          <img className="pt-2 figure-img img-fluid rounded" src={data?.image} alt="" style={{borderRadius:40}} />
          <h1>{data?.name}</h1>
          <p>{data?.price}</p>
          <p>{data?.description}</p>
        </div>
    </div>
    </div>
  )
}

export default ProductDetails
