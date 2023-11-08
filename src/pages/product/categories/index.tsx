import React, { useEffect } from "react";
import CustomTable from "../../../custom/data-display/table";
import { columns } from "./constants/columns";
import { CategoryApis } from "../../../apis/category";
import { ICategory } from "../../../types";
import { mapStatusToTag } from "../list";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { setAllCategory } from "../../../store/features/category";
import { message } from "antd";

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

    const getData = () => {
        CategoryApis.getAllCategories()
            .then((response) => {
                dispatch(setAllCategory(response?.data));
            })
            .catch(() => {
                dispatch(setAllCategory([]));
            });
    }

    useEffect(() => {
        getData();
    }, []);

    const handleDelete = (id?: string) => {
        CategoryApis.deleteCategoryById(id).then(() => {
            message.success("Delete category success!");
            getData();
        }).catch((error) => {
            const { response } = error;

            message.error(response?.data?.message);
        })
    }

    return (
        <CustomTable
            typeAdd="link"
            linkTo="/products/update-category"
            tableTitle="Categories list"
            addBtnTitle="Add category"
            addBtnLink="/products/add-category"
            columns={columns}
            dataSource={mapData(categories)}
            onDelete={handleDelete}
        />
    );
};

export default ProductCategoriesPage;
