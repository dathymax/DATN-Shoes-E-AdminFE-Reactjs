import { Table, TableProps } from "antd";
import React, { FC } from "react";
import { IProduct, IUser } from "../../../types";
import Title from "../../../components/title";
import { Button } from "antd";
import { FiPlus } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

interface CustomTableProps extends TableProps<IUser | IProduct> {
    tableTitle?: string | React.ReactNode;
    addBtnTitle?: string | React.ReactNode;
    addBtnLink: string;
    linkTo: string;
}

const CustomTable: FC<CustomTableProps> = ({
    tableTitle,
    addBtnTitle,
    columns,
    addBtnLink,
    dataSource,
    linkTo,
    ...rest
}) => {
    const navigate = useNavigate();

    const mapData = () => {
        return dataSource?.map((item) => ({
            ...item,
            key: item?._id,
            action: (
                <Link to={`${linkTo}/${item._id}`} className="text-primary">
                    Detail
                </Link>
            ),
        }));
    };

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
                dataSource={mapData()}
                {...rest}
            />
        </div>
    );
};

export default CustomTable;
