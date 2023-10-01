import Axios_instance from "../../config/axios";

const url = "/categories";

export const ProductCategoryApis = {
    getAllCategories: async () => {
        const response = await Axios_instance.get(url);
        return response?.data || [];
    },
};
