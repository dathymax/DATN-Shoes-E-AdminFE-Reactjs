import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import AdminContent from "./content";
import AdminHeader from "./header";
import AdminSidebar from "./sidebar";
import { Navigate } from "react-router-dom";
import { getAccessToken } from "../helpers";

const AdminLayout = () => {
    const accessToken = getAccessToken();
    const [permission, setPermission] = useState("");

    useEffect(() => {
        if (!accessToken) {
            setPermission(accessToken);
        }
    }, [accessToken]);

    if (!permission) {
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
