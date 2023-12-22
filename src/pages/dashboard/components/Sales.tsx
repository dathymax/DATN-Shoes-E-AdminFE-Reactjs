import { Card } from "antd";
import Title from "../../../components/title";
import { ITransaction } from "../../../types";
import { FC, useMemo } from "react";
import ReactEcharts from "echarts-for-react";
import dayjs from "dayjs";

interface SalesProps {
    totalSales: ITransaction[];
}

const Sales: FC<SalesProps> = ({ totalSales }) => {
    const data = useMemo(() => {
        return {
            grid: { top: 20, right: 40, bottom: 20, left: 40 },
            xAxis: {
                type: "category",
                data: totalSales?.map((sale) =>
                    dayjs(sale.date).format("DD/MM/YYYY")
                ),
            },
            yAxis: {
                type: "value",
            },
            series: [
                {
                    data: totalSales?.map((sale) => sale.subTotal),
                    type: "bar",
                    smooth: true,
                },
            ],
            tooltip: {
                trigger: "axis",
            },
        };
    }, [totalSales]);

    return (
        <Card className="mt-4">
            <Title title="Sales" />
            <ReactEcharts
                option={data}
                style={{ width: "100%", height: "300px" }}
            ></ReactEcharts>
        </Card>
    );
};

export default Sales;
