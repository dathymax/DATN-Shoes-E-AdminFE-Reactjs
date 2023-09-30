import React, { FC } from "react";

interface TitleProps {
    title?: React.ReactNode;
    className?: string;
}

const Title: FC<TitleProps> = ({ title, className }) => {
    return (
        <div className={`${className} flex items-center gap-3`}>
            <div className="rounded-lg h-[25px] w-[6px] bg-black"></div>
            <h2>{title}</h2>
        </div>
    );
};

export default Title;
