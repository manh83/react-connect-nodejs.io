import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useParams } from "react-router-dom";
import { ICategory } from "../../model/interface";


import { Button, Form, Input, Space } from "antd";


interface IProps {
  category: ICategory[];
  onUpdate: (category: ICategory) => void;
}
const UpdateCategory = (props: IProps) => {
  const { id } = useParams();
  const [categories, setCategories] = useState<ICategory>();

  useEffect(() => {
    const currentCategory = props.category.find((category) => category._id === id);
    setCategories(currentCategory);
    console.log(currentCategory);
  }, [props]);

  useEffect(() => {
    setFields(); 
  }, [categories])

  const [form] = Form.useForm();
  const setFields = () => {
    form.setFieldsValue({
      _id: categories?._id,
      name: categories?.name
    });
  };

  const onFinish = (values: any) => {
    props.onUpdate(values);
    console.log(values);
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
        label="Name"
        name="name"
        rules={[
          { required: true, message: "Tên danh mục không được để trống!" },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item>
        <Space wrap>
          <Button htmlType="submit" type="primary">
            Update Category
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default UpdateCategory;
