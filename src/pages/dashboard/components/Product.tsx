import { Card } from "antd";
import { IProduct } from "../../../types";
import { FC, useMemo } from "react";
import Title from "../../../components/title";
import ReactEcharts from "echarts-for-react";

interface ProductProps {
    products: IProduct[];
}

const Product: FC<ProductProps> = ({ products }) => {
    const data = useMemo(() => {
        return {
            color: ["#FF4500", "#87CEEB", "#32CD32"],
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b}: {c} ({d}%)",
            },
            legend: {
                orient: "vertical",
                left: "left",
                data: products?.map((item) => item.name),
            },
            series: [
                {
                    name: "Value",
                    type: "pie",
                    radius: "50%",
                    center: ["50%", "60%"],
                    data: products?.map((product) => ({
                        name: product.name,
                        value: product.stock,
                    })),
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: "rgba(0, 0, 0, 0.5)",
                        },
                    },
                },
            ],
        };
    }, [products]);

    return (
        <Card className="mt-4">
            <Title title="Products" />
            <div className="chart-container mt-3">
                <ReactEcharts option={data} style={{ height: "400px" }} />
            </div>
        </Card>
    );
};

export default Product;
