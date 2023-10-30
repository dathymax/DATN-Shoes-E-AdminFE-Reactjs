import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { TransactionApis } from "../../../apis/transaction";
import CustomTable from "../../../custom/data-display/table";
import { columns } from "./constant/columns";
import { setAllTransaction } from "../../../store/features/transaction";
import { formatStatusToTag } from "../../../helpers";
import { ITransaction } from "../../../types";

const ManageTransactionPage = () => {
    const dispatch = useAppDispatch();
    const { getAll } = TransactionApis;
    const items = useAppSelector((state) => state.transaction.items);

    const mapData = (data: ITransaction[]) => {
        return data?.map(item => ({
            ...item,
            purchasedProduct: item?.purchasedProducts?.[0]?.image && <img src={item?.purchasedProducts?.[0]?.image} alt="Product image" />,
            paymentAmount: `$${item?.subTotal}`,
            totalProduct: item?.purchasedProducts?.length,
            status: formatStatusToTag(item?.status)
        }))
    }

    useEffect(() => {
        getAll()
            .then((response) => {
                dispatch(setAllTransaction(response?.data));
            })
            .catch(() => { });
    }, []);

    return (
        <CustomTable
            typeAdd="link"
            noAdd
            tableTitle="Transaction list"
            linkTo={"/transaction/manage-transaction"}
            columns={columns}
            dataSource={mapData(items)}
        />
    );
};

export default ManageTransactionPage;
