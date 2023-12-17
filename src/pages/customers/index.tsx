import { useEffect, useState } from "react";
import { IUser } from "../../types";
import { UserApis } from "../../apis/user";
import { useAppContext } from "../../contexts/AppContext";
import CustomTable from "../../custom/data-display/table";
import { columns } from "./constants/columns";
import { message } from "antd";

const CustomersPage = () => {
    const { openNotiError } = useAppContext();
    const [dataSource, setDataSource] = useState<IUser[]>([]);

    const mapData = (data: IUser[]) => {
        if (!data || data.length <= 0) return [];

        return data.map((item) => {
            return {
                ...item,
                name: `${item.firstname} ${item.lastname}`,
                address: item.address ? item.address : "",
            };
        });
    };

    const getData = () => {
        UserApis.getAllUsers()
            .then((response) => {
                setDataSource(response?.data);
            })
            .catch((error) => {
                const { response } = error;
                openNotiError("Get users", response?.data?.message);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    const handleDelete = (id?: string) => {
        UserApis.deleteUser(id)
            .then(() => {
                message.success("Delete user success!");
            })
            .catch((error) => {
                const { response } = error;

                message.error(response?.data?.message);
            });
    };

    return (
        <CustomTable
            typeAdd="link"
            noAdd
            tableTitle={"Customers"}
            columns={columns}
            linkTo={"/customers"}
            dataSource={mapData(dataSource)}
            onDelete={handleDelete}
        />
    );
};

export default CustomersPage;
