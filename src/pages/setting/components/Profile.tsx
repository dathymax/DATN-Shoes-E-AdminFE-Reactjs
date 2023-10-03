import { Avatar, Button, Divider, Form, Input, Select } from "antd";
import React, { useEffect } from "react";
import { IUser } from "../../../types";
import { UserApis } from "../../../apis/user";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../../contexts/AppContext";
import Title from "../../../components/title";
import { UPLOAD_URL } from "../../../constant";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { setUserInfo } from "../../../store/features/auth";

const { Option } = Select;

const SettingPageProfile = () => {
    const { id } = useParams();
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();
    const userInfo = useAppSelector((state) => state.auth.userInfo);
    const { setLoading, openNotiSuccess, openNotiError } = useAppContext();

    const selectBefore = (
        <Select defaultValue="+84">
            <Option value="+84">+84</Option>
        </Select>
    );

    useEffect(() => {
        form.setFieldsValue(userInfo);
    }, [id, userInfo]);

    const onFinish = (values: IUser) => {
        setLoading(true);
        UserApis.updateUser(id, values)
            .then((response) => {
                setLoading(false);
                openNotiSuccess("Update user");
                dispatch(setUserInfo(response.data));
            })
            .catch(() => {
                setLoading(false);
                openNotiError("Update user");
            });
    };

    return (
        <div className="bg-white p-5 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
                <Title title="Manage profile" />
                <Button size="large" onClick={() => form.submit()}>
                    Update profile
                </Button>
            </div>
            <Divider />
            <Form form={form} onFinish={onFinish}>
                <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-1 font-medium">
                        <p>Avatar</p>
                        <p className="text-gray-400 font-light">
                            Only *.png, *.jpg and *.jpeg image files are
                            accepted
                        </p>
                    </div>
                    <div className="col-span-2 text-gray-400 font-medium">
                        <Avatar
                            shape="square"
                            size={150}
                            src={`${UPLOAD_URL}/${userInfo.avatar}`}
                        />
                    </div>
                </div>
                <Divider />
                <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-1 font-medium">First name</div>
                    <div className="col-span-2 text-gray-400 font-medium">
                        <Form.Item name={"firstname"} className="m-0">
                            <Input size="large" />
                        </Form.Item>
                    </div>
                </div>
                <Divider />
                <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-1 font-medium">Last name</div>
                    <div className="col-span-2 text-gray-400 font-medium">
                        <Form.Item name={"lastname"} className="m-0">
                            <Input size="large" />
                        </Form.Item>
                    </div>
                </div>
                <Divider />
                <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-1 font-medium">Role</div>
                    <div className="col-span-2 text-gray-400 font-medium">
                        <Form.Item name={"role"} className="m-0">
                            <Input size="large" />
                        </Form.Item>
                    </div>
                </div>
                <Divider />
                <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-1 font-medium">Phone number</div>
                    <div className="col-span-2 text-gray-400 font-medium">
                        <Form.Item name={"phoneNumber"} className="m-0">
                            <Input size="large" addonBefore={selectBefore} />
                        </Form.Item>
                    </div>
                </div>
                <Divider />
                <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-1 font-medium">Country</div>
                    <div className="col-span-2 text-gray-400 font-medium">
                        <Form.Item name={"country"} className="m-0">
                            <Input size="large" />
                        </Form.Item>
                    </div>
                </div>
                <Divider />
                <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-1 font-medium">Address</div>
                    <div className="col-span-2 text-gray-400 font-medium">
                        <Form.Item name={"address"} className="m-0">
                            <Input size="large" />
                        </Form.Item>
                    </div>
                </div>
                <Divider />
                <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-1 font-medium">City</div>
                    <div className="col-span-2 text-gray-400 font-medium">
                        <Form.Item name={"city"} className="m-0">
                            <Input size="large" />
                        </Form.Item>
                    </div>
                </div>
                <Divider />
                <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-1 font-medium">Province</div>
                    <div className="col-span-2 text-gray-400 font-medium">
                        <Form.Item name={"province"} className="m-0">
                            <Input size="large" />
                        </Form.Item>
                    </div>
                </div>
                <Divider />
                <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-1 font-medium">District</div>
                    <div className="col-span-2 text-gray-400 font-medium">
                        <Form.Item name={"district"} className="m-0">
                            <Input size="large" />
                        </Form.Item>
                    </div>
                </div>
                <Divider />
            </Form>
        </div>
    );
};

export default SettingPageProfile;
