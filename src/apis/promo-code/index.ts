import Axios_instance from "../../config/axios";
import { IPromoCode } from "../../types";

const url = "/promo-code";

export const PromoCodeApis = {
    getAll: async function () {
        const response = await Axios_instance.get(url);
        return response?.data || [];
    },
    getById: async function (id?: string) {
        const response = await Axios_instance.get(`${url}/${id}`);
        return response?.data || {};
    },
    create: async function (values?: IPromoCode) {
        const response = await Axios_instance.post(url, values);
        return response?.data || {};
    },
    update: async function (id?: string, values?: IPromoCode) {
        const response = await Axios_instance.patch(`${url}/${id}`, values);
        return response?.data || {};
    },
    delete: async function (id?: string) {
        const response = await Axios_instance.delete(`${url}/${id}`);
        return response?.data || {};
    },
};
