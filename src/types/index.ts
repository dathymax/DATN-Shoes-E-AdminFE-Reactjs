export interface IUser {
    firstname?: string;
    lastname?: string;
    email?: string;
    username?: string;
    password?: string;
}

export interface IProduct {
    id?: string | number;
    img?: string;
    name?: string;
    price?: string | number;
    isNew?: boolean;
    isLiked?: boolean;
    isSoldOut?: boolean;
}
