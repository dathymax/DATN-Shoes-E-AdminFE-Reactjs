import { Divider, Form, FormItemProps } from "antd";
import React, { FC } from "react";

interface FormWrapperProps extends FormItemProps {
    labelTitle?: React.ReactNode | string;
    labelDescription?: React.ReactNode | string;
    children?: React.ReactNode;
    noDivider?: boolean;
    isRequired?: boolean;
}

const FormWrapper: FC<FormWrapperProps> = ({
    labelTitle,
    children,
    noDivider,
    labelDescription,
    isRequired,
    ...rest
}) => {
    return (
        <>
            <div className="grid grid-cols-3 gap-20">
                <div className="col-span-1">
                    <p className="mb-2 font-medium">
                        {labelTitle}{" "}
                        {isRequired && <span className="text-red-500">*</span>}
                    </p>
                    <p className="text-gray-400 text-[13px]">
                        {labelDescription}
                    </p>
                </div>
                <div className="col-span-2 text-gray-400">
                    <Form.Item className="m-0" {...rest} label="">
                        {children}
                    </Form.Item>
                </div>
            </div>
            {!noDivider && <Divider />}
        </>
    );
};

export default FormWrapper;
