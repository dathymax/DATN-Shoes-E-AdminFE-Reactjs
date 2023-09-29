import Axios_instance from "../../config/axios";
import { IUser } from "../../types";

const url = "/users";

export const UserApis = {
    getUserById: async function (id?: string) {
        const response = await Axios_instance.get(`${url}/${id}`);
        return response?.data || {};
    },
    updateUser: async function (id?: string, values?: IUser) {
        const response = await Axios_instance.patch(`${url}/${id}`, values);
        return response?.data || {};
    },
};
