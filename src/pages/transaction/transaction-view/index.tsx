import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CustomForm from '../../../custom/data-entry/form';
import { Button, Form, message } from 'antd';
import TransactionDetail from './components/TransactionDetail';
import PurchasedProduct from './components/PurchasedProduct';
import Shipping from '../components/Shipping';
import { TransactionApis } from '../../../apis/transaction';
import dayjs from 'dayjs';
import { useAppContext } from '../../../contexts/AppContext';

const TransactionViewPage = () => {
    const { id } = useParams();
    const [form] = Form.useForm();
    const { getById, updateTransactionById } = TransactionApis;
    const { openNotiError, openNotiSuccess } = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        getById(id).then(response => {
            form.setFieldsValue({
                ...response?.data,
                date: dayjs(response?.data?.date),
            })
        }).catch(() => { })
    }, [id])

    const handleTransferProgress = () => {
        updateTransactionById(id, { status: "delivering" })
            .then(() => {
                openNotiSuccess("Transfer progress");
                navigate("/transaction/manage-transaction")
            })
            .catch(() => {
                openNotiError("Transfer progress");
            })
    }

    return (
        <>
            <div className="flex items-center justify-between mb-3">
                <h1 className="font-medium">Transaction</h1>
                <Button type='primary' size='large' onClick={handleTransferProgress}>
                    Transfer progress
                </Button>
            </div>
            <CustomForm form={form} disabled>
                <TransactionDetail />

                <Shipping />

                <PurchasedProduct />
            </CustomForm>
        </>
    )
}

export default TransactionViewPage