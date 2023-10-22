import React, { useEffect } from 'react'
import CustomForm from '../../../custom/data-entry/form'
import { useParams } from 'react-router-dom';
import { Form } from 'antd';
import ReturnsDetail from './components/ReturnsDetail';
import ProductDetail from './components/ProductDetail';
import Shipping from '../components/Shipping';
import PurchasedDetail from './components/PurchasedDetail';
import { TransactionApis } from '../../../apis/transaction';

const ReturnsViewPage = () => {
    const { id } = useParams();
    const [form] = Form.useForm();
    const { getById } = TransactionApis;

    useEffect(() => {
        getById(id).then(response => {
            form.setFieldsValue(response?.data)
        }).catch(() => { })
    }, [id])

    return (
        <CustomForm form={form} disabled>
            <div className="flex items-center justify-between mb-3">
                <h1 className="font-medium">Returns</h1>
            </div>

            <PurchasedDetail />

            <ReturnsDetail />

            <ProductDetail />

            <Shipping />
        </CustomForm>
    )
}

export default ReturnsViewPage