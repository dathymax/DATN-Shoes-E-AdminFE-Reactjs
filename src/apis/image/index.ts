import Axios_upload from "../../config/axios/upload";

const url = "/images";

export const ImageApis = {
    createImage: async function (values?: FormData) {
        const response = await Axios_upload.post(url, values);
        return response?.data || {};
    },
    updateImage: async function (id?: string, values?: FormData) {
        const response = await Axios_upload.patch(`${url}/${id}`, values);
        return response?.data || {};
    },
    getImage: async function (id?: string) {
        const response = await Axios_upload.get(`${url}/${id}`);
        return response?.data || {};
    },
    deleteImage: async function (id?: string) {
        const response = await Axios_upload.delete(`${url}/${id}`);
        return response?.data || {};
    },
}