import jwt_decode from "jwt-decode";
import { IUser } from "../types";
import { UPLOAD_URL } from "../constant";

const accessToken = localStorage.getItem("accessToken");

export const getAccessToken = () => {
    if (!accessToken) {
        return "";
    }

    return accessToken;
};

export const getUserInfo = (): IUser => {
    try {
        if (!accessToken) {
            return {};
        }

        const userInfor: IUser = jwt_decode(accessToken);

        return userInfor;
    } catch (error) {
        console.log(error);

        return {};
    }
};

export const formatStatusFromBoolean = (
    status?: string | boolean | React.ReactNode
) => {
    if (status) {
        return "active";
    } else {
        return "inactive";
    }
};

export function genUploadUrl(fileName?: string) {
    return `${UPLOAD_URL}/${fileName}`;
}
