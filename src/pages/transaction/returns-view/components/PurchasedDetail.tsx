import React from 'react'
import Title from '../../../../components/title'
import { Divider } from 'antd'
import Purchased from '../../components/Purchased'

const PurchasedDetail = () => {
    return (
        <div className="bg-white rounded-lg p-5">
            <Title title="Purchased Detail" />
            <Divider />

            <Purchased />
        </div>
    )
}

export default PurchasedDetail