import { Card, DatePicker, Divider } from "antd";
import Title from "../../../components/title";
import { ITransaction } from "../../../types";
import { FC, useState } from "react";
import ReactEcharts from "echarts-for-react";
import dayjs, { Dayjs } from "dayjs";

interface SalesProps {
    totalSales: ITransaction[];
}

interface IDataTotal {
    time: Dayjs | null,
    total: number,
}

const Sales: FC<SalesProps> = ({ totalSales }) => {
    const [dataDay, setDataDay] = useState<IDataTotal>({
        time: dayjs(),
        total: totalSales
            ?.filter((item) => dayjs(item.date).format("YYYY-MM-DD") === dayjs().format("YYYY-MM-DD"))
            ?.reduce((prev: number, curr: ITransaction) => {
                return prev + Number(curr.subTotal);
            }, 0)
    });
    const [dataMonth, setDataMonth] = useState<IDataTotal>({
        time: dayjs(),
        total: totalSales
            ?.filter((item) => dayjs(item.date).month() === new Date().getMonth())
            ?.reduce((prev: number, curr: ITransaction) => {
                return prev + Number(curr.subTotal);
            }, 0)
    });
    const [dataYear, setDataYear] = useState<IDataTotal>({
        time: dayjs(),
        total: totalSales
            ?.filter((item) => dayjs(item.date).year() === new Date().getFullYear())
            ?.reduce((prev: number, curr: ITransaction) => {
                return prev + Number(curr.subTotal);
            }, 0)
    });

    const handleChangeDay = (value: Dayjs | null) => {
        const totalDay = totalSales
            ?.filter((item) => dayjs(item?.date).format('YYYY-MM-DD') === value?.format("YYYY-MM-DD"))
            ?.reduce((prev: number, curr: ITransaction) => {
                return prev + Number(curr.subTotal);
            }, 0);
        setDataDay({
            time: value,
            total: totalDay
        });
    }

    const handleChangeMonth = (value: Dayjs | null) => {
        const monthNow = value?.month();
        const totalMonth = totalSales
            ?.filter((item) => dayjs(item.date).month() === monthNow)
            ?.reduce((prev: number, curr: ITransaction) => {
                return prev + Number(curr.subTotal);
            }, 0);
        setDataMonth({
            time: value,
            total: totalMonth
        });
    }

    const handleChangeYear = (value: Dayjs | null) => {
        const yearNow = value?.year();
        const totalYear = totalSales
            ?.filter((item) => dayjs(item.date).year() === yearNow)
            ?.reduce((prev: number, curr: ITransaction) => {
                return prev + Number(curr.subTotal);
            }, 0);
        setDataYear({
            time: value,
            total: totalYear
        });
    }

    const dataDays = {
        grid: { top: 20, right: 100, bottom: 20, left: 100 },
        xAxis: {
            type: "category",
            data: [dayjs(dataDay.time).format("DD-MM-YYYY")],
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                data: [dataDay.total ?? totalSales
                    ?.filter((item) => dayjs(item.date).format("YYYY-MM-DD") === dayjs().format("YYYY-MM-DD"))
                    ?.reduce((prev: number, curr: ITransaction) => {
                        return prev + Number(curr.subTotal);
                    }, 0)],
                type: "bar",
                smooth: true,
            },
        ],
        tooltip: {
            trigger: "axis",
        },
    };
    const dataMonths = {
        grid: { top: 20, right: 100, bottom: 20, left: 100 },
        xAxis: {
            type: "category",
            data: [dayjs(dataMonth?.time).format("MM-YYYY")],
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                data: [dataMonth.total ?? totalSales
                    ?.filter((item) => dayjs(item.date).month() === new Date().getMonth())
                    ?.reduce((prev: number, curr: ITransaction) => {
                        return prev + Number(curr.subTotal);
                    }, 0)],
                type: "bar",
                smooth: true,
            },
        ],
        tooltip: {
            trigger: "axis",
        },
    };
    const dataYears = {
        grid: { top: 20, right: 100, bottom: 20, left: 100 },
        xAxis: {
            type: "category",
            data: [dayjs(dataYear?.time).format("YYYY")],
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                data: [dataYear.total ?? totalSales
                    ?.filter((item) => dayjs(item.date).year() === new Date().getFullYear())
                    ?.reduce((prev: number, curr: ITransaction) => {
                        return prev + Number(curr.subTotal);
                    }, 0)],
                type: "bar",
                smooth: true,
            },
        ],
        tooltip: {
            trigger: "axis",
        },
    };

    return (
        <Card className="mt-4">
            <Title title="Sales" />
            <Divider />
            <>
                <div className="flex items-center gap-5">
                    <h2>Day</h2>
                    <DatePicker
                        className="w-[200px]"
                        onChange={handleChangeDay}
                        format={"DD-MM-YYYY"}
                        value={dataDay.time}
                    />
                </div>
                <ReactEcharts
                    option={dataDays}
                    style={{ width: "100%", height: "300px" }}
                ></ReactEcharts>
            </>
            <Divider />
            <>
                <div className="flex items-center gap-5">
                    <h2>Month</h2>
                    <DatePicker
                        className="w-[200px]"
                        onChange={handleChangeMonth}
                        picker="month"
                        format={"MM-YYYY"}
                        value={dataMonth.time}
                    />
                </div>
                <ReactEcharts
                    option={dataMonths}
                    style={{ width: "100%", height: "300px" }}
                ></ReactEcharts>
            </>
            <Divider />
            <>
                <div className="flex items-center gap-5">
                    <h2>Year</h2>
                    <DatePicker
                        className="w-[200px]"
                        onChange={handleChangeYear}
                        picker="year"
                        value={dataYear.time}
                    />
                </div>
                <ReactEcharts
                    option={dataYears}
                    style={{ width: "100%", height: "300px" }}
                ></ReactEcharts>
            </>
        </Card>
    );
};

export default Sales;
