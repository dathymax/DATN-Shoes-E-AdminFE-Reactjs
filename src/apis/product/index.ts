import Axios_instance from "../../config/axios";

const url = "/shoes";

export const ProductApis = {
    getAllProducts: async () => {
        const response = await Axios_instance.get(url);

        return response?.data || [];
    },
};
