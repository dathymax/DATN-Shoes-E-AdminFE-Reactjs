import React, { useEffect, useState } from "react";
import CustomTable from "../../../custom/data-display/table";
import Title from "../../../components/title";
import { Button } from "antd";
import { FiPlus } from "react-icons/fi";
import { columns } from "./constants/columns";
import { ProductApis } from "../../../apis/product";
import { useNavigate } from "react-router-dom";

const ProductListPage = () => {
    const navigate = useNavigate();
    const { getAllProducts } = ProductApis;
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        getAllProducts().then((response) => {
            console.log(response);
            setDataSource(response?.data);
        });
    }, []);

    return (
        <div className="bg-white px-4 py-5 rounded-lg">
            <div className="flex items-center justify-between mb-5">
                <Title title="Product list" />

                <div className="flex items-center justify-center gap-3">
                    <Button
                        size="large"
                        type="primary"
                        className="flex items-center justify-center gap-2"
                        onClick={() => navigate("/products/add-product")}
                    >
                        <FiPlus className="text-[20px]" />
                        Add product
                    </Button>
                </div>
            </div>
            <CustomTable columns={columns} dataSource={dataSource} />
        </div>
    );
};

export default ProductListPage;
