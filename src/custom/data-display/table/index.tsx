import { Table, TableProps } from "antd";
import React, { FC } from "react";
import { IProduct, IUser } from "../../../types";
import Title from "../../../components/title";
import { Button } from "antd";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface CustomTableProps extends TableProps<IUser | IProduct> {
    tableTitle?: string | React.ReactNode;
    addBtnTitle?: string | React.ReactNode;
    addBtnLink: string;
}

const CustomTable: FC<CustomTableProps> = ({
    tableTitle,
    addBtnTitle,
    columns,
    addBtnLink,
    ...rest
}) => {
    const navigate = useNavigate();

    return (
        <div className="bg-white px-4 py-5 rounded-lg">
            <div className="flex items-center justify-between mb-5">
                <Title title={tableTitle} />

                <div className="flex items-center justify-center gap-3">
                    <Button
                        size="large"
                        type="primary"
                        className="flex items-center justify-center gap-2"
                        onClick={() => navigate(addBtnLink)}
                    >
                        <FiPlus className="text-[20px]" />
                        {addBtnTitle}
                    </Button>
                </div>
            </div>
            <Table
                columns={columns?.concat([
                    {
                        dataIndex: "action",
                        title: "ACTION",
                    },
                ])}
                {...rest}
            />
        </div>
    );
};

export default CustomTable;
