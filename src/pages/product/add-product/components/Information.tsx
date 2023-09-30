import React from "react";
import Title from "../../../../components/title";
import { Divider, Switch } from "antd";
import FormWrapper from "../../../../components/form/FormWrapper";
import CustomInput from "../../../../custom/data-entry/input/Input";
import CustomInputTextarea from "../../../../custom/data-entry/input/InputTextarea";
import CustomSelect from "../../../../custom/data-entry/select";
import CustomInputNumber from "../../../../custom/data-entry/input/InputNumber";

const ProductAddInformation = () => {
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
                    options={[
                        {
                            label: "Category 1",
                            value: "category1",
                        },
                    ]}
                />
            </FormWrapper>

            <FormWrapper name="size" labelTitle={"Size"}>
                <CustomInputNumber placeholder="00" />
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

            <FormWrapper
                name="photos"
                labelTitle={"Photo Product"}
                labelDescription={
                    "Recommended minimum width 1080px X 1080px, with a max size of 5MB, only *.png, *.jpg and *.jpeg image files are accepted"
                }
                noDivider
            ></FormWrapper>
        </div>
    );
};

export default ProductAddInformation;
