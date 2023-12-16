import { useEffect } from "react";
import { Button, Form } from "antd";
import { IProduct } from "../../../types";
import ProductAddInformation from "./components/Information";
import ProductAddPrice from "./components/Price";
import { useNavigate, useParams } from "react-router-dom";
import { ProductApis } from "../../../apis/product";
import { formatStatusFromBoolean } from "../../../helpers";
import { useAppContext } from "../../../contexts/AppContext";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { addFiles } from "../../../store/features/file";
import CustomForm from "../../../custom/data-entry/form";
import { CategoryApis } from "../../../apis/category";
import { setAllCategory } from "../../../store/features/category";
import { ColorApis } from "../../../apis/color";
import { setAllColor } from "../../../store/features/color";
import { SizeApis } from "../../../apis/size";
import { setAllSize } from "../../../store/features/size";

const AddProductPage = () => {
    const { id } = useParams();
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { openNotiSuccess, openNotiError } = useAppContext();
    const images = useAppSelector((state) => state.file.images);

    useEffect(() => {
        CategoryApis.getAllCategories()
            .then((response) => {
                dispatch(setAllCategory(response?.data));
            })
            .catch(() => {
                dispatch(setAllCategory([]));
            });
        ColorApis.getAll()
            .then((response) => {
                dispatch(setAllColor(response?.data));
            })
            .catch(() => {
                dispatch(setAllColor([]));
            });
        SizeApis.getAll()
            .then((response) => {
                dispatch(setAllSize(response?.data));
            })
            .catch(() => {
                dispatch(setAllSize([]));
            });
    }, []);

    useEffect(() => {
        if (id) {
            ProductApis.getProductById(id).then((response) => {
                dispatch(addFiles(response?.data?.images));
                form.setFieldsValue({
                    ...response?.data,
                });
            });
        }
    }, [id]);

    const onFinish = (values: IProduct) => {
        values = {
            ...values,
            status: formatStatusFromBoolean(values?.status),
            images: images,
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
        <CustomForm form={form} onFinish={onFinish}>
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
        </CustomForm>
    );
};

export default AddProductPage;
