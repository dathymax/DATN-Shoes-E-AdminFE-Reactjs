import { Card } from "antd";
import { FC } from "react";
import { ITransaction } from "../../../types";

interface InformationTotalProps {
    totalProductSale: ITransaction[];
    totalSales: number;
    totalUsers: number;
    stock: number;
}

const InformationTotal: FC<InformationTotalProps> = ({
    totalSales,
    totalUsers,
    stock,
    totalProductSale,
}) => {
    return (
        <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1">
                <Card>
                    <p className="uppercase text-gray-500 mb-3">TOTAL SALES</p>
                    <h2 className="text-3xl">
                        ${" "}
                        {totalProductSale?.reduce(
                            (prev: number, curr: ITransaction) =>
                                Number(prev) + Number(curr.subTotal),
                            0
                        )}
                    </h2>
                </Card>
            </div>
            <div className="col-span-1">
                <Card>
                    <p className="uppercase text-gray-500 mb-3">
                        TOTAL PRODUCTS SALES
                    </p>
                    <h2 className="text-3xl">{totalSales}</h2>
                </Card>
            </div>
            <div className="col-span-1">
                <Card>
                    <p className="uppercase text-gray-500 mb-3">STOCK</p>
                    <h2 className="text-3xl">{stock}</h2>
                </Card>
            </div>
            <div className="col-span-1">
                <Card>
                    <p className="uppercase text-gray-500 mb-3">TOTAL USERS</p>
                    <h2 className="text-3xl">{totalUsers}</h2>
                </Card>
            </div>
        </div>
    );
};

export default InformationTotal;
