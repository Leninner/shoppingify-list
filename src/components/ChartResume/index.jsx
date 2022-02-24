import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { StyledChartResume } from './styles';

const data = [
  { name: 'January', uv: 400, pv: 2400, amt: 2400 },
  { name: 'February', uv: 300, pv: 2100, amt: 2000 },
  { name: 'March', uv: 3000, pv: 200, amt: 2200 },
  { name: 'April', uv: 200, pv: 2600, amt: 2200 },
  { name: 'May', uv: 278, pv: 1500, amt: 2000 },
  { name: 'June', uv: 189, pv: 2100, amt: 2200 },
  { name: 'July', uv: 189, pv: 2100, amt: 2200 },
];

export const ChartResume = () => {
  return (
    <StyledChartResume>
      <h1>Montly Summary</h1>
      <ResponsiveContainer width='100%' height='70%'>
        <LineChart data={data}>
          <Line type='monotone' dataKey='uv' stroke='#F9A109' />
          <CartesianGrid stroke='#E0E0E0' />
          <XAxis dataKey='name' />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </StyledChartResume>
  );
};
