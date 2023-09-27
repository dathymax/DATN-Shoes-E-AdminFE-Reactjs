import React from 'react'
import { Layout } from "antd"
import InputSearch from '../../custom/data-entry/input/InputSearch';

const { Header } = Layout;

const AdminHeader = () => {
    return (
        <Header
            style={{
                background: "white"
            }}
            className='flex items-center justify-between px-[30px] py-[15px] overflow-hidden'
        >
            <InputSearch />
        </Header>
    )
}

export default AdminHeader