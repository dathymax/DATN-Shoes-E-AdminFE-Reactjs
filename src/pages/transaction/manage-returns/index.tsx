import { useEffect } from "react";
import CustomTable from "../../../custom/data-display/table";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { columns } from "./constant/columns";
import { setAllReturns } from "../../../store/features/returns";
import { TransactionApis } from "../../../apis/transaction";
import { IPurchasedProduct, ITransaction } from "../../../types";
import { UPLOAD_URL } from "../../../constant";
import { formatStatusToTag } from "../../../helpers";
import { message } from "antd";

const ManageReturnsPage = () => {
    const dispatch = useAppDispatch();
    const { getAllReturnsTransaction, deleteTransaction } = TransactionApis;
    const items = useAppSelector((state) => state.returns.items);

    const mapData = (data: ITransaction[]) => {
        return data?.map((item) => ({
            ...item,
            transactionNumber: item?.transactionNumber?.toString()?.slice(0, 7),
            purchasedProduct: item?.purchasedProducts?.[0]?.image && (
                <img
                    src={`${UPLOAD_URL}/${item?.purchasedProducts?.[0]?.image}`}
                    alt="Product image"
                    className="w-[100px] h-[100px] rounded-lg"
                />
            ),
            paymentAmount: `$${item?.subTotal}`,
            totalProduct: item?.purchasedProducts?.reduce(
                (prev: number, curr: IPurchasedProduct) =>
                    prev + Number(curr?.quantity),
                0
            ),
            status: formatStatusToTag(item?.status),
        }));
    };

    const getData = () => {
        getAllReturnsTransaction()
            .then((response) => {
                dispatch(setAllReturns(response?.data));
            })
            .catch(() => {});
    };

    useEffect(() => {
        getData();
    }, []);

    const handleDelete = (id?: string, extCode?: string) => {
        deleteTransaction(id, extCode)
            .then(() => {
                message.success("Delete transaction success!");
                getData();
            })
            .catch((error) => {
                const { response } = error;

                message.error(response?.data?.message);
            });
    };

    return (
        <CustomTable
            typeAdd="link"
            noAdd
            tableTitle="Returns list"
            linkTo="/transaction/manage-returns"
            columns={columns}
            dataSource={mapData(items)}
            onDelete={handleDelete}
        />
    );
};

export default ManageReturnsPage;
