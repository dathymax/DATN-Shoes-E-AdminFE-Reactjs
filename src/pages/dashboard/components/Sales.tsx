import { Card, Divider } from "antd";
import Title from "../../../components/title";
import { ITransaction } from "../../../types";
import { FC, useMemo } from "react";
import ReactEcharts from "echarts-for-react";
import dayjs from "dayjs";

interface SalesProps {
    totalSales: ITransaction[];
}

const Sales: FC<SalesProps> = ({ totalSales }) => {
    const monthNow = new Date().getMonth();
    const totalThisMonth = totalSales
        ?.filter((item) => dayjs(item.date).month() === monthNow)
        ?.reduce((prev: number, curr: ITransaction) => {
            return prev + Number(curr.subTotal);
        }, 0);
    const yearNow = new Date().getFullYear();
    const totalThisYear = totalSales
        ?.filter((item) => dayjs(item.date).year() === yearNow)
        ?.reduce((prev: number, curr: ITransaction) => {
            return prev + Number(curr.subTotal);
        }, 0);
    const totalDays: ITransaction[] = Array.from(
        totalSales?.reduce(
            (accumulator: Map<string, number>, currentValue: ITransaction) => {
                const existingTotal =
                    accumulator.get(
                        dayjs(currentValue?.date).format("DD/MM/YYYY")
                    ) || 0;
                accumulator.set(
                    dayjs(currentValue?.date).format("DD/MM/YYYY"),
                    Number(existingTotal) + Number(currentValue.subTotal)
                );
                return accumulator;
            },
            new Map<string, number>()
        )
    ).map(([date, subTotal]) => ({ date, subTotal }));

    const dataDays = useMemo(() => {
        return {
            grid: { top: 20, right: 40, bottom: 20, left: 40 },
            xAxis: {
                type: "category",
                data: totalDays?.map((sale) => sale.date),
            },
            yAxis: {
                type: "value",
            },
            series: [
                {
                    data: totalDays?.map((sale) => sale.subTotal),
                    type: "bar",
                    smooth: true,
                },
            ],
            tooltip: {
                trigger: "axis",
            },
        };
    }, [totalSales]);
    const dataMonths = useMemo(() => {
        return {
            grid: { top: 20, right: 40, bottom: 20, left: 40 },
            xAxis: {
                type: "category",
                data: [dayjs().format("MM/YYYY")],
            },
            yAxis: {
                type: "value",
            },
            series: [
                {
                    data: [totalThisMonth],
                    type: "bar",
                    smooth: true,
                },
            ],
            tooltip: {
                trigger: "axis",
            },
        };
    }, [totalSales]);
    const dataYears = useMemo(() => {
        return {
            grid: { top: 20, right: 40, bottom: 20, left: 40 },
            xAxis: {
                type: "category",
                data: [dayjs().format("YYYY")],
            },
            yAxis: {
                type: "value",
            },
            series: [
                {
                    data: [totalThisYear],
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
            <Divider />
            <>
                <h2>Days</h2>
                <ReactEcharts
                    option={dataDays}
                    style={{ width: "100%", height: "300px" }}
                ></ReactEcharts>
            </>
            <Divider />
            <>
                <h2>Months</h2>
                <ReactEcharts
                    option={dataMonths}
                    style={{ width: "100%", height: "300px" }}
                ></ReactEcharts>
            </>
            <Divider />
            <>
                <h2>Years</h2>
                <ReactEcharts
                    option={dataYears}
                    style={{ width: "100%", height: "300px" }}
                ></ReactEcharts>
            </>
        </Card>
    );
};

export default Sales;
