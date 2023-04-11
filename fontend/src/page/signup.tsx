import React,{useState} from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { IUser } from '../model/interface';
import axios from 'axios';
interface  IProps{
    onAdd: (user: IUser) => void
}

const Signup = (props:IProps) => {
  const [form] = Form.useForm();
  const [errors, setErrors] = useState<Record<string, string>>({});
    const onFinish =  (values: any) => {
      // try {
      //   const response = await axios.post('http://localhost:8080/api/categories/', {
      //     email: values.email,
      //   });
    
      //   if (!response.data.isAvailable) {
      //     setErrors({ email: 'Email đã được sử dụng!' });
      //     return;
      //   }
    
        props.onAdd(values);
      //   form.resetFields();
      //   message.success('User registered successfully!');
      // } catch (error) {
      //   console.error(error);
      //   message.error('Failed to register user');
      // }
    };
    
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
 return(
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 ,marginTop:30}}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <h1 style={{textAlign:'center'}}>Đăng ký</h1>
    <Form.Item
      label="User Name"
      name="name"
      rules={[{ required: true, message: 'Please input your username!' }]}
      help={errors.name}
      validateStatus={errors.name ? 'error' : undefined}
    >
      <Input />
    </Form.Item>

    <Form.Item name="email" label="Email" rules={[{ type: 'email' }]}
     help={errors.email}
     validateStatus={errors.email ? 'error' : undefined}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
      help={errors.password}
        validateStatus={errors.password ? 'error' : undefined}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      label="Confirm Password"
      name="confirmPassword"
      rules={[
        { required: true, message: 'Please confirm your password!' },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('Passwords không khớp!'));
          },
        }),
      ]}
      help={errors.confirmPassword}
      validateStatus={errors.confirmPassword ? 'error' : undefined}
      
    >
      <Input.Password />
    </Form.Item>

    {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
 )
};

export default Signup;

