import Title from "../../../../components/title";
import { Divider, Switch } from "antd";
import FormWrapper from "../../../../components/form/FormWrapper";
import CustomInput from "../../../../custom/data-entry/input/Input";
import CustomInputTextarea from "../../../../custom/data-entry/input/InputTextarea";
import CustomSelect from "../../../../custom/data-entry/select";
import CustomInputNumber from "../../../../custom/data-entry/input/InputNumber";
import ProductUploadImage from "./Upload";
import { useAppSelector } from "../../../../store/store";

const ProductAddInformation = () => {
    const categories = useAppSelector((state) => state.category.categories);
    const colors = useAppSelector((state) => state.color.colors);
    const sizes = useAppSelector((state) => state.size.sizes);

    return (
        <div className="bg-white px-4 py-5 rounded-lg mb-5">
            <Title title="Product information" />
            <Divider />
            <FormWrapper
                name="name"
                labelTitle={"Product name"}
                labelDescription={
                    "Do not exceed 20 characters when entering the product name."
                }
                isRequired
                rules={[
                    {
                        required: true,
                        message: "Please type product name",
                    },
                ]}
            >
                <CustomInput placeholder="Enter product name" />
            </FormWrapper>

            <FormWrapper
                name="quantity"
                labelTitle={"Quantity"}
                isRequired
                rules={[
                    {
                        required: true,
                        message: "Please type quantity",
                    },
                ]}
            >
                <CustomInputNumber placeholder="00" />
            </FormWrapper>

            <FormWrapper
                name="description"
                labelTitle={"Description"}
                labelDescription={
                    "Set a description on product to detail your product and better visibility"
                }
            >
                <CustomInputTextarea placeholder="Description" />
            </FormWrapper>

            <FormWrapper
                name="category"
                labelTitle={"Category"}
                labelDescription={
                    "Please select your product category from the list provided"
                }
            >
                <CustomSelect
                    placeholder="Select Category"
                    options={categories.map((category) => ({
                        label: category.name,
                        value: category.name,
                    }))}
                />
            </FormWrapper>

            <FormWrapper
                name="colors"
                labelTitle={"Colors"}
                isRequired
                labelDescription={
                    "Please select your product color from the list provided"
                }
                rules={[
                    {
                        required: true,
                        message: "Please select color",
                    },
                ]}
            >
                <CustomSelect
                    placeholder="Select color"
                    options={colors.map((color) => ({
                        label: (
                            <div className="flex items-center justify-between gap-2">
                                <p className="capitalize">{color.name}</p>
                                <div
                                    className="w-[20px] h-[20px] rounded-md"
                                    style={{ background: color.name }}
                                />
                            </div>
                        ),
                        value: color.name,
                    }))}
                />
            </FormWrapper>

            <FormWrapper
                name="sizes"
                labelTitle={"Sizes"}
                labelDescription={
                    "Please select your product size from the list provided"
                }
                isRequired
                rules={[
                    {
                        required: true,
                        message: "Please select size",
                    },
                ]}
            >
                {/* <CustomSelect
                    placeholder="Select size"
                    options={sizes.map((size) => ({
                        label: size.size,
                        value: size.size,
                    }))}
                /> */}
                <CustomInputNumber min={1} placeholder="Type size" />
            </FormWrapper>

            <FormWrapper
                name="status"
                labelTitle={"Status"}
                labelDescription={
                    "Set a status for your product to determine whether your product is displayed or not"
                }
                valuePropName="checked"
            >
                <Switch />
            </FormWrapper>

            <ProductUploadImage />
        </div>
    );
};

export default ProductAddInformation;
