import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '어휘력',
    응시자: 17,
    전체평균: 17,
  },
  {
    name: '사고력',
    응시자: 25,
    전체평균: 17,
  },
  {
    name: '정보력',
    응시자: 25,
    전체평균: 25,
  },
  {
    name: '관찰력',
    응시자: 17,
    전체평균: 25,
  },
];

function Chart() {
  return (
    <ResponsiveContainer height={300}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis type="number" tickCount={5} domain={[0, 25]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="응시자" fill="#EE3497" />
        <Bar dataKey="전체평균" fill="#b0b0b0" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Chart;
