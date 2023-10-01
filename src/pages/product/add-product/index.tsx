import React, { useEffect } from "react";
import { Button, Form } from "antd";
import { IProduct } from "../../../types";
import ProductAddInformation from "./components/Information";
import ProductAddPrice from "./components/Price";
import { useNavigate, useParams } from "react-router-dom";
import { ProductApis } from "../../../apis/product";
import { formatStatusFromBoolean } from "../../../helpers";
import { useAppContext } from "../../../contexts/AppContext";

const AddProductPage = () => {
    const { id } = useParams();
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { openNotiSuccess, openNotiError } = useAppContext();

    useEffect(() => {
        if (id) {
            ProductApis.getProductById(id).then((response) => {
                form.setFieldsValue(response?.data);
            });
        }
    }, [id]);

    const onFinish = (values: IProduct) => {
        values = {
            ...values,
            status: formatStatusFromBoolean(values?.status),
        };

        if (id) {
            ProductApis.updateProductById(id, values)
                .then(() => {
                    openNotiSuccess("Update product");
                    navigate("/products/list-products");
                })
                .catch(() => {
                    openNotiError("Update product");
                });
        } else {
            ProductApis.createProduct(values)
                .then(() => {
                    openNotiSuccess("Add product");
                    navigate("/products/list-products");
                })
                .catch(() => {
                    openNotiError("Add product");
                });
        }
    };

    return (
        <Form form={form} onFinish={onFinish}>
            <div className="flex items-center justify-between mb-3">
                <h1 className="font-medium">Add product</h1>
                <div className="flex items-center justify-between">
                    <Button type="primary" htmlType="submit" size="large">
                        {id ? "Update" : "Create"}
                    </Button>
                </div>
            </div>
            <ProductAddInformation />
            <ProductAddPrice />
        </Form>
    );
};

export default AddProductPage;
