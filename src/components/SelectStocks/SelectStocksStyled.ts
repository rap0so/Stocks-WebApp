import styled from 'styled-components';
import { TTheme } from 'providers/theme/types';

const SelectStocksStyled = styled.ul(({ theme }: { theme: TTheme }) => ({
  color: theme.colors.base,
  li: {
    borderBottom: '1px solid #393939',
    cursor: 'pointer',
    fontSize: '14px',
    padding: '10px 5px',
  },
  listStyleType: 'none',
  margin: 0,
  padding: '0 15px 15px',
}));

export default SelectStocksStyled;
