import { FC, useEffect, useState } from "react";
import CustomForm from "../../../../custom/data-entry/form";
import { UserApis } from "../../../../apis/user";
import { IUser } from "../../../../types";
import { Button, Form, Select } from "antd";
import { PromoCodeApis } from "../../../../apis/promo-code";
import { OptionProps } from "antd/es/select";

interface PromoCodesProps {
    user?: IUser;
}

const PromoCodes: FC<PromoCodesProps> = ({ user }) => {
    const [form] = Form.useForm();
    const { getAll } = PromoCodeApis;
    const { updateUser } = UserApis;
    const [promoCodes, setPromoCodes] = useState<OptionProps[]>([]);

    useEffect(() => {
        getAll()
            .then((response) => {
                setPromoCodes(
                    response?.data?.map((item: OptionProps) => ({
                        label: item?.name,
                        value: item?._id,
                    }))
                );
            })
            .catch(() => { });
    }, []);

    useEffect(() => {
        form.setFieldsValue({
            promoCodes: user?.promoCodes?.map((promoCode) => promoCode._id),
        });
    }, [user]);

    const onFinish = (values?: IUser) => {
        updateUser(user?._id, values)
            .then(() => { })
            .catch(() => { });
    };

    return (
        <CustomForm form={form} onFinish={onFinish} className="mt-10">
            <Form.Item name={"promoCodes"} label="Promo codes">
                <Select
                    options={promoCodes}
                    placeholder="Search to Select"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                            .toLowerCase()
                            .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    mode="multiple"
                    allowClear
                    size="large"
                />
            </Form.Item>

            <Button type="primary" size="large" htmlType="submit">
                Update
            </Button>
        </CustomForm>
    );
};

export default PromoCodes;
