import { Button, Form } from "antd";
import CustomForm from "../../../../custom/data-entry/form";
import { useSearchParams } from "react-router-dom";
import { useAppContext } from "../../../../contexts/AppContext";
import { IColor } from "../../../../types";
import { useEffect } from "react";
import { useAppDispatch } from "../../../../store/store";
import { setCloseDrawer } from "../../../../store/features/layout";
import { SizeApis } from "../../../../apis/size";
import CustomInputNumber from "../../../../custom/data-entry/input/InputNumber";

const SizeAdd = () => {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id") || "";
    const { openNotiSuccess, openNotiError } = useAppContext();
    const { getById, createSize, updateSize } = SizeApis;

    useEffect(() => {
        if (id) {
            getById(id)
                .then((response) => {
                    form.setFieldsValue(response?.data);
                })
                .catch(() => {});
        }
    }, [id]);

    const onFinish = (values?: IColor) => {
        if (!id) {
            createSize(values)
                .then(() => {
                    openNotiSuccess("Create");
                    dispatch(setCloseDrawer());
                })
                .catch(() => {
                    openNotiError("Create");
                });
        } else {
            updateSize(id, values)
                .then(() => {
                    openNotiSuccess("Update");
                    dispatch(setCloseDrawer());
                })
                .catch(() => {
                    openNotiError("Update");
                });
        }
    };

    return (
        <CustomForm form={form} onFinish={onFinish}>
            <Form.Item
                name={"size"}
                label="Size number"
                rules={[
                    {
                        required: true,
                        message: "Please type size number",
                    },
                ]}
            >
                <CustomInputNumber placeholder="Type size number" />
            </Form.Item>

            <Button type="primary" htmlType="submit" size="large">
                {!id ? "Create" : "Update"}
            </Button>
        </CustomForm>
    );
};

export default SizeAdd;
