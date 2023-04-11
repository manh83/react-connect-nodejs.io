import React, { useEffect, useState } from "react";
import { ICategory } from "../../model/interface";
import { getCategory } from "../../api/category";

const { TextArea } = Input;
import {
  Button,
  Form,
  Input,
  Space,
} from "antd";


interface IProps {
    onAddCategory: (category: ICategory) => void;
}


const AddCategory = (props: IProps) => {

  const onFinish = async (values: any) => {
      props.onAddCategory(values);
  };
 
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  
  return (
    <Form
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
        label="Product Name"
        name="name"
        rules={[
          { required: true, message: "Tên category không được để trống!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Space wrap>
          <Button htmlType="submit" type="primary">
            Add New Product
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default AddCategory;
