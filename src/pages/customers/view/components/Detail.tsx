import React, { FC } from "react";
import { IUser } from "../../../../types";
import Title from "../../../../components/title";
import { genUploadUrl } from "../../../../helpers";

interface ViewDetailBuyerProps {
    user?: IUser;
}

const ViewDetailBuyer: FC<ViewDetailBuyerProps> = ({ user }) => {
    return (
        <>
            <div className="flex items-center justify-between mb-5">
                <Title title="Detail buyer" />
            </div>

            <div className="flex items-center gap-3">
                <img
                    src={genUploadUrl(user?.avatar)}
                    alt="Avatar"
                    className="w-[150px] h-[150px] object-cover rounded-full"
                />
                <div className="flex justify-start h-[150px] flex-col">
                    <p className="text-2xl">
                        {user?.firstname} {user?.lastname}
                    </p>

                    <div className="h-[50px]"></div>

                    <div className="grid grid-cols-12">
                        <div className="col-span-4">
                            <p className="text-gray-400 mb-2">EMAIL ADDRESS</p>
                            <p>{user?.email}</p>
                        </div>
                        <div className="col-span-4">
                            <p className="text-gray-400 mb-2">PHONE NUMBER</p>
                            <p>{user?.phoneNumber}</p>
                        </div>
                        <div className="col-span-4">
                            <p className="text-gray-400 mb-2">
                                COMPLETE ADDRESS
                            </p>
                            <p>{`${user?.address}. ${user?.district}, ${user?.province}, ${user?.city}, ${user?.country}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewDetailBuyer;
