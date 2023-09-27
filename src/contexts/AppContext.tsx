import { Spin, notification } from 'antd';
import React, { PropsWithChildren, useContext, useMemo, useState } from 'react'

interface IAppContext {
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    openAuthen: boolean,
    setOpenAuthen: React.Dispatch<React.SetStateAction<boolean>>,
    openNotiSuccess: (title?: string, description?: string) => void,
    openNotiError: (title?: string, description?: string) => void,
}

export const AppContext = React.createContext<IAppContext | undefined>(undefined);

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error("useAppContext must be used within AppContextProvider!");
    }

    return context;
}

const AppContextProvider = ({ children }: PropsWithChildren<{}>) => {
    const [loading, setLoading] = useState(false);
    const [openAuthen, setOpenAuthen] = useState(false);
    const [api, contextHolder] = notification.useNotification();

    const openNotiSuccess = (title?: string, description?: string) => {
        api.success({
            message: `${title} successful!`,
            description: description,
            placement: "topRight",
        });
    };

    const openNotiError = (title?: string, description?: string) => {
        api.error({
            message: `${title} failed!`,
            description: description,
            placement: "topRight",
        });
    };

    const values = useMemo(() => ({
        loading, openAuthen,
        openNotiSuccess, setLoading,
        setOpenAuthen, openNotiError
    }), [loading, openAuthen])

    return (
        <AppContext.Provider value={values}>
            <Spin spinning={loading}>
                {children}
            </Spin>
            {contextHolder}
        </AppContext.Provider>
    )
}

export default AppContextProvider