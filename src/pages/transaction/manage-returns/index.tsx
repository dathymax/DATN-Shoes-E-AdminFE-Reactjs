import { useEffect } from "react";
import CustomTable from "../../../custom/data-display/table";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { columns } from "./constant/columns";
import { setAllReturns } from "../../../store/features/returns";
import { TransactionApis } from "../../../apis/transaction";

const ManageReturnsPage = () => {
    const dispatch = useAppDispatch();
    const { getAllReturnsTransaction } = TransactionApis;
    const items = useAppSelector((state) => state.returns.items);

    useEffect(() => {
        getAllReturnsTransaction()
            .then((response) => {
                dispatch(setAllReturns(response?.data));
            })
            .catch(() => { });
    }, []);

    return (
        <CustomTable
            typeAdd="noAdd"
            tableTitle="Returns list"
            linkTo="/transaction/manage-returns"
            columns={columns}
            dataSource={items}
        />
    );
};

export default ManageReturnsPage;
