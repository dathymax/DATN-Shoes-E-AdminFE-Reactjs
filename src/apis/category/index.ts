import Axios_instance from "../../config/axios";
import { ICategory } from "../../types";

const url = "/categories";

export const CategoryApis = {
    getAllCategories: async () => {
        const response = await Axios_instance.get(url);
        return response?.data || [];
    },
    getCategoryById: async (id?: string) => {
        const response = await Axios_instance.get(`${url}/${id}`);
        return response?.data || {};
    },
    createCategory: async (values?: ICategory) => {
        const response = await Axios_instance.post(url, values);
        return response?.data || {};
    },
    updateCategoryById: async (id?: string, values?: ICategory) => {
        const response = await Axios_instance.patch(`${url}/${id}`, values);
        return response?.data || {};
    },
    deleteCategoryById: async (id?: string) => {
        const response = await Axios_instance.delete(`${url}/${id}`);
        return response?.data || {};
    },
};
