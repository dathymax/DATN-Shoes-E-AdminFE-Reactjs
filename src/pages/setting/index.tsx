import React from 'react'
import SettingPageProfile from './components/Profile'
import SettingPageAccount from './components/Account'

const SettingPage = () => {
    return (
        <div>
            <h1 className='font-medium mb-4 text-[25px] leading-[25px]'>Settings</h1>
            <SettingPageProfile />
            <div className="h-5"></div>
            <SettingPageAccount />
        </div>
    )
}

export default SettingPage