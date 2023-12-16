import { Button, Form, Input } from "antd";
import CustomForm from "../../../../custom/data-entry/form";
import { useSearchParams } from "react-router-dom";
import { useAppContext } from "../../../../contexts/AppContext";
import { IColor } from "../../../../types";
import { ColorApis } from "../../../../apis/color";
import { useEffect } from "react";
import { useAppDispatch } from "../../../../store/store";
import { setCloseDrawer } from "../../../../store/features/layout";

const ColorAdd = () => {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id") || "";
    const { openNotiSuccess, openNotiError } = useAppContext();
    const { getById, createColor, updateColor } = ColorApis;

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
            createColor(values)
                .then(() => {
                    openNotiSuccess("Create");
                    dispatch(setCloseDrawer());
                })
                .catch((error) => {
                    const { response } = error;

                    openNotiError("Create", response?.message);
                });
        } else {
            updateColor(id, values)
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
                label="Color name"
                rules={[
                    {
                        required: true,
                        message: "Please type color name",
                    },
                ]}
            >
                <Input placeholder="Type color name" />
            </Form.Item>

            <Button type="primary" htmlType="submit" size="large">
                {!id ? "Create" : "Update"}
            </Button>
        </CustomForm>
    );
};

export default ColorAdd;
