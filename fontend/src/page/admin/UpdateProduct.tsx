import React, { useEffect, useState } from "react";
import {useForm} from "react-hook-form"

import { useParams } from "react-router-dom";
import { IProduct, ICategory } from "../../model/interface";
import { getCategory } from "../../api/category";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Select, Space, Upload } from "antd";
const { TextArea } = Input;

interface IProps {
  products: IProduct[];
  onUpdate: (product: IProduct) => void;
}
const UpdateProductPage = (props: IProps) => {
  // console.log(props.products);
  
  const { id } = useParams();
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    getCategory().then(({ data }) => setCategories(data));
  }, [props]);

  const [product, setProduct] = useState<IProduct>(); // khởi tạo biến state product có kiểu dữ liệu là IProduct
  useEffect(() => {
    // khi props thay đổi thì sẽ chạy useEffect này
    const currentProduct = props.products.find((item)=> item._id === id);
    // tìm trong mảng props.products có phần tử nào có id trùng với id trên url không
    setProduct(currentProduct);
    // console.log(currentProduct);
  
    // nếu có thì set lại giá trị cho biến product
  }, [props]);
  useEffect(() => {
    // khi biến product thay đổi thì sẽ chạy useEffect này
    setFields(); // gọi hàm setFields để set lại giá trị cho các input
  }, [product]);
  const [form] = Form.useForm();
  // khởi tạo một instance của Form và gán vào biến form
  // Instance của form là một đối tượng được tạo ra bởi Ant Design để thực hiện các chức năng của form trong React

  const setFields = () => {
    // hàm này để set lại giá trị cho các input
    form.setFieldsValue({
      // gọi hàm setFieldsValue của instance form để set lại giá trị cho các input dựa vào giá trị của biến product
      _id: product?._id,
      name: product?.name,
      price: product?.price,
      categoryId:product?.categoryId,
      description: product?.description
    });
  };

  const onFinish = (values: any) => {
    props.onUpdate(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

  return (
    <Form
      form={form}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      style={{
        maxWidth: 600,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label=""
        name="_id"
        style={{ display: "none" }} // ẩn input này đi
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Product Name"
        name="name"
        rules={[
          { required: true, message: "Tên sản phẩm không được để trống!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Category"
        name="categoryId"
        rules={[{ required: true, message: "Danh mục không được để trống!" }]}
      >
        <Select>
          {categories.map((category) => (
            <Select.Option key={category._id} value={category._id}>
              {category.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: "Giá không được để trống!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Mô tả"
        name="description"
        rules={[{ required: true, message: "Mô tả không được để trống!" }]}
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item label="Upload Ảnh" valuePropName="fileList">
        <Upload
          action="http://localhost:3000/upload"
          listType="picture-card"
          name="image"
        >
          <div>
            <PlusOutlined />
            <div
              style={{
                marginTop: 8,
              }}
            >
              Upload
            </div>
          </div>
        </Upload>
      </Form.Item>

      <Form.Item>
        <Space wrap>
          <Button htmlType="submit" type="primary">
            Update Product
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default UpdateProductPage;
