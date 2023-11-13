import { DatePicker, DatePickerProps } from 'antd'
import { FC } from 'react'

const CustomDatePicker: FC<DatePickerProps> = ({ ...rest }) => {
    return <DatePicker format={"DD/MM/YYYY"} className={`w-full ${rest.className}`} size={rest.size || "large"} {...rest} />;
}

export default CustomDatePicker