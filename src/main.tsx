import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import AppContextProvider from './contexts/AppContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ConfigProvider theme={{
                token: {
                    colorPrimary: "#5E59FF"
                }
            }}>
                <AppContextProvider>
                    <App />
                </AppContextProvider>
            </ConfigProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
