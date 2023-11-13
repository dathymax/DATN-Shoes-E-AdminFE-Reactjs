import Title from "../../../../components/title";
import { Divider } from "antd";
import FormWrapper from "../../../../components/form/FormWrapper";
import CustomInput from "../../../../custom/data-entry/input/Input";
import CustomInputNumber from "../../../../custom/data-entry/input/InputNumber";
import CustomSelect from "../../../../custom/data-entry/select";

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
                <CustomInputNumber placeholder="00" />
            </FormWrapper>

            <FormWrapper
                name="discountType"
                labelTitle={"Discount Type"}
                labelDescription={
                    "Set your discount type. You can choose the type of discount with a percent or cash discount."
                }
            >
                <CustomSelect
                    placeholder="Select type"
                    options={[
                        {
                            label: "Discount 1",
                            value: "discount1",
                        },
                    ]}
                />
            </FormWrapper>

            <FormWrapper
                name="setDiscount"
                labelTitle={"Set Discount"}
                labelDescription={
                    "Please fill in how many discounts you will give for this products."
                }
                noDivider
            >
                <CustomInput placeholder="Enter nominal discount" />
            </FormWrapper>
        </div>
    );
};

export default ProductAddPrice;
