import jwt_decode from "jwt-decode";
import { IUser } from "../types";
import { UPLOAD_URL } from "../constant";
import { Tag } from "antd";

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

export const formatStatusToTag = (status?: string) => {
    switch (status) {
        case "process":
            return <Tag color="gold">Process</Tag>;
        case "delivering":
            return <Tag color="blue">Delivering</Tag>;
        case "return":
            return <Tag color="red">Refund</Tag>;
        case "packed":
            return <Tag color="green">Packed</Tag>;
        default:
            break;
    }
};
