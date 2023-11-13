import { Layout, Menu } from "antd";
import Logo from "../../assets/images/Logo.png";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineDiscount } from "react-icons/md";
import { PiReceiptLight, PiUsers } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";

const { Sider } = Layout;

const AdminSidebar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const menuItems = [
        {
            label: "Products",
            key: "/products",
            icon: <BsBoxSeam style={{ fontSize: 18 }} />,
            children: [
                {
                    label: "List products",
                    key: "/products/list-products",
                    style: {
                        paddingLeft: "36px",
                    },
                },
                {
                    label: "Categories",
                    key: "/products/categories",
                    style: {
                        paddingLeft: "36px",
                    },
                },
            ],
        },
        {
            label: "Transaction",
            key: "/transaction",
            icon: <PiReceiptLight style={{ fontSize: 18 }} />,
            children: [
                {
                    label: "Manage transaction",
                    key: "/transaction/manage-transaction",
                    style: {
                        paddingLeft: "36px",
                    },
                },
                {
                    label: "Manage returns",
                    key: "/transaction/manage-returns",
                    style: {
                        paddingLeft: "36px",
                    },
                },
            ],
        },
        {
            label: "Promo codes",
            key: "/promo-code",
            icon: <MdOutlineDiscount style={{ fontSize: 18 }} />,
            style: {
                paddingLeft: "12px",
            },
        },
        {
            label: "Customers",
            key: "/customers",
            icon: <PiUsers style={{ fontSize: 18 }} />,
            style: {
                paddingLeft: "12px",
            },
        },
    ];

    const onClick = ({ key }: { key: string }) => {
        navigate(key);
    };

    return (
        <Sider
            style={{
                maxHeight: "100vh",
                height: "100vh",
                overflow: "hidden",
            }}
            theme="light"
            className="p-4"
            width={240}
        >
            <img src={Logo} alt="Logo" />
            <div className="h-[25px]"></div>
            <Menu
                items={menuItems}
                theme="light"
                mode="inline"
                style={{ border: "none" }}
                onClick={onClick}
                defaultSelectedKeys={[pathname]}
            />
        </Sider>
    );
};

export default AdminSidebar;
