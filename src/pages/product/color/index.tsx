import { useEffect, useState } from "react";
import CustomTable from "../../../custom/data-display/table";
import { columns } from "./constants/columns";
import { IColor } from "../../../types";
import { ColorApis } from "../../../apis/color";
import { useAppContext } from "../../../contexts/AppContext";
import { Drawer } from "antd";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setCloseDrawer } from "../../../store/features/layout";
import ColorAdd from "./service";

const ColorList = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id") || "";
    const [dataSource, setDataSource] = useState<IColor[]>([]);
    const { openNotiError, openNotiSuccess } = useAppContext();
    const openDrawer = useAppSelector((state) => state.layout.openDrawer);

    const mapData = (data: IColor[]) => {
        if (data?.length === 0 || !data) return [];

        return data?.map((item) => {
            return {
                ...item,
                preview: (
                    <div
                        className="w-[30px] h-[30px] rounded-lg"
                        style={{
                            background: item?.name,
                        }}
                    />
                ),
            };
        });
    };

    const getData = () => {
        ColorApis.getAll()
            .then((response) => {
                setDataSource(response?.data);
            })
            .catch(() => {
                openNotiError("Get color");
            });
    };

    useEffect(() => {
        getData();
    }, []);

    const handleDelete = (id?: string) => {
        ColorApis.deleteColor(id)
            .then(() => {
                openNotiSuccess("Delete color");
            })
            .catch(() => {
                openNotiError("Delete color");
            });
    };

    return (
        <>
            <CustomTable
                tableTitle="Color list"
                typeAdd="drawer"
                columns={columns}
                addBtnTitle="Add color"
                linkTo={"/products/colors"}
                dataSource={mapData(dataSource)}
                onDelete={handleDelete}
            />

            <Drawer
                open={openDrawer}
                title={id ? "Update color" : "Create color"}
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
                <ColorAdd />
            </Drawer>
        </>
    );
};

export default ColorList;
