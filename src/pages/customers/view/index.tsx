import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserApis } from "../../../apis/user";
import { IUser } from "../../../types";
import { useAppContext } from "../../../contexts/AppContext";
import ViewDetailBuyer from "./components/Detail";
import PromoCodes from "./components/PromoCodes";

const CustomerViewDetailPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState<IUser>({});
    const { openNotiError } = useAppContext();

    useEffect(() => {
        if (id) {
            UserApis.getUserById(id)
                .then((response) => {
                    setUser(response?.data);
                })
                .catch((error) => {
                    const { response } = error;
                    setUser({});
                    openNotiError("Get user", response?.data?.message);
                });
        }
    }, [id]);

    return (
        <div className="bg-white px-5 py-4 rounded-lg">
            <ViewDetailBuyer user={user} />
            <PromoCodes user={user} />
        </div>
    );
};

export default CustomerViewDetailPage;
