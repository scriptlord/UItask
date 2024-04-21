import React from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

type ChartData = {
  date: string;
  value: number;
};

const data: ChartData[] = [
  { date: 'Jan 17', value: 9600 },
  { date: 'Jan 25', value:  8550},
  { date: 'Feb 1', value: 9700 },
  { date: 'Feb 7', value: 7650 },
  { date: 'Feb 15', value: 9680 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '5px', border: '1px solid #ccc' }}>
        <label>{`${label} : $${payload[0].value.toFixed(2)}`}</label>
      </div>
    );
  }

  return null;
};

const MyLineChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.2}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical strokeDasharray="3 3" horizontal={false} />
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'currentColor', fontFamily: 'Arial' }}
        />
        <YAxis hide={true} />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="linear"
          dataKey="value"
          stroke="#5F2EF4"
          fillOpacity={1}
          fill="url(#colorValue)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MyLineChart;




