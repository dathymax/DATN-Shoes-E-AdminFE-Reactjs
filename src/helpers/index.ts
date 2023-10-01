import jwt_decode from "jwt-decode";
import { IUser } from "../types";

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

export const formatStatusFromBoolean = (status?: boolean | string) => {
    if (status) {
        return "active";
    } else {
        return "inactive";
    }
};
