import React from "react";
import { Button, Form } from "antd";
import { IProduct } from "../../../types";
import ProductAddInformation from "./components/Information";
import ProductAddPrice from "./components/Price";

const AddProductPage = () => {
    const [form] = Form.useForm();

    const onFinish = (values: IProduct) => {
        console.log(values);
    };

    return (
        <Form form={form} onFinish={onFinish}>
            <div className="flex items-center justify-between mb-3">
                <h1 className="font-medium">Add product</h1>
                <div className="flex items-center justify-between">
                    <Button type="primary" htmlType="submit" size="large">
                        Create
                    </Button>
                </div>
            </div>
            <ProductAddInformation /> 
            <ProductAddPrice />
        </Form>
    );
};

export default AddProductPage;
