import { Select, SelectProps } from "antd";
import { FC } from "react";

interface CustomSelectProps extends SelectProps { }

const CustomSelect: FC<CustomSelectProps> = ({ ...rest }) => {
    return <Select size={rest.size || "large"} {...rest} allowClear />;
};

export default CustomSelect;
