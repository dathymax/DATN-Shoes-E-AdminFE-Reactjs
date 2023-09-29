import Axios_instance from "../../config/axios";
import { IPasswordReset, IUser } from "../../types";
import Cookies from "js-cookie";

const url = "/auth";

export async function login(values: IUser) {
    const response = await Axios_instance.post(url, values);
    return response?.data || {};
}

export async function updatePassword(id?: string, values?: IPasswordReset) {
    const response = await Axios_instance.patch(
        `${url}/update-password/${id}`,
        values
    );
    return response?.data || {};
}

export async function resetPassword(id?: string, token?: string) {
    const response = await Axios_instance.patch(
        `${url}/reset-password/${id}/${token}`
    );
    return response?.data || {};
}

export const logout = () => {
    localStorage.clear();
    Cookies.remove("USER-AUTH");
};
