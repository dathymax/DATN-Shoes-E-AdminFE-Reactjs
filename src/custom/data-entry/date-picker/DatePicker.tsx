import { DatePicker, DatePickerProps } from 'antd'
import React, { FC } from 'react'

const CustomDatePicker: FC<DatePickerProps> = ({ ...rest }) => {
    return <DatePicker className={`w-full ${rest.className}`} size={rest.size || "large"} {...rest} />;
}

export default CustomDatePicker