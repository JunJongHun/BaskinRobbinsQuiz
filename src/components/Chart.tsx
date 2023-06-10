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

type ChartPropsType = {
  userData: {
    name: string;
    total: number;
    vocabulary: number;
    cogitation: number;
    intelligence: number;
    observation: number;
  };
  avgData: {
    total_avg: number;
    vocabulary_avg: number;
    cogitation_avg: number;
    intelligence_avg: number;
    observation_avg: number;
  };
};

function Chart({ userData, avgData }: ChartPropsType) {
  const data = [
    {
      name: '어휘력',
      응시자: userData.vocabulary,
      전체평균: avgData.vocabulary_avg,
    },
    {
      name: '사고력',
      응시자: userData.cogitation,
      전체평균: avgData.cogitation_avg,
    },
    {
      name: '정보력',
      응시자: userData.intelligence,
      전체평균: avgData.intelligence_avg,
    },
    {
      name: '관찰력',
      응시자: userData.observation,
      전체평균: avgData.observation_avg,
    },
  ];
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
