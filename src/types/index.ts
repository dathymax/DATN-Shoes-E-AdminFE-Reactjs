export interface IUser {
    _id?: string;
    id?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    username?: string;
    password?: string;
    role?: string;
    avatar?: string;
}

export interface IProduct {
    _id?: string;
    id?: string | number;
    img?: string;
    price?: string | number;
    isNew?: boolean;
    isLiked?: boolean;
    isSoldOut?: boolean;
    stock?: number;
    name?: string;
    rate?: number;
    shoeType?: string;
    color?: string;
    size?: number;
    description?: string;
    category?: string;
    status?: string | boolean | React.ReactNode;
    discountType?: string;
    setDiscount?: string;
}

export interface IPasswordReset {
    password?: string;
    newPassword?: string;
    confirmPassword?: string;
}

export interface IImage {
    _id?: string;
    id?: string | number;
    fileName?: string;
    fileType?: string;
    fileSize?: number;
    filePath?: string;
}