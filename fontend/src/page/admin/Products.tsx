import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../model/interface";
import { Space, Table, Button, message, Popconfirm, } from "antd";
import { getCategory } from "../../api/category";

interface IProps{
  products: IProduct[],
  categories?: IProduct[],
  onRemove: (id: string) => void
}


const AdminProducts = (props: IProps) => {
  const [data, setData] = useState<IProduct[]>([]);
  console.log(data);
  
  const [categories,setCategories] = useState<IProduct[]>([])
  useEffect(()=>{
    getCategory().then(({data})=> setCategories(data))
  },[])
  useEffect(() => {
    setData(props.products);
  }, [props]);

  const removeProduct = (id:string) => {
    props.onRemove(id)
  };

  const confirm = (record:any) => {
      message.info('Xóa sản phẩm thành công');
      removeProduct(record._id)
  };
  return (
    <>
      <Button style={{marginBottom:20}}>
        <Link to={"/admin/products/add"}>Add Product</Link>
      </Button>
      <Table
        columns={[
          {
            title: "ID",
            dataIndex: "_id",
            key: "_id",
          },
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (text: string) => <a>{text}</a>,
          },
          {
            title: "Category Name",
            dataIndex: "categoryId",
            key: "categoryId",
            render: (categoryId: string) => {
              const category = categories.find((c) => c._id === categoryId);
              return category ? category.name : undefined;
            },
          },
          {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (image: string) => (<img src={image} alt="Product" width="200" />),
          },
          {
            title: "Price",
            dataIndex: "price",
            key: "price",
          },
          {
            title: "Action",
            key: "action",
            render: (_, record) => (
              <Space size="middle">
                <Popconfirm
                  placement="top"
                  title={"Bạn có chắc chắn muốn xóa không?"}
                  onConfirm={() => confirm(record)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button type="primary" danger>
                    Delete
                  </Button>
                  <a href={`/admin/products/${record._id}/update`}>
                      <Button type="primary" style={{marginLeft:20}}>Update</Button>
                  </a>
                </Popconfirm>
              </Space>
            ),
          },
        ]}
        dataSource={data.map((product) => ({ ...product, key: product._id }))}
      />
    </>
  );
};

export default AdminProducts;
