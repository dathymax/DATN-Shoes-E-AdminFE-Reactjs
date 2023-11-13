import Title from '../../../../components/title'
import { Divider } from 'antd'
import FormWrapper from '../../../../components/form/FormWrapper'
import CustomInputTextarea from '../../../../custom/data-entry/input/InputTextarea'
import Uploads from './Uploads'

const ReturnsDetail = () => {
    return (
        <div className="bg-white rounded-lg p-5 mt-5">
            <Title title="Returns Detail" />
            <Divider />

            <FormWrapper
                name="reason"
                labelTitle={"Reason"}
            >
                <CustomInputTextarea placeholder="" />
            </FormWrapper>

            <Uploads />
        </div>
    )
}

export default ReturnsDetail