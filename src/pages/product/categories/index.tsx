import React, { useEffect } from "react";
import CustomTable from "../../../custom/data-display/table";
import { columns } from "./constants/columns";
import { CategoryApis } from "../../../apis/category";
import { ICategory } from "../../../types";
import { mapStatusToTag } from "../list";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { setAllCategory } from "../../../store/features/category";

const ProductCategoriesPage = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector((state) => state.category.categories);

    const mapData = (data?: ICategory[]) => {
        if (!data || data?.length <= 0) return [];

        return data?.map((category) => {
            return {
                ...category,
                category: category.name,
                status: mapStatusToTag(category.status),
            };
        });
    };

    useEffect(() => {
        CategoryApis.getAllCategories()
            .then((response) => {
                dispatch(setAllCategory(response?.data));
            })
            .catch(() => {
                dispatch(setAllCategory([]));
            });
    }, []);

    return (
        <CustomTable
            linkTo="/products/update-category"
            tableTitle="Categories list"
            addBtnTitle="Add category"
            addBtnLink="/products/add-category"
            columns={columns}
            dataSource={mapData(categories)}
        />
    );
};

export default ProductCategoriesPage;
