export interface IUser {
    _id?: string;
    id?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    username?: string;
    password?: string;
    role?: string;
    phoneNumber?: string;
    address?: string;
    addressLabel?: string;
    country?: string;
    province?: string;
    district?: string;
    postalCode?: string;
    city?: string;
    avatar?: string;
    updatedAt?: Date | string;
    promoCodes?: IPromoCode[];
    extCode?: string;
}

export interface IProduct {
    _id?: string;
    id?: string | number;
    images?: IImage[];
    price?: string | number;
    isNew?: boolean;
    isLiked?: boolean;
    isSoldOut?: boolean;
    stock?: number;
    name?: string | React.ReactNode;
    rate?: number;
    shoeType?: string;
    colors?: string[];
    sizes?: number[];
    description?: string;
    category?: string;
    status?: string | boolean | React.ReactNode;
    discountType?: string;
    setDiscount?: string;
    extCode?: string;
    quantity?: string | number;
    originalPrice?: number;
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

export interface ICategory {
    _id?: string;
    id?: string | number;
    name?: string;
    description?: string;
    status?: string;
    thumbnail?: string;
    extCode?: string;
}

export interface IPurchasedProduct {
    name?: string;
    category?: string;
    sku?: string;
    size?: string;
    image?: string;
    color?: string;
    quantity?: number;
    price?: number | string;
    total?: number | string;
    transactionExt?: string;
    originalPrice?: number;
}

export interface ITransaction {
    id?: string;
    _id?: string;
    transactionNumber?: number | string;
    date?: Date | string;
    invoice?: string;
    customerName?: string;
    phoneNumber?: string | number;
    status?: string;
    receiptNumber?: string | number;
    address?: string;
    payment?: string;
    purchasedProducts?: IPurchasedProduct[];
    discount?: string;
    shipping?: string | number;
    tax?: string | number;
    subTotal?: string | number;
    transactionExt?: string;
    extCode?: string;
}

export interface IReturns { }

export interface IPromoCode {
    id?: string;
    _id?: string;
    discount?: number;
    name: string;
    spendTime?: number;
    isExpired?: boolean;
    createDate?: Date;
    modifiedDate?: Date;
}

export interface IColor {
    name?: string;
    id?: string;
    _id?: string;
    preview?: React.ReactNode;
}

export interface ISize {
    size?: string;
    id?: string;
    _id?: string;
}
