import React, { useEffect } from "react";
import CustomTable from "../../../custom/data-display/table";
import { columns } from "./constants/columns";
import { ProductApis } from "../../../apis/product";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { setAllProduct } from "../../../store/features/products";
import { IProduct } from "../../../types";
import { Tag } from "antd";
import { UPLOAD_URL } from "../../../constant";

export const mapStatusToTag = (status: string | boolean | React.ReactNode) => {
    switch (status) {
        case "active":
            return <Tag color="green" className="capitalize">{status}</Tag>
        case "inactive":
            return <Tag color="red" className="capitalize">{status}</Tag>
        default:
            break;
    }
}

const ProductListPage = () => {
    const dispatch = useAppDispatch();
    const { getAllProducts } = ProductApis;
    const items = useAppSelector(state => state.products.items);

    const mapData = (products: IProduct[]) => {
        if (!products || products.length <= 0) return [];

        return products.map(product => {
            return {
                ...product,
                product: product?.images && product?.images?.length > 0 && <div className="flex items-start gap-3">
                    <img
                        className="w-[100px] h-[100px] rounded-lg object-cover"
                        src={`${UPLOAD_URL}/${product?.images?.[0]?.fileName}`} alt="Image"
                    />
                    <div className="font-medium">
                        <p>{product.name}</p>
                        <p>{product.category}</p>
                    </div>
                </div>,
                status: mapStatusToTag(product.status),
                key: product._id
            }
        })
    }

    useEffect(() => {
        getAllProducts().then((response) => {
            dispatch(setAllProduct(response?.data));
        });
    }, []);

    return (
        <CustomTable
            tableTitle="Product list"
            addBtnTitle="Add product"
            linkTo="/products/update-product"
            addBtnLink="/products/add-product"
            columns={columns}
            dataSource={mapData(items)}
        />
    );
};

export default ProductListPage;
