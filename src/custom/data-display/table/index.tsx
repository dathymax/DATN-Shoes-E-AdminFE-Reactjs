import { Modal, Table, TableProps } from "antd";
import React, { FC } from "react";
import { ICategory, IProduct, ITransaction, IUser } from "../../../types";
import Title from "../../../components/title";
import { Button } from "antd";
import { FiPlus } from "react-icons/fi";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../../store/store";
import { setOpenDrawer } from "../../../store/features/layout";
import { ExclamationCircleOutlined } from '@ant-design/icons';

interface CustomTableProps extends TableProps<IUser | IProduct | ICategory | ITransaction> {
    tableTitle?: string | React.ReactNode;
    addBtnTitle?: string | React.ReactNode;
    addBtnLink?: string;
    linkTo?: string;
    typeAdd: "link" | "drawer" | "noAdd";
    noAdd?: boolean;
    onDelete?: (id?: string, extCode?: string) => void
}

const CustomTable: FC<CustomTableProps> = ({
    tableTitle,
    addBtnTitle,
    columns,
    addBtnLink,
    dataSource,
    linkTo,
    typeAdd,
    noAdd,
    onDelete,
    ...rest
}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const [modal, contextHolder] = Modal.useModal();

    const confirm = (id?: string, extCode?: string) => {
        modal.confirm({
            title: 'Delete this item?',
            icon: <ExclamationCircleOutlined />,
            okText: 'Yes',
            cancelText: 'Cancel',
            onOk: () => {
                if (onDelete) {
                    onDelete(id, extCode)
                }
            }
        });
    };

    const checkActionBtn = (_id?: string) => {
        switch (typeAdd) {
            case "link":
                return (
                    <Link
                        to={`${linkTo}/${_id}`}
                        className="text-primary font-bold"
                    >
                        Detail
                    </Link>
                );
            case "drawer":
                return (
                    <p
                        className="text-primary font-bold cursor-pointer"
                        onClick={() => {
                            dispatch(setOpenDrawer());
                            if (_id) {
                                searchParams.set("id", _id);
                                navigate(`?${searchParams.toString()}`);
                            }
                        }}
                    >
                        Detail
                    </p>
                );
            default:
                break;
        }
    };

    const mapData = () => {
        return dataSource?.map((item) => ({
            ...item,
            key: item?._id,
            action: <div className="flex items-center gap-10">
                {checkActionBtn(item?._id)}
                <p
                    className="text-red-500 font-bold cursor-pointer"
                    onClick={() => confirm(item?._id, item?.extCode)}
                >
                    Delete
                </p>
            </div>,
        }));
    };

    const checkTypeBtnAdd = () => {
        switch (typeAdd) {
            case "link":
                return (
                    <Button
                        size="large"
                        type="primary"
                        className="flex items-center justify-center gap-2"
                        onClick={() => {
                            if (addBtnLink) {
                                navigate(addBtnLink);
                            }
                        }}
                    >
                        <FiPlus className="text-[20px]" />
                        {addBtnTitle}
                    </Button>
                );
            case "drawer":
                return (
                    <Button
                        size="large"
                        type="primary"
                        className="flex items-center justify-center gap-2"
                        onClick={() => dispatch(setOpenDrawer())}
                    >
                        <FiPlus className="text-[20px]" />
                        {addBtnTitle}
                    </Button>
                );
            case "noAdd":
                return <></>;
            default:
                break;
        }
    };

    return (
        <div className="bg-white px-4 py-5 rounded-lg">
            <div className="flex items-center justify-between mb-5">
                <Title title={tableTitle} />

                <div className="flex items-center justify-center gap-3">
                    {noAdd ? <></> : checkTypeBtnAdd()}
                </div>
            </div>
            <Table
                columns={columns?.concat([
                    {
                        dataIndex: "action",
                        title: "ACTION",
                        width: "13%"
                    },
                ])}
                dataSource={mapData()}
                pagination={{
                    pageSize: 5,
                }}
                {...rest}
            />

            {contextHolder}
        </div>
    );
};

export default CustomTable;
