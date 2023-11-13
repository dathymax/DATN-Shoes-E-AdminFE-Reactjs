import { Input, InputProps } from "antd";
import { FC } from "react";

interface CustomInputProps extends InputProps { }

const CustomInput: FC<CustomInputProps> = ({ ...rest }) => {
    return <Input size={rest.size || "large"} {...rest} />;
};

export default CustomInput;
