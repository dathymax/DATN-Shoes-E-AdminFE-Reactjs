import { useEffect, useState } from "react";
import CustomTable from "../../../custom/data-display/table";
import { columns } from "./constants/columns";
import { ISize } from "../../../types";
import { useAppContext } from "../../../contexts/AppContext";
import { Drawer } from "antd";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setCloseDrawer } from "../../../store/features/layout";
import SizeAdd from "./service";
import { SizeApis } from "../../../apis/size";

const SizeList = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id") || "";
    const [dataSource, setDataSource] = useState<ISize[]>([]);
    const { openNotiError, openNotiSuccess } = useAppContext();
    const openDrawer = useAppSelector((state) => state.layout.openDrawer);

    const getData = () => {
        SizeApis.getAll()
            .then((response) => {
                setDataSource(response?.data);
            })
            .catch(() => {
                openNotiError("Get size");
            });
    };

    useEffect(() => {
        getData();
    }, []);

    const handleDelete = (id?: string) => {
        SizeApis.deleteSize(id)
            .then(() => {
                openNotiSuccess("Delete size");
            })
            .catch(() => {
                openNotiError("Delete size");
            });
    };

    return (
        <>
            <CustomTable
                tableTitle="Size list"
                typeAdd="drawer"
                columns={columns}
                addBtnTitle="Add size"
                linkTo={"/products/sizes"}
                dataSource={dataSource}
                onDelete={handleDelete}
            />

            <Drawer
                open={openDrawer}
                title={id ? "Update size" : "Create size"}
                destroyOnClose
                footer={null}
                onClose={() => dispatch(setCloseDrawer())}
                afterOpenChange={(open) => {
                    if (!open) {
                        getData();
                        searchParams.delete("id");
                        navigate(`?${searchParams.toString()}`);
                    }
                }}
            >
                <SizeAdd />
            </Drawer>
        </>
    );
};

export default SizeList;
