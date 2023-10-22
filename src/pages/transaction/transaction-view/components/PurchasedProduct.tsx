import { Divider, Table } from 'antd'
import React from 'react'
import Title from '../../../../components/title'

const columns = [
    {
        dataIndex: "product",
        title: "PRODUCT",
    },
    {
        dataIndex: "sku",
        title: "SKU"
    },
    {
        dataIndex: "size",
        title: "SIZE",
    },
    {
        dataIndex: "color",
        title: "COLOR",
    },
    {
        dataIndex: "quantity",
        title: "QTY"
    },
    {
        dataIndex: "price",
        title: "PRICE",
    },
    {
        dataIndex: "total",
        title: "TOTAL"
    },
]

const PurchasedProduct = () => {
    return (
        <div className="bg-white rounded-lg p-5 mt-5">
            <Title title="Product Product" />
            <Divider />

            <Table columns={columns} />
        </div>
    )
}

export default PurchasedProduct