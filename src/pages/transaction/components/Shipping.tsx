import React from 'react'
import Title from '../../../components/title'
import { Divider } from 'antd'
import FormWrapper from '../../../components/form/FormWrapper'
import CustomInput from '../../../custom/data-entry/input/Input'

const Shipping = () => {
    return (
        <div className="bg-white rounded-lg p-5">
            <Title title="Shipping Detail" />
            <Divider />

            <FormWrapper
                name="receiptNumber"
                labelTitle={"Receipt number"}
            >
                <CustomInput placeholder="" />
            </FormWrapper>

            <FormWrapper
                name="shipping"
                labelTitle={"Shipping"}
            >
                <CustomInput placeholder="" />
            </FormWrapper>

            <FormWrapper
                name="address"
                labelTitle={"Address"}
            >
                <CustomInput placeholder="" />
            </FormWrapper>

            <FormWrapper
                name="payment"
                labelTitle={"Payment"}
            >
                <CustomInput placeholder="" />
            </FormWrapper>
        </div>
    )
}

export default Shipping