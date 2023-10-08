import React, { useEffect, useState } from "react";
import { IUser } from "../../types";
import { UserApis } from "../../apis/user";
import { useAppContext } from "../../contexts/AppContext";
import CustomTable from "../../custom/data-display/table";
import { columns } from "./constants/columns";

const CustomersPage = () => {
    const { openNotiError } = useAppContext();
    const [dataSource, setDataSource] = useState<IUser[]>([]);

    const mapData = (data: IUser[]) => {
        if (!data || data.length <= 0) return [];

        return data.map((item) => {
            return {
                ...item,
                name: `${item.firstname} ${item.lastname}`,
                completeAddress: `${item.address}. ${item.district}, ${item.province}, ${item.city}, ${item.country}`,
            };
        });
    };

    useEffect(() => {
        UserApis.getAllUsers()
            .then((response) => {
                setDataSource(response?.data);
            })
            .catch((error) => {
                const { response } = error;
                openNotiError("Get users", response?.data?.message);
            });
    }, []);

    return (
        <CustomTable
            tableTitle={"Customers"}
            columns={columns}
            linkTo={"/customers"}
            dataSource={mapData(dataSource)}
        />
    );
};

export default CustomersPage;
