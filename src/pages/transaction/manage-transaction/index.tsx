import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { TransactionApis } from "../../../apis/transaction";
import CustomTable from "../../../custom/data-display/table";
import { columns } from "./constant/columns";
import { setAllTransaction } from "../../../store/features/transaction";
import { formatStatusToTag } from "../../../helpers";
import { ITransaction } from "../../../types";
import { message } from "antd";
import { UPLOAD_URL } from "../../../constant";

const ManageTransactionPage = () => {
    const dispatch = useAppDispatch();
    const { getAll, deleteTransaction } = TransactionApis;
    const items = useAppSelector((state) => state.transaction.items);

    const mapData = (data: ITransaction[]) => {
        return data?.map((item) => ({
            ...item,
            purchasedProduct: item?.purchasedProducts?.[0]?.image && (
                <img
                    src={`${UPLOAD_URL}/${item?.purchasedProducts?.[0]?.image}`}
                    alt="Product image"
                    className="w-[100px] h-[100px] rounded-lg"
                />
            ),
            paymentAmount: `$${item?.subTotal}`,
            totalProduct: item?.purchasedProducts?.length,
            status: formatStatusToTag(item?.status),
        }));
    };

    const getData = () => {
        getAll()
            .then((response) => {
                dispatch(setAllTransaction(response?.data));
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
            tableTitle="Transaction list"
            linkTo={"/transaction/manage-transaction"}
            columns={columns}
            dataSource={mapData(items)}
            onDelete={handleDelete}
        />
    );
};

export default ManageTransactionPage;
