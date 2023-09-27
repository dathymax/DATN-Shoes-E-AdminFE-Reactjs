import { Input } from 'antd'
import React from 'react'
import { BsSearch } from "react-icons/bs"

const InputSearch = () => {
    return (
        <div className='bg-gray-100 h-full rounded-lg flex items-center px-3 w-[300px]'>
            <BsSearch />
            <Input bordered={false} placeholder='What are you looking for' />
        </div>
    )
}

export default InputSearch