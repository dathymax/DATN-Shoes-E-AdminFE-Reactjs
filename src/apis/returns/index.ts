import Axios_instance from "../../config/axios";
import { IReturns } from "../../types";

const url = "/returns";

export const ReturnsApis = {
    getAll: async function () {
        const response = await Axios_instance.get(url);
        return response?.data || [];
    },
    getById: async function (id?: string) {
        const response = await Axios_instance.get(`${url}/${id}`);
        return response?.data || {};
    },
    create: async function (values?: IReturns) {
        const response = await Axios_instance.post(url, values);
        return response?.data || {};
    },
    update: async function (
        id?: string,
        transactionExt?: string,
        values?: IReturns
    ) {
        const response = await Axios_instance.patch(
            `${url}/${id}/${transactionExt}`,
            values
        );
        return response?.data || {};
    },
    delete: async function (id?: string, transactionExt?: string) {
        const response = await Axios_instance.delete(
            `${url}/${id}/${transactionExt}`
        );
        return response?.data || {};
    },
};
