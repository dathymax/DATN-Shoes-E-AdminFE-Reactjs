import { Layout } from 'antd'
import React from 'react'
import AdminContent from './content'
import AdminHeader from './header'
import AdminSidebar from './sidebar'
import { getUserEmail } from '../helpers'
import { Navigate } from 'react-router-dom'

const AdminLayout = () => {
    const userEmail = getUserEmail();

    if (!userEmail) {
        return <Navigate to={"/auth"} />
    }

    return (
        <Layout>
            <AdminSidebar />
            <Layout>
                <AdminHeader />
                <AdminContent />
            </Layout>
        </Layout>
    )
}

export default AdminLayout