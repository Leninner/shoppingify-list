import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { StyledChartResume } from './styles';
import { useSelector } from 'react-redux';

// Items => Cantidad de items per month

export const ChartResume = () => {
  const { data } = useSelector((state) => state.ResumeReducer);

  return (
    <StyledChartResume>
      <h1>Montly Summary</h1>
      <ResponsiveContainer width='100%' height='70%'>
        <LineChart data={data}>
          <Line type='monotone' dataKey='Items' stroke='#F9A109' />
          <CartesianGrid stroke='#bbbbbb' strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </StyledChartResume>
  );
};
