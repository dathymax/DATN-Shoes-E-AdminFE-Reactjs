import { Divider, Table } from "antd";
import Title from "../../../../components/title";
import { IPurchasedProduct } from "../../../../types";
import { FC } from "react";
import { UPLOAD_URL } from "../../../../constant";

const columns = [
    {
        dataIndex: "product",
        title: "PRODUCT",
    },
    {
        dataIndex: "sku",
        title: "SKU",
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
        title: "QTY",
    },
    {
        dataIndex: "price",
        title: "PRICE",
    },
    {
        dataIndex: "total",
        title: "TOTAL",
    },
];

interface PurchasedProductProps {
    products?: IPurchasedProduct[];
}

const PurchasedProduct: FC<PurchasedProductProps> = ({ products }) => {
    const mapData = (data?: IPurchasedProduct[]) => {
        if (!data || data?.length === 0) return [];

        return data?.map((item) => {
            return {
                ...item,
                product: (
                    <img
                        src={`${UPLOAD_URL}/${item?.image}`}
                        alt="Product image"
                    />
                ),
            };
        });
    };

    return (
        <div className="bg-white rounded-lg p-5 mt-5">
            <Title title="Purchased Product" />
            <Divider />

            <Table columns={columns} dataSource={mapData(products)} />
        </div>
    );
};

export default PurchasedProduct;
