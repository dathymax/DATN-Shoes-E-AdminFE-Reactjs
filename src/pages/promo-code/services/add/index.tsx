import React, { useEffect } from "react";
import CustomForm from "../../../../custom/data-entry/form";
import { Button, Form, Input, InputNumber } from "antd";
import { IPromoCode } from "../../../../types";
import { PromoCodeApis } from "../../../../apis/promo-code";
import { useAppContext } from "../../../../contexts/AppContext";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../../../store/store";
import { setCloseDrawer } from "../../../../store/features/layout";

const PromoCodeAdd = () => {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id") || "";
    const { getById, create, update } = PromoCodeApis;
    const { openNotiSuccess, openNotiError } = useAppContext();

    useEffect(() => {
        if (id) {
            getById(id)
                .then((response) => {
                    form.setFieldsValue(response?.data);
                })
                .catch(() => {});
        }
    }, [id]);

    const onFinish = (values?: IPromoCode) => {
        if (!id) {
            create(values)
                .then(() => {
                    openNotiSuccess("Create");
                    dispatch(setCloseDrawer());
                })
                .catch((error) => {
                    const { response } = error;

                    openNotiError("Create", response?.message);
                });
        } else {
            update(id, values)
                .then(() => {
                    openNotiSuccess("Update");
                    dispatch(setCloseDrawer());
                })
                .catch((error) => {
                    const { response } = error;

                    openNotiError("Update", response?.message);
                });
        }
    };

    return (
        <CustomForm form={form} onFinish={onFinish}>
            <Form.Item
                name={"name"}
                label="Promo code name"
                rules={[
                    {
                        required: true,
                        message: "Please type promo code name",
                    },
                ]}
            >
                <Input placeholder="Type promo code name" />
            </Form.Item>

            <Form.Item
                name={"spendTime"}
                label="Spend time"
                rules={[
                    {
                        required: true,
                        message: "Please type spend time",
                    },
                ]}
            >
                <InputNumber className="w-full" placeholder="Type spend time" />
            </Form.Item>

            <Button type="primary" htmlType="submit" size="large">
                {!id ? "Create" : "Update"}
            </Button>
        </CustomForm>
    );
};

export default PromoCodeAdd;
