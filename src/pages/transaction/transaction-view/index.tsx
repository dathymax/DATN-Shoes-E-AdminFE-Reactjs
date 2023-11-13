import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CustomForm from '../../../custom/data-entry/form';
import { Form } from 'antd';
import TransactionDetail from './components/TransactionDetail';
import PurchasedProduct from './components/PurchasedProduct';
import Shipping from '../components/Shipping';
import { TransactionApis } from '../../../apis/transaction';
import dayjs from 'dayjs';

const TransactionViewPage = () => {
    const { id } = useParams();
    const [form] = Form.useForm();
    const { getById } = TransactionApis;

    useEffect(() => {
        getById(id).then(response => {
            form.setFieldsValue({
                ...response?.data,
                date: dayjs(response?.data?.date),
            })
        }).catch(() => { })
    }, [id])

    return (
        <CustomForm form={form} disabled>
            <div className="flex items-center justify-between mb-3">
                <h1 className="font-medium">Transaction</h1>
            </div>
            <TransactionDetail />

            <Shipping />

            <PurchasedProduct />
        </CustomForm>
    )
}

export default TransactionViewPage