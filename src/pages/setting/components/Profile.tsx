import { Avatar, Divider, Form, Input, Select } from 'antd'
import React, { useEffect } from 'react'

const { Option } = Select;

const SettingPageProfile = () => {
    const [form] = Form.useForm();

    const selectBefore = (
        <Select defaultValue="+84">
            <Option value="+84">+84</Option>
        </Select>
    );

    useEffect(() => {
        form.setFieldsValue({
            name: "Dat 09",
            role: "Super admin",
            phoneNumber: "0987654321",
            address: "28 Xuan Hinh, Tay Nam Bo, Ha Noi"
        })
    }, [])

    return (
        <div className="bg-white p-5 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
                <div className='rounded-lg h-[25px] w-[6px] bg-black'></div>
                <h2>Manage profile</h2>
            </div>
            <Divider />
            <Form form={form}>
                <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-1 font-medium">
                        <p>Avatar</p>
                        <p className='text-gray-400 font-light'>
                            Only *.png, *.jpg and *.jpeg image files are accepted
                        </p>
                    </div>
                    <div className="col-span-2 text-gray-400 font-medium">
                        <Avatar shape='square' size={150} />
                    </div>
                </div>
                <Divider />
                <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-1 font-medium">
                        Name
                    </div>
                    <div className="col-span-2 text-gray-400 font-medium">
                        <Form.Item name={"name"} className='m-0'>
                            <Input size='large' />
                        </Form.Item>
                    </div>
                </div>
                <Divider />
                <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-1 uppercase font-medium">
                        Role
                    </div>
                    <div className="col-span-2 uppercase text-gray-400 font-medium">
                        <Form.Item name={"role"} className='m-0'>
                            <Input size='large' />
                        </Form.Item>
                    </div>
                </div>
                <Divider />
                <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-1 uppercase font-medium">
                        Phone number
                    </div>
                    <div className="col-span-2 uppercase text-gray-400 font-medium">
                        <Form.Item name={"phoneNumber"} className='m-0'>
                            <Input size='large' addonBefore={selectBefore} />
                        </Form.Item>
                    </div>
                </div>
                <Divider />
                <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-1 uppercase font-medium">
                        Address
                    </div>
                    <div className="col-span-2 uppercase text-gray-400 font-medium">
                        <Form.Item name={"address"} className='m-0'>
                            <Input size='large' />
                        </Form.Item>
                    </div>
                </div>
                <Divider />
            </Form>
        </div>
    )
}

export default SettingPageProfile