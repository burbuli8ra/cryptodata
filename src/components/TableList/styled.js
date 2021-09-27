import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';
import { colors } from 'theme';

const getLabelBG = status => {
  if (status === 'high') return colors.green;
  if (status === 'low') return colors.red;
  return colors.cloudy;
};

const FieldRules = `
  align-items: center;
  cursor: default;
  display: flex;
  justify-content: center;
`;

const Label = styled.div`
  background-color: ${({ status }) => getLabelBG(status)};
  border-radius: 16px;
  line-height: 1;
  font-size: 12px;
  font-weight: 400;
  padding: 10px;
  width: fit-content;
`;
Label.displayName = 'Label';

const Labels = styled.div`
  ${FieldRules};
  
  ${Label} {
    margin-right: 8px;
    
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
Labels.displayName = 'Labels';

const Name = styled(Link)`
  align-items: center;
  color: inherit;
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
`;
Name.displayName = 'Name';

const Price = styled.div`
  ${FieldRules};
`;
Price.displayName = 'Price';

const Statistics = styled.div`
  align-items: center;
  cursor: default;
  display: grid;
  grid-gap: 8px;
  grid-template-rows: 1fr 1fr;
  font-weight: 700;
`;
Statistics.displayName = 'Statistics';

const Symbol = styled.div`
  ${FieldRules};
  flex-direction: column;
  font-size: 14px;
  
  img {
    margin-bottom: 8px;
  }
`;
Symbol.displayName = 'Symbol';

const TableItem = styled.li`
  background-color: ${colors.shark};
  border-bottom: 1px solid ${colors.quickSilver};
  color: ${colors.lightSilver};
  display: grid;
  grid-column-gap: 24px;
  grid-template-columns: 50px 200px 100px 1fr;
  font-style: normal;
  font-weight: 400;
  list-style: none;
  padding: 24px;
  
  &:last-of-type {
    border-bottom: none;
  }
`;
TableItem.displayName = 'TableItem';

const TableList = styled.ul`
  border: 1px solid ${colors.lightSilver};
  border-radius: 8px;
  color: ${colors.quickSilver};
  font-style: italic;
  font-weight: 700;
  overflow: hidden;
  padding: ${({ isEmpty }) => isEmpty ? '48px' : 0};
  text-align: center;
  width: 100%;
`;
TableList.displayName = 'TableList';

export default {
  Label,
  Labels,
  Name,
  Price,
  Statistics,
  Symbol,
  TableItem,
  TableList
};
