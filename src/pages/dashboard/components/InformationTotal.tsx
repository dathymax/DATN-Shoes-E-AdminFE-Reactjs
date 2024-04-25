import { Card } from "antd";
import { FC } from "react";
import { ITransaction } from "../../../types";

interface InformationTotalProps {
    totalProductSale: ITransaction[];
    totalSales: number;
    totalUsers: number;
    stock: number;
    profit: number;
}

const InformationTotal: FC<InformationTotalProps> = ({
    totalSales,
    totalUsers,
    stock,
    totalProductSale,
    profit
}) => {
    return (
        <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1">
                <Card>
                    <p className="uppercase text-gray-500 mb-3 font-medium">TOTAL SALES</p>
                    <h2 className="text-3xl line-clamp-1 mb-2">
                        ${" "}
                        {totalProductSale?.reduce(
                            (prev: number, curr: ITransaction) =>
                                Number(prev) + Number(curr.subTotal),
                            0
                        )}
                    </h2>
                    / <span className="text-xl">{totalSales} products</span>
                </Card>
            </div>
            <div className="col-span-1">
                <Card>
                    <p className="uppercase text-gray-500 mb-3 font-medium">PROFIT</p>
                    <h2 className="text-3xl line-clamp-1">
                        ${" "}
                        {profit}
                    </h2>
                </Card>
            </div>
            <div className="col-span-1">
                <Card>
                    <p className="uppercase text-gray-500 mb-3 font-medium">STOCK</p>
                    <h2 className="text-3xl">{stock}</h2>
                </Card>
            </div>
            <div className="col-span-1">
                <Card>
                    <p className="uppercase text-gray-500 mb-3 font-medium">TOTAL USERS</p>
                    <h2 className="text-3xl">{totalUsers}</h2>
                </Card>
            </div>
        </div>
    );
};

export default InformationTotal;
