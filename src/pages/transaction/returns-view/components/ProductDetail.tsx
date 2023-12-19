import Title from "../../../../components/title";
import { Divider, Table } from "antd";
import { UPLOAD_URL } from "../../../../constant";
import { IPurchasedProduct } from "../../../../types";
import { FC } from "react";

const columns = [
    {
        dataIndex: "product",
        title: "PRODUCT",
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
];

interface ProductDetailProps {
    products?: IPurchasedProduct[];
}

const ProductDetail: FC<ProductDetailProps> = ({ products }) => {
    const mapData = (data?: IPurchasedProduct[]) => {
        if (!data || data?.length === 0) return [];

        return data?.map((item) => {
            return {
                ...item,
                product: (
                    <img
                        src={`${UPLOAD_URL}/${item?.image}`}
                        alt="Product image"
                        className="w-[100px] h-[100px] rounded-lg"
                    />
                ),
                color: (
                    <div
                        className="w-[25px] h-[25px] rounded-md"
                        style={{ background: item.color }}
                    ></div>
                ),
                price: `$ ${item.price}`,
            };
        });
    };

    return (
        <div className="bg-white rounded-lg p-5 mt-5">
            <Title title="Product Detail" />
            <Divider />

            <Table columns={columns} dataSource={mapData(products)} />
        </div>
    );
};

export default ProductDetail;
