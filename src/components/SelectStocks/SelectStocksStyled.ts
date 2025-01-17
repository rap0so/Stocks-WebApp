import styled from 'styled-components';
import { TTheme } from 'providers/theme/types';

const SelectStocksStyled = styled.ul(({ theme }: { theme: TTheme }) => ({
  color: theme?.colors?.base || '#fff',
  li: {
    borderBottom: '1px solid #393939',
    cursor: 'pointer',
    fontSize: '14px',
    padding: '10px 5px',
  },
  listStyleType: 'none',
  margin: 0,
  padding: '0 15px 15px',
  span: {
    background: '#46882c',
    borderRadius: '100px',
    display: 'inline-block',
    height: ' 10px',
    marginLeft: ' 30px',
    width: ' 10px',
  },
}));

export default SelectStocksStyled;
