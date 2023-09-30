import { Table, TableProps } from "antd";
import React, { FC } from "react";
import { IProduct, IUser } from "../../../types";

interface CustomTableProps extends TableProps<IUser | IProduct> {}

const CustomTable: FC<CustomTableProps> = ({ columns, ...rest }) => {
    return (
        <Table
            columns={columns?.concat([
                {
                    dataIndex: "action",
                    title: "ACTION",
                },
            ])}
            {...rest}
        />
    );
};

export default CustomTable;
