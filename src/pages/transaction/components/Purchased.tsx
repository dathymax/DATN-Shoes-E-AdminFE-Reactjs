import FormWrapper from '../../../components/form/FormWrapper'
import CustomInput from '../../../custom/data-entry/input/Input'
import CustomDatePicker from '../../../custom/data-entry/date-picker/DatePicker'

const Purchased = () => {
    return (
        <>
            <FormWrapper
                name="transactionNumber"
                labelTitle={"Transaction Number"}
            >
                <CustomInput placeholder="" />
            </FormWrapper>
            <FormWrapper
                name="date"
                labelTitle={"Date"}
            >
                <CustomDatePicker placeholder="" />
            </FormWrapper>
            <FormWrapper
                name="invoice"
                labelTitle={"Invoice"}
            >
                <CustomInput placeholder="" />
            </FormWrapper>
            <FormWrapper
                name="customerName"
                labelTitle={"Customer Name"}
            >
                <CustomInput placeholder="" />
            </FormWrapper>
            <FormWrapper
                name="phoneNumber"
                labelTitle={"Phone Number"}
            >
                <CustomInput placeholder="" />
            </FormWrapper>
            <FormWrapper
                name="status"
                labelTitle={"Status"}
                labelDescription={"This is the customer's order status. You can arrange your customer's order status according to the order process."}
            >
                <CustomInput placeholder="" />
            </FormWrapper>
        </>
    )
}

export default Purchased