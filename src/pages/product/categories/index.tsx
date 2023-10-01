import React, { useState } from "react";
import CustomTable from "../../../custom/data-display/table";
import { columns } from "./constants/columns";

const ProductCategoriesPage = () => {
    const [dataSource, setDataSource] = useState([]);

    return (
        <CustomTable
            tableTitle="Categories list"
            addBtnTitle="Add category"
            addBtnLink="/products/add-category"
            columns={columns}
            dataSource={dataSource}
        />
    );
};

export default ProductCategoriesPage;
