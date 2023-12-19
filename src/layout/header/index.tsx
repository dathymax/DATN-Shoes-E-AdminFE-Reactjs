import { Avatar, Dropdown, Layout } from "antd";
import InputSearch from "../../custom/data-entry/input/InputSearch";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { logout } from "../../apis/auth";
import { useNavigate } from "react-router-dom";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { removeAuthState } from "../../store/features/auth";
import { UPLOAD_URL } from "../../constant";

const { Header } = Layout;

const AdminHeader = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const userInfo = useAppSelector((state) => state.auth.userInfo);

    const items = [
        {
            label: "Setting",
            key: "setting",
            icon: <IoSettingsOutline style={{ fontSize: 20 }} />,
            onClick: () => {
                navigate(`/setting/${userInfo?.id}`);
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
                dispatch(removeAuthState());
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
            {/* <InputSearch /> */}
            <div></div>

            <div className="user-action flex items-center gap-5">
                <Dropdown
                    menu={{
                        items,
                    }}
                    trigger={["click"]}
                >
                    <div className="cursor-pointer flex items-center justify-center gap-3">
                        <Avatar
                            size={40}
                            icon={<AiOutlineUser />}
                            src={`${UPLOAD_URL}/${userInfo?.avatar}`}
                        />
                        <div className="h-full">
                            <p className="mb-2 leading-[13px] font-bold">
                                {userInfo?.firstname} {userInfo?.lastname}
                            </p>
                            {/* <p className="text-gray-400 leading-[13px]">
                                {userInfo?.role}
                            </p> */}
                        </div>
                        <BsChevronDown className="text-gray-500 text-[20px]" />
                    </div>
                </Dropdown>
            </div>
        </Header>
    );
};

export default AdminHeader;
