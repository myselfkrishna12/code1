import React, { useEffect, useState, useMemo } from 'react';
import Select from 'react-select'
import countryList from 'react-select-country-list'

import {
    Button,
    Col,
    Row,
    Form,
    Input,

} from 'antd';
const UserForm = () => {
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
    }
    const [, forceUpdate] = useState({});
    useEffect(() => {
        forceUpdate({});
    }, []);
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }
    return (
        <>

            <Form    style={{backgroundColor: 'azure', width:'60%', marginLeft:'19%'}}
                name="basic"
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 14,
                }}
                options={{
                    title: 'My home',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >

                <Row>
                    <Col span={15} offset={8}>
                        <h2>User Registration Form</h2>
                    </Col>
                </Row>

                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input placeholder="First Name" />
                </Form.Item>

                <Form.Item
                    label="Lastname"
                    name="lastname"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your lastname!',
                        },
                    ]}
                >
                    <Input placeholder="Last Name" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                >
                    <Input placeholder="Email" />
                </Form.Item>

                <Form.Item
                    label="Address"
                    name="address"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Address!',
                        },
                    ]}
                >
                    <Input placeholder="Address" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input placeholder="Password" />
                </Form.Item>

                <Form.Item
                    label="City"
                    name="city"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your city!'
                        }
                    ]}>
                    <Input placeholder="City" />
                </Form.Item>

                <Form.Item
                    label="Region"
                    name="Region"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your region!',
                        },
                    ]}
                >
                    <Input
                        type="region"
                        placeholder="Region"
                    />
                </Form.Item>
                <Form.Item
                    label="Country"
                    name="Country"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your region!',
                        },
                    ]}>
                    <Row>
                        <Col span={10}>
                            <Select options={options} value={value} onChange={changeHandler} />
                        </Col>
                        <Col span={14}>
                            <Form.Item label="ZipCode"
                                name="pincode"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your region!',
                                    },
                                ]}>
                                <Input
                                    placeholder='ZipCode' />

                            </Form.Item>
                        </Col>
                    </Row>
                </Form.Item>

                <Row>
                    <Col offset={10}>
                        <Button
                            type="primary"
                            htmlType="submit">
                            Register
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
};
export default UserForm;