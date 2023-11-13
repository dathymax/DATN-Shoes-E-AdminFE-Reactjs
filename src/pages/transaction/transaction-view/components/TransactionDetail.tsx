import Title from '../../../../components/title'
import { Divider } from 'antd'
import Purchased from '../../components/Purchased'

const TransactionDetail = () => {
    return (
        <div className="bg-white rounded-lg p-5 mb-5">
            <Title title="Transaction Detail" />
            <Divider />

            <Purchased />
        </div>
    )
}

export default TransactionDetail