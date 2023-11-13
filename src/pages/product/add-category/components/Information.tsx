import Title from "../../../../components/title";
import { Divider, Switch } from "antd";
import FormWrapper from "../../../../components/form/FormWrapper";
import CustomInput from "../../../../custom/data-entry/input/Input";
import CustomInputTextarea from "../../../../custom/data-entry/input/InputTextarea";

const CategoryAddInformation = () => {
    return (
        <div className="bg-white px-4 py-5 rounded-lg mb-5">
            <Title title="Category information" />
            <Divider />
            <FormWrapper
                name="name"
                labelTitle={"Category name"}
                labelDescription={
                    "Do not exceed 20 characters when entering the category name."
                }
                isRequired
                rules={[
                    {
                        required: true,
                        message: "Please type category name",
                    },
                ]}
            >
                <CustomInput placeholder="Enter category name" />
            </FormWrapper>

            <FormWrapper
                name="description"
                labelTitle={"Description"}
                labelDescription={
                    "Set a description on category to detail your category and better visibility"
                }
            >
                <CustomInputTextarea placeholder="Description" />
            </FormWrapper>

            <FormWrapper
                name="status"
                labelTitle={"Status"}
                labelDescription={
                    "Set a status for your category to determine whether your category is displayed or not"
                }
                valuePropName="checked"
            >
                <Switch />
            </FormWrapper>
        </div>
    );
};

export default CategoryAddInformation;
