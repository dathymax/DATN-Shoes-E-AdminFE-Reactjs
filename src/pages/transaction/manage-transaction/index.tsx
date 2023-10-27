import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { TransactionApis } from "../../../apis/transaction";
import CustomTable from "../../../custom/data-display/table";
import { columns } from "./constant/columns";
import { setAllTransaction } from "../../../store/features/transaction";

const ManageTransactionPage = () => {
    const dispatch = useAppDispatch();
    const { getAll } = TransactionApis;
    const items = useAppSelector((state) => state.transaction.items);

    useEffect(() => {
        getAll()
            .then((response) => {
                dispatch(setAllTransaction(response?.data));
            })
            .catch(() => {});
    }, []);

    return (
        <CustomTable
            typeAdd="noAdd"
            tableTitle="Transaction list"
            linkTo={"/transaction/manage-transaction"}
            columns={columns}
            dataSource={items}
        />
    );
};

export default ManageTransactionPage;
