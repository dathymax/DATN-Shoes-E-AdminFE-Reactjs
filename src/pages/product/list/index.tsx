import React, { useEffect, useState } from "react";
import CustomTable from "../../../custom/data-display/table";
import { columns } from "./constants/columns";
import { ProductApis } from "../../../apis/product";

const ProductListPage = () => {
    const { getAllProducts } = ProductApis;
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        getAllProducts().then((response) => {
            setDataSource(response?.data);
        });
    }, []);

    return (
        <CustomTable
            tableTitle="Product list"
            addBtnTitle="Add product"
            linkTo="/products/update-product"
            addBtnLink="/products/add-product"
            columns={columns}
            dataSource={dataSource}
        />
    );
};

export default ProductListPage;
