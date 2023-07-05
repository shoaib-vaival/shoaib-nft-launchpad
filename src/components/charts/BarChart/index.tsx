import React from "react";
import { QUERY_KEYS } from "../../../../src/hooks/queryKeys";
import { useQuery } from "../../../../src/hooks/useQuery";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ApiUrl } from "../../../apis/apiUrl";

// const data = [
//   {
//     name: "Page A",
//     uv: 590,
//     pv: 800,
//     amt: 1400,
//     cnt: 490
//   },
//   {
//     name: "Page B",
//     uv: 868,
//     pv: 967,
//     amt: 1506,
//     cnt: 590
//   },
//   {
//     name: "Page C",
//     uv: 1397,
//     pv: 1098,
//     amt: 989,
//     cnt: 350
//   },
//   {
//     name: "Page D",
//     uv: 1480,
//     pv: 1200,
//     amt: 1228,
//     cnt: 480
//   },
//   {
//     name: "Page E",
//     uv: 1520,
//     pv: 1108,
//     amt: 1100,
//     cnt: 460
//   },
//   {
//     name: "Page F",
//     uv: 1400,
//     pv: 680,
//     amt: 1700,
//     cnt: 380
//   }
// ];

const BarChart = () => {
  const { data } = useQuery<any>({
    queryKey: [QUERY_KEYS.GET_BAR_CHART],
    url: ApiUrl.GET_BAR_CHART,
  });

  // console.log("datadatadata", data)

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="date" scale="band" />
        <YAxis dataKey="volume" />
        <YAxis
          dataKey="avgPrice"
          yAxisId="right"
          orientation="right"
          stroke="#82ca9d"
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="volume" barSize={20} fill="#413ea0" />
        {/* <XAxis dataKey="date" scale="band" /> */}
        <Line type="monotone" dataKey="volume" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
