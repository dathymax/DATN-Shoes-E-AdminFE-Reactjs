import { Divider, Table } from "antd";
import Title from "../../../../components/title";
import { IPurchasedProduct, ITransaction } from "../../../../types";
import { FC } from "react";
import { UPLOAD_URL } from "../../../../constant";

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

interface PurchasedProductProps {
    transaction?: ITransaction;
    products?: IPurchasedProduct[];
}

const PurchasedProduct: FC<PurchasedProductProps> = ({
    transaction,
    products,
}) => {
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
            <Title title="Purchased Product" />
            <Divider />

            <Table columns={columns} dataSource={mapData(products)} />

            <div className="text-right px-3 leading-8">
                <p>Discount: {transaction?.discount}%</p>
                <p>Shipping: $ {transaction?.shipping}</p>
                <p>Tax: $ {transaction?.tax}</p>
                <p>Subtotal: $ {transaction?.subTotal}</p>
            </div>
        </div>
    );
};

export default PurchasedProduct;
