import { Button, Divider, Modal } from "antd";
import React, { useState } from "react";
import UpdatePassword from "./UpdatePassword";
import Title from "../../../components/title";

const SettingPageAccount = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="bg-white p-5 rounded-lg shadow-sm">
                <Title title="Manage account" />
                <Divider />
                <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-1 uppercase text-gray-400 font-medium">
                        Email
                    </div>
                    <div className="col-span-1 uppercase text-gray-400 font-medium">
                        dat09ohyeah@mail.com
                    </div>
                    <div className="col-span-1 uppercase text-gray-400 font-medium text-end"></div>
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
                        <Button size="large" onClick={handleOpen}>
                            Change Password
                        </Button>
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onCancel={handleClose}
                destroyOnClose
                title={<Title title="Edit password" className="mb-4" />}
                footer={null}
            >
                <UpdatePassword handleClose={handleClose} />
            </Modal>
        </>
    );
};

export default SettingPageAccount;
