import React, { useEffect } from "react";
import { Button, Form } from "antd";
import { ICategory } from "../../../types";
import { useNavigate, useParams } from "react-router-dom";
import { CategoryApis } from "../../../apis/category";
import { formatStatusFromBoolean } from "../../../helpers";
import { useAppContext } from "../../../contexts/AppContext";
import CategoryAddInformation from "./components/Information";
import CustomForm from "../../../custom/data-entry/form";

const ProductAddCategoryPage = () => {
    const { id } = useParams();
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { openNotiSuccess, openNotiError } = useAppContext();

    useEffect(() => {
        if (id) {
            CategoryApis.getCategoryById(id).then((response) => {
                form.setFieldsValue(response?.data);
            });
        }
    }, [id]);

    const onFinish = (values: ICategory) => {
        values = {
            ...values,
            status: formatStatusFromBoolean(values?.status),
        };

        if (id) {
            CategoryApis.updateCategoryById(id, values)
                .then(() => {
                    openNotiSuccess("Update category");
                    navigate("/products/categories");
                })
                .catch(() => {
                    openNotiError("Update category");
                });
        } else {
            CategoryApis.createCategory(values)
                .then(() => {
                    openNotiSuccess("Add category");
                    navigate("/products/categories");
                })
                .catch((error) => {
                    const { response } = error;
                    openNotiError("Add category", response?.data?.message);
                });
        }
    };

    return (
        <CustomForm form={form} onFinish={onFinish}>
            <div className="flex items-center justify-between mb-3">
                <h1 className="font-medium">Add category</h1>
                <div className="flex items-center justify-between">
                    <Button type="primary" htmlType="submit" size="large">
                        {id ? "Update" : "Create"}
                    </Button>
                </div>
            </div>
            <CategoryAddInformation />
        </CustomForm>
    );
};

export default ProductAddCategoryPage;
