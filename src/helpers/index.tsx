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
            return (
                <Tag color="gold">Process</Tag>
            )
        case "packing":
            return (
                <Tag color="orange">Packing</Tag>
            )
        case "failed":
            return (
                <Tag color="red">Failed</Tag>
            )
        case "arrived":
            return (
                <Tag color="green">Arrived</Tag>
            )
        case "sent":
            return (
                <Tag color="blue">Sent</Tag>
            )
        default:
            break;
    }
}