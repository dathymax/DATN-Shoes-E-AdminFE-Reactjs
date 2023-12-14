import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomForm from "../../../custom/data-entry/form";
import { Button, Form } from "antd";
import TransactionDetail from "./components/TransactionDetail";
import PurchasedProduct from "./components/PurchasedProduct";
import Shipping from "../components/Shipping";
import { TransactionApis } from "../../../apis/transaction";
import dayjs from "dayjs";
import { useAppContext } from "../../../contexts/AppContext";
import { ITransaction } from "../../../types";

const TransactionViewPage = () => {
    const { id } = useParams();
    const [form] = Form.useForm();
    const { getById, updateTransactionById } = TransactionApis;
    const { openNotiError, openNotiSuccess } = useAppContext();
    const navigate = useNavigate();
    const [transaction, setTransaction] = useState<ITransaction>();

    useEffect(() => {
        getById(id)
            .then((response) => {
                form.setFieldsValue({
                    ...response?.data,
                    date: dayjs(response?.data?.date),
                });
                setTransaction(response?.data);
            })
            .catch(() => {});
    }, [id]);

    const handleTransferProgress = () => {
        updateTransactionById(id, { status: "delivering" })
            .then(() => {
                openNotiSuccess("Transfer progress");
                navigate("/transaction/manage-transaction");
            })
            .catch(() => {
                openNotiError("Transfer progress");
            });
    };

    return (
        <>
            <div className="flex items-center justify-between mb-3">
                <h1 className="font-medium">Transaction</h1>
                {transaction?.status !== "packed" && (
                    <Button
                        type="primary"
                        size="large"
                        onClick={handleTransferProgress}
                    >
                        Transfer progress
                    </Button>
                )}
            </div>
            <CustomForm form={form} disabled>
                <TransactionDetail />

                <Shipping />

                <PurchasedProduct products={transaction?.purchasedProducts} />
            </CustomForm>
        </>
    );
};

export default TransactionViewPage;
