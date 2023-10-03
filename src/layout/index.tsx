import { Layout } from "antd";
import React from "react";
import AdminContent from "./content";
import AdminHeader from "./header";
import AdminSidebar from "./sidebar";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/store";

const AdminLayout = () => {
    const token = useAppSelector((state) => state.auth.token);

    if (!token) {
        <Navigate to={"/auth"} />;
    }

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
