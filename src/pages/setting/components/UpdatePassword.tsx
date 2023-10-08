import { Button, Form, Input } from "antd";
import React, { FC } from "react";
import { IPasswordReset } from "../../../types";
import { updatePassword } from "../../../apis/auth";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../../contexts/AppContext";
import CustomForm from "../../../custom/data-entry/form";

interface UpdatePasswordProps {
    handleClose?: () => void;
}

const UpdatePassword: FC<UpdatePasswordProps> = ({ handleClose }) => {
    const { id } = useParams();
    const { openNotiSuccess, openNotiError } = useAppContext();

    const onFinish = (values: IPasswordReset) => {
        delete values.confirmPassword;

        updatePassword(id, values)
            .then(() => {
                openNotiSuccess(
                    "Update password",
                    "Password update was successful. It is possible to update the password again after 7 days."
                );
                if (handleClose) {
                    handleClose();
                }
            })
            .catch((error) => {
                const { response } = error;
                openNotiError("Update password", response?.data?.message);
            });
    };

    return (
        <CustomForm onFinish={onFinish}>
            <Form.Item
                name="password"
                label="Current password"
                rules={[
                    {
                        required: true,
                        message: "Please type your current password",
                    },
                ]}
            >
                <Input.Password
                    size="large"
                    placeholder="Type your current password"
                />
            </Form.Item>
            <Form.Item
                name="newPassword"
                label="New password"
                rules={[
                    {
                        required: true,
                        message: "Please type your new password",
                    },
                ]}
            >
                <Input.Password
                    size="large"
                    placeholder="Type your new password"
                />
            </Form.Item>
            <Form.Item
                name="confirmPassword"
                label="Confirm password"
                dependencies={["newPassword"]}
                rules={[
                    {
                        required: true,
                        message: "Please type your new password",
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (
                                !value ||
                                getFieldValue("newPassword") === value
                            ) {
                                return Promise.resolve();
                            }
                            return Promise.reject(
                                new Error(
                                    "The new password that you entered do not match!"
                                )
                            );
                        },
                    }),
                ]}
            >
                <Input.Password
                    size="large"
                    placeholder="Type your new password"
                />
            </Form.Item>

            <div className="flex items-center justify-end gap-3">
                <Button size="large" onClick={handleClose}>
                    Discard
                </Button>
                <Button type="primary" size="large" htmlType="submit">
                    Save
                </Button>
            </div>
        </CustomForm>
    );
};

export default UpdatePassword;
