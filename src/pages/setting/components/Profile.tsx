import { Avatar, Button, Divider, Form, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { IImage, IUser } from "../../../types";
import { UserApis } from "../../../apis/user";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../../contexts/AppContext";
import Title from "../../../components/title";
import { UPLOAD_URL } from "../../../constant";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { setUserInfo } from "../../../store/features/auth";
import Upload from "../../../components/upload";
import { ImageApis } from "../../../apis/image";
import CustomForm from "../../../custom/data-entry/form";

const { Option } = Select;

const SettingPageProfile = () => {
    const { id } = useParams();
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();
    const [image, setImage] = useState<IImage>({});
    const token = useAppSelector((state) => state.auth.token);
    const userInfo = useAppSelector((state) => state.auth.userInfo);
    const { setLoading, openNotiSuccess, openNotiError } = useAppContext();

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append("file", file);

            ImageApis.createImage(formData)
                .then((response) => {
                    setImage(response);
                })
                .catch(() => {
                    setImage({});
                });
        }
    };

    const selectBefore = (
        <Select defaultValue="+84">
            <Option value="+84">+84</Option>
        </Select>
    );

    useEffect(() => {
        form.setFieldsValue(userInfo);
    }, [id, userInfo]);

    const onFinish = (values: IUser) => {
        values = {
            ...values,
            avatar: image?.fileName,
        };

        setLoading(true);
        UserApis.updateUser(id, values)
            .then((response) => {
                setLoading(false);
                openNotiSuccess("Update user");
                dispatch(
                    setUserInfo({
                        user: response.data,
                        token: token,
                    })
                );
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
            <CustomForm form={form} onFinish={onFinish}>
                <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-1 font-medium">
                        <p>Avatar</p>
                        <p className="text-gray-400 font-light">
                            Only *.png, *.jpg and *.jpeg image files are
                            accepted
                        </p>
                    </div>
                    <div className="col-span-2 text-gray-400 font-medium">
                        {userInfo?.avatar || image.fileName ? (
                            <Avatar
                                shape="square"
                                size={150}
                                src={
                                    userInfo?.avatar
                                        ? `${UPLOAD_URL}/${userInfo?.avatar}`
                                        : `${UPLOAD_URL}/${image.fileName}`
                                }
                            />
                        ) : (
                            <div className="w-[30%]">
                                <Upload isAvatar handleUpload={handleUpload} />
                            </div>
                        )}
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
            </CustomForm>
        </div>
    );
};

export default SettingPageProfile;
