import React, { useEffect } from "react";
import CustomTable from "../../../custom/data-display/table";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { ReturnsApis } from "../../../apis/returns";
import { columns } from "./constant/columns";
import { setAllReturns } from "../../../store/features/returns";

const ManageReturnsPage = () => {
    const dispatch = useAppDispatch();
    const { getAll } = ReturnsApis;
    const items = useAppSelector((state) => state.returns.items);

    useEffect(() => {
        getAll()
            .then((response) => {
                dispatch(setAllReturns(response?.data));
            })
            .catch(() => { });
    }, []);

    return (
        <CustomTable
            tableTitle="Returns list"
            linkTo="/transaction/manage-returns"
            columns={columns}
            dataSource={items}
        />
    );
};

export default ManageReturnsPage;
