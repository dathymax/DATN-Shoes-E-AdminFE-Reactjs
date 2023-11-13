import { Layout } from "antd";
import AdminContent from "./content";
import AdminHeader from "./header";
import AdminSidebar from "./sidebar";

const AdminLayout = () => {
    return (
        <Layout>
            <AdminSidebar />
            <Layout>
                <AdminHeader />
                <AdminContent />
            </Layout>
        </Layout>
    );
};

export default AdminLayout;
