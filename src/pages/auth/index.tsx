import React from "react";
import Banner from "../../assets/images/BannerLogin.png";
import Logo from "../../assets/images/Logo.png";
import { Button, Checkbox, Form, Input, Spin } from "antd";
import { IUser } from "../../types";
import { login } from "../../apis/auth";
import { useAppContext } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useAppDispatch } from "../../store/store";
import { setUserInfo } from "../../store/features/auth";

const AuthPage = () => {
    const navigate = useNavigate();
    const { loading, setLoading, openNotiSuccess, openNotiError } =
        useAppContext();
    const dispatch = useAppDispatch();

    const onFinish = (values: IUser) => {
        setLoading(true);

        login(values)
            .then((response) => {
                setLoading(false);
                navigate("/products/list-products");
                openNotiSuccess("Login");
                localStorage.setItem("accessToken", response);
                dispatch(setUserInfo({ user: jwtDecode(response), token: response }));
            })
            .catch(() => {
                setLoading(false);
                openNotiError("Login");
            });
    };

    return (
        <Spin spinning={loading}>
            <div className="grid grid-cols-5">
                <div className="col-span-3">
                    <img
                        src={Banner}
                        alt="Banner"
                        className="w-full object-cover bg-left-bottom bg-cover"
                    />
                </div>
                <div className="col-span-2 p-[72px]">
                    <img src={Logo} alt="Logo" />
                    <div className="h-[50px]"></div>
                    <h1 className="text-3xl font-bold mb-3">Hi There!</h1>
                    <p>Welcome back to e-commerce dashboard</p>
                    <div className="h-[20px]"></div>

                    <Form onFinish={onFinish} layout="vertical">
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please type your email",
                                    type: "email",
                                },
                            ]}
                        >
                            <Input
                                className="p-3"
                                placeholder="Enter your mail"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please type your password",
                                },
                            ]}
                        >
                            <Input.Password
                                className="p-3"
                                placeholder="Enter your password"
                            />
                        </Form.Item>

                        <div className="flex items-center justify-between">
                            <Checkbox>Remember me</Checkbox>

                            <p className="cursor-pointer underline font-bold">
                                Forgot password?
                            </p>
                        </div>

                        <div className="h-[30px]"></div>

                        <Button
                            htmlType="submit"
                            block
                            type="primary"
                            className="h-[50px]"
                        >
                            Log in
                        </Button>
                    </Form>
                </div>
            </div>
        </Spin>
    );
};

export default AuthPage;
