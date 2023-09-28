import { Button, Divider } from 'antd'
import React from 'react'

const SettingPageAccount = () => {
    return (
        <div className="bg-white p-5 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
                <div className='rounded-lg h-[25px] w-[6px] bg-black'></div>
                <h2>Manage account</h2>
            </div>
            <Divider />
            <div className="grid grid-cols-3 gap-3">
                <div className="col-span-1 uppercase text-gray-400 font-medium">
                    Email
                </div>
                <div className="col-span-1 uppercase text-gray-400 font-medium">
                    dat09ohyeah@mail.com
                </div>
                <div className="col-span-1 uppercase text-gray-400 font-medium text-end">
                    <Button size='large'>
                        Change Email
                    </Button>
                </div>
            </div>
            <Divider />
            <div className="grid grid-cols-3 gap-3">
                <div className="col-span-1 uppercase text-gray-400 font-medium">
                    PASSWORD
                </div>
                <div className="col-span-1 uppercase text-gray-400 font-medium">
                    **********
                </div>
                <div className="col-span-1 uppercase text-gray-400 font-medium text-end">
                    <Button size='large'>
                        Change Password
                    </Button>
                </div>
            </div>
            <Divider />
            <div className="grid grid-cols-3 gap-3">
                <div className="col-span-1 uppercase text-gray-400 font-medium">
                    LOG OUT
                </div>
                <div className="col-span-1 uppercase text-gray-400 font-medium">
                </div>
                <div className="col-span-1 uppercase text-gray-400 font-medium text-end">
                    <Button danger>
                        Log out
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SettingPageAccount