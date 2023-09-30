import { InputNumber, InputNumberProps } from "antd";
import React, { FC } from "react";

interface CustomInputNumberProps extends InputNumberProps {}

const CustomInputNumber: FC<CustomInputNumberProps> = ({ ...rest }) => {
    return (
        <InputNumber
            size={rest.size || "large"}
            className={`${rest.className} w-full`}
            {...rest}
        />
    );
};

export default CustomInputNumber;
