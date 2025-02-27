import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Select, InputNumber, DatePicker } from 'antd';
import moment from 'moment';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
  email?: string;
  gender?: string;
  age?: number;
  dob?: moment.Moment
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {

  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const App: React.FC = () => (
  <div className='bg-gray-100'>

    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' },
        { min: 3, message: 'Username must be atleast 3 characters' }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' },
        { type: 'email', message: 'Enter a valid Email id' }
        ]}
      >
        <Input />
      </Form.Item>

      {/* </Form.Item> */}

      <Form.Item<FieldType>
        label="Gender"
        name="gender"
        rules={[{ required: true, message: 'Please select your Gender!' }]}
      >
        <Select placeholder="Select your gender">
          <Select.Option value="male">Male</Select.Option>
          <Select.Option value="female">Female</Select.Option>
          <Select.Option value="other">Other</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item<FieldType>
        label="Age"
        name="age"
        rules={[{ required: true, message: 'Please input your age!' },
        { type: 'number', min: 18, message: 'you must be atleast 18 years of age' }
        ]}
      >
        <InputNumber />
      </Form.Item>


      <Form.Item<FieldType>
        label="Date of Birth"
        name="dob"
        rules={[
          { required: true, message: 'Please select your date of birth!' },
          () => ({
            validator(_, value) {
              if (!value) {
                return Promise.reject('Please select your date of birth!');
              }
              // Check if the selected date is in the future
              if (value.isAfter(moment())) {
                return Promise.reject('Date of birth cannot be in the future!');
              }
              return Promise.resolve();
            },
          }),
        ]}
      >
        <DatePicker
          style={{ width: '100%' }}
          format="YYYY-MM-DD"
          placeholder="Select your date of birth"
        />
      </Form.Item>





      <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div >
);



export default App
