import {
  CartesianGrid,
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { colors } from 'theme';
import { getCurrencyPrice, getChartsDate } from 'utils/functions';
import Styled from './styled';

const dayOptions = [1, 14, 30, 90, 365, 'max'];
const getButtonText = option => {
  if (option === 1) {
    return `${option} day`;
  }

  if (option === 'max') {
    return 'Max';
  }

  return `${option} days`;
};

const CoinCharts = ({ charts, days, onClick }) => {
  if (!charts?.length) return null;

  return (
    <>
      <Styled.Label>Price chart</Styled.Label>
      <ResponsiveContainer height={420} width="100%">
        <LineChart
          data={charts}
          height={400}
          margin={{
            top: 5,
            right: 50,
            left: 50,
            bottom: 5
          }}
          width={500}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={date => getChartsDate(date, days)}
          />
          <YAxis tickFormatter={number => getCurrencyPrice(number)} />
          <Tooltip formatter={number => getCurrencyPrice(number)} />
          <Line
            dataKey="price"
            fill={colors.green}
            name="Price"
            stroke={colors.green}
            type="monotone"
          />
        </LineChart>
      </ResponsiveContainer>
      <Styled.Buttons>
        {dayOptions.map(option => (
          <Styled.Button
            isActive={days === option}
            onClick={() => onClick(option)}
            type="button">
            {getButtonText(option)}
          </Styled.Button>
        ))}
      </Styled.Buttons>
    </>
  );
};

export default CoinCharts;
