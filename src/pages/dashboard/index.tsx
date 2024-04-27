import InformationTotal from "./components/InformationTotal";
import Sales from "./components/Sales";
import { useEffect, useState } from "react";
import { TransactionApis } from "../../apis/transaction";
import { UserApis } from "../../apis/user";
import { ProductApis } from "../../apis/product";
import { IProduct, IPurchasedProduct, ITransaction } from "../../types";
import { useAppContext } from "../../contexts/AppContext";

const DashboardPage = () => {
    const { setLoading } = useAppContext();
    const [products, setProducts] = useState(
        {} as { products: IProduct[]; total: number }
    );
    const [totalSales, setTotalSales] = useState(
        {} as { data: ITransaction[]; total: number }
    );
    const [totalUsers, setTotalUsers] = useState(0);
    const [profit, setProfit] = useState(0);

    const getData = async () => {
        setLoading(true);

        const promise1 = await TransactionApis.getAllInstance();
        const promise2 = await UserApis.getAllUsers();
        const promise3 = await ProductApis.getAllProducts();

        Promise.all([promise1, promise2, promise3]).then(response => {
            const response1 = response[0];
            const response2 = response[1];
            const response3 = response[2];
            const totalSalesData = response1?.data?.reduce(
                (prev: number, curr: ITransaction) =>
                    Number(prev) + Number(curr.subTotal),
                0
            );
            const totalOriginalPrice = response1?.data?.reduce(
                (prev: number, item: ITransaction) =>
                    Number(prev) +
                    Number(
                        item?.purchasedProducts?.reduce(
                            (
                                prevProduct: number,
                                currProduct: IPurchasedProduct
                            ) =>
                                Number(prevProduct) +
                                Number(currProduct.originalPrice || 0) * Number(currProduct.quantity || 0),
                            0
                        )
                    ),
                0
            );

            console.log("jtadd", { totalOriginalPrice, totalSalesData })

            setTotalSales({
                data: response1?.data,
                total: response1?.data?.reduce(
                    (prev: number, item: ITransaction) =>
                        Number(prev) +
                        Number(
                            item?.purchasedProducts?.reduce(
                                (
                                    prevProduct: number,
                                    currProduct: IPurchasedProduct
                                ) =>
                                    Number(prevProduct) +
                                    Number(currProduct.quantity),
                                0
                            )
                        ),
                    0
                ),
            });

            setTotalUsers(response2?.data?.length);

            setProducts({
                products: response3?.data,
                total: response3?.data?.reduce(
                    (prev: number, item: IProduct) =>
                        Number(prev) + Number(item.quantity),
                    0
                ),
            });

            setProfit(totalSalesData - totalOriginalPrice);
        }).catch(() => {
            setTotalSales({ data: [], total: 0 });
            setTotalUsers(0);
            setProducts({ products: [], total: 0 });
        }).finally(() => {
            setLoading(false);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <InformationTotal
                stock={products.total}
                totalUsers={totalUsers}
                totalProductSale={totalSales.data}
                totalSales={totalSales.total}
                profit={profit}
            />
            <Sales totalSales={totalSales?.data} />
        </div>
    );
};

export default DashboardPage;
