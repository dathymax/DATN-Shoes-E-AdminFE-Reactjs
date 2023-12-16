import Axios_instance from "../../config/axios";
import { ITransaction } from "../../types";

const url = "/transactions";

export const TransactionApis = {
    getAll: async function () {
        const response = await Axios_instance.get(url);
        return response?.data || [];
    },
    getAllInstance: async function () {
        const response = await Axios_instance.get(`${url}-instance`);
        return response?.data || [];
    },
    getAllReturnsTransaction: async function () {
        const response = await Axios_instance.get(`${url}/returns`);
        return response?.data || [];
    },
    getById: async function (id?: string) {
        const response = await Axios_instance.get(`${url}/${id}`);
        return response?.data || {};
    },
    createTransaction: async function (values?: ITransaction) {
        const response = await Axios_instance.post(url, values);
        return response?.data || {};
    },
    updateTransaction: async function (
        id?: string,
        transactionExt?: string,
        values?: ITransaction
    ) {
        const response = await Axios_instance.patch(
            `${url}/${id}/${transactionExt}`,
            values
        );
        return response?.data || {};
    },
    updateTransactionById: async function (id?: string, values?: ITransaction) {
        const response = await Axios_instance.patch(`${url}/${id}`, values);
        return response?.data || {};
    },
    deleteTransaction: async function (id?: string, extCode?: string) {
        const response = await Axios_instance.delete(`${url}/${id}/${extCode}`);
        return response?.data || {};
    },
};
