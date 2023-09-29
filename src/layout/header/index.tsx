import React from "react";
import { Avatar, Dropdown, Layout } from "antd";
import InputSearch from "../../custom/data-entry/input/InputSearch";
import { PiBellSimpleBold } from "react-icons/pi";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { logout } from "../../apis/auth";
import { useNavigate } from "react-router-dom";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import { getUserInfo } from "../../helpers";

const { Header } = Layout;

const AdminHeader = () => {
    const navigate = useNavigate();
    const userInfo = getUserInfo();

    const items = [
        {
            label: "Setting",
            key: "setting",
            icon: <IoSettingsOutline style={{ fontSize: 20 }} />,
            onClick: () => {
                navigate(`/setting/${userInfo.id}`);
            },
        },
        { type: "divider" },
        {
            label: "Logout",
            key: "logout",
            icon: <IoLogOutOutline style={{ fontSize: 20 }} />,
            danger: true,
            onClick: () => {
                logout();
                navigate("/auth");
            },
        },
    ];

    return (
        <Header
            style={{
                background: "white",
            }}
            className="flex items-center justify-between px-[30px] py-[15px] overflow-hidden"
        >
            <InputSearch />

            <div className="user-action flex items-center gap-5">
                <PiBellSimpleBold className="text-gray-500 text-[25px] cursor-pointer" />

                <div className="h-[30px] w-[2px] bg-gray-300"></div>

                <Dropdown
                    menu={{
                        items,
                    }}
                    trigger={["click"]}
                >
                    <div className="cursor-pointer flex items-center justify-center gap-3">
                        <Avatar size={40} icon={<AiOutlineUser />} />
                        <div className="h-full">
                            <p className="mb-2 leading-[13px] font-bold">
                                {userInfo?.firstname} {userInfo.lastname}
                            </p>
                            <p className="text-gray-400 leading-[13px]">
                                {userInfo.role}
                            </p>
                        </div>
                        <BsChevronDown className="text-gray-500 text-[20px]" />
                    </div>
                </Dropdown>
            </div>
        </Header>
    );
};

export default AdminHeader;
