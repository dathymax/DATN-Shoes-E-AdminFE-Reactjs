import { Input } from "antd";
import { TextAreaProps } from "antd/es/input";
import React, { FC } from "react";

interface CustomInputTextareaProps extends TextAreaProps {}

const CustomInputTextarea: FC<CustomInputTextareaProps> = ({ ...rest }) => {
    return (
        <Input.TextArea
            size={rest.size || "large"}
            {...rest}
            autoSize={{ minRows: 5, maxRows: 5 }}
        />
    );
};

export default CustomInputTextarea;
