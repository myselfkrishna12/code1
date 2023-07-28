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
const Company = () => {
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
            <Form style={{ backgroundColor: 'azure', width: '70%', marginLeft: '19%' }}
                name="basic"
                wrapperCol={{
                    span: 20,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off">
                <Row>
                    <Col span={12} offset={7}>
                        <h2>Company Registration Form</h2>
                    </Col>
                </Row>
                <Row>
                    <Col offset={0}>
                        <Form.Item
                            label="Company Name"
                            name="Company name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Company name!',
                                },]} >
                            <Input placeholder="Company Name" />
                        </Form.Item>
                    </Col>
                    <Col><Form.Item
                        label="Owner"
                        name="Owner"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Owner!',
                            },
                        ]}
                    >
                        <Input placeholder="Owner" />
                    </Form.Item></Col>
                </Row>
                <Form.Item
                    label="Company Mailling Address"
                    name="Address"
                    rules={[
                        {
                            required: true
                        }]}>
                </Form.Item>
                <Input placeholder=" Street Address" />
                <Row>
                    <Col><Form.Item
                        name="city"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your city!',
                            },
                        ]}>
                        <Input placeholder='City' />
                    </Form.Item>
                    </Col>
                    <Col> <Form.Item
                        name="State"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your State!',
                            },
                        ]}>
                        <Input placeholder='State' />
                    </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <Form.Item
                            name="Country"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}>
                            <Select options={options} value={value} onChange={changeHandler} />
                </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        name="pincode"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your ZipCode!',
                            },
                        ]}>
                        <Input
                            placeholder='ZipCode' />

                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Item
                        label="Email"
                        name="Email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]} >
                        <Input placeholder="Email" />
                    </Form.Item>
                </Col>
                <Col><Form.Item
                    label="Mobile Number"
                    name="MobileNumber"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Mobile Number!',
                        },
                    ]}
                >
                    <Input placeholder="Mobile Number" />
                </Form.Item></Col>
            </Row>
            <Row>
                <Col>
                    <Form.Item
                        label="Nominal Capital"
                        name=" Nominal Capital"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Nominal Capital!',
                            },
                        ]} >
                        <Input placeholder="Nominal Capital" />
                    </Form.Item>
                </Col>
                <Col><Form.Item
                    label="Industry"
                    name="Industry"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Mobile Industry!',
                        },
                    ]}
                >
                    <Input placeholder="Industry Number" />
                </Form.Item></Col>
            </Row>
            <Form.Item
                label="Website"
                name="Website"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Mobile Website!',
                    },
                ]}
            >
                <Input placeholder="Website" />
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

export default Company