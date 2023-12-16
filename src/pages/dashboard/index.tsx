import InformationTotal from "./components/InformationTotal";
import Sales from "./components/Sales";
import { useEffect, useState } from "react";
import { TransactionApis } from "../../apis/transaction";
import { UserApis } from "../../apis/user";
import { ProductApis } from "../../apis/product";
import { IProduct, ITransaction } from "../../types";

const DashboardPage = () => {
    const [products, setProducts] = useState(
        {} as { products: IProduct[]; total: number }
    );
    const [totalSales, setTotalSales] = useState(
        {} as { data: ITransaction[]; total: number }
    );
    const [totalUsers, setTotalUsers] = useState(0);

    useEffect(() => {
        TransactionApis.getAll()
            .then((response) => {
                setTotalSales({
                    data: response?.data,
                    total: response?.data?.reduce(
                        (prev: number, item: ITransaction) =>
                            Number(prev) +
                            Number(item?.purchasedProducts?.length),
                        0
                    ),
                });
            })
            .catch(() => {
                setTotalSales({ data: [], total: 0 });
            });

        UserApis.getAllUsers()
            .then((response) => {
                setTotalUsers(response?.data?.length);
            })
            .catch(() => {
                setTotalUsers(0);
            });

        ProductApis.getAllProducts()
            .then((response) => {
                setProducts({
                    products: response?.data,
                    total: response?.data?.reduce(
                        (prev: number, item: IProduct) =>
                            Number(prev) + Number(item.quantity),
                        0
                    ),
                });
            })
            .catch(() => {
                setProducts({ products: [], total: 0 });
            });
    }, []);

    return (
        <div>
            <InformationTotal
                stock={products.total}
                totalUsers={totalUsers}
                totalProductSale={totalSales.data}
                totalSales={totalSales.total}
            />
            <Sales totalSales={totalSales?.data} />
        </div>
    );
};

export default DashboardPage;
