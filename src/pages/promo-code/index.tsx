import React, { useEffect } from "react";
import CustomTable from "../../custom/data-display/table";
import { columns } from "./constants";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { PromoCodeApis } from "../../apis/promo-code";
import { setAllPromoCode } from "../../store/features/promo-code";
import { Drawer } from "antd";
import PromoCodeAdd from "./services/add";
import { setCloseDrawer } from "../../store/features/layout";
import dayjs from "dayjs";
import { IPromoCode } from "../../types";
import { useNavigate, useSearchParams } from "react-router-dom";

const PromoCodePage = () => {
    const { getAll } = PromoCodeApis;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id") || "";
    const items = useAppSelector((state) => state.promoCode.items);
    const openDrawer = useAppSelector((state) => state.layout.openDrawer);

    const mapData = (data: IPromoCode[]) => {
        if (!data || data?.length <= 0) return [];
        return data?.map((item) => {
            return {
                ...item,
                key: item?.id,
                createDate: dayjs(item?.createDate).format("DD/MM/YYYY"),
                modifiedDate: dayjs(item?.modifiedDate).format("DD/MM/YYYY"),
            };
        });
    };

    const getData = () => {
        getAll()
            .then((response) => {
                dispatch(setAllPromoCode(response?.data));
            })
            .catch(() => {});
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <CustomTable
                addBtnTitle="Add promo code"
                typeAdd="drawer"
                tableTitle={"Promo Codes"}
                columns={columns}
                linkTo={"/promo-code"}
                dataSource={mapData(items)}
            />

            <Drawer
                open={openDrawer}
                title={id ? "Update promo code" : "Create promo code"}
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
                <PromoCodeAdd />
            </Drawer>
        </>
    );
};

export default PromoCodePage;
