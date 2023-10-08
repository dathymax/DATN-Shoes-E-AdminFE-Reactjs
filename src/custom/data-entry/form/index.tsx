import { Form, FormProps } from "antd";
import React, { FC } from "react";

interface CustomFormProps extends FormProps {
    children?: React.ReactNode;
}

const CustomForm: FC<CustomFormProps> = ({ children, ...rest }) => {
    return (
        <Form {...rest} layout="vertical" scrollToFirstError>
            {children}
        </Form>
    );
};

export default CustomForm;
