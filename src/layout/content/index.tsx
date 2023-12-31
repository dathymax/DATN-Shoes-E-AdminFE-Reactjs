import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const AdminContent = () => {
    return (
        <Content
            style={{
                maxHeight: "calc(100vh - 65px)",
                height: "calc(100vh - 65px)",
                maxWidth: "calc(100vw - 240px)",
                width: "calc(100vw - 240px)",
                overflow: "overlay",
            }}
            className="p-6"
        >
            <Outlet />
        </Content>
    );
};

export default AdminContent;
