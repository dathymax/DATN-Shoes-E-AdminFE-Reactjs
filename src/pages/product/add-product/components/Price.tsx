import Title from "../../../../components/title";
import { Divider } from "antd";
import FormWrapper from "../../../../components/form/FormWrapper";
import CustomInputNumber from "../../../../custom/data-entry/input/InputNumber";

const ProductAddPrice = () => {
    return (
        <div className="bg-white px-4 py-5 rounded-lg mb-5">
            <Title title="Price" />
            <Divider />

            <FormWrapper
                name="price"
                labelTitle={"Price"}
                isRequired
                rules={[
                    {
                        required: true,
                        message: "Please type price",
                    },
                ]}
            >
                <CustomInputNumber placeholder="00" prefix={"$"} />
            </FormWrapper>

            <FormWrapper
                name="originalPrice"
                labelTitle={"Original price"}
                isRequired
                rules={[
                    {
                        required: true,
                        message: "Please type original price",
                    },
                ]}
            >
                <CustomInputNumber placeholder="00" prefix={"$"} />
            </FormWrapper>
        </div>
    );
};

export default ProductAddPrice;
