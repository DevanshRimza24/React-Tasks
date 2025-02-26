import React from "react";
import { Form, Input, Button } from "antd";


const Formm: React.FC = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log("Form Values:", values);
  };
  return (
    <Form
      form={form}
      layout="inline"
      onFinish={onFinish}
      initialValues={{ firstName: "", email: "" }}
    >
      {/* First Name Field */}
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: "Please enter your first name!" }]}
      >
        <Input placeholder="Enter first name" className=" w-1" />
      </Form.Item>
      {/* Email Field */}
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please enter your email!" },
          { type: "email", message: "Please enter a valid email!" },
        ]}
      >
        <Input placeholder="Enter email" />
      </Form.Item>
      {/* Submit Button */}
      <Form.Item>
        <Button type="primary" htmlType="submit" >
          Submit
        </Button >
      </Form.Item>
    </Form>
  );
};
export default Formm;