import { TTheme } from './types';

const colors = {
  configuration: '#39b2c2',
  greyBackground: '#F8F8F9',
  greyText: '#404040',
  negative: '#cd3636',
  positive: '#A4FF0E',
  yellowBackground: '#F9E39E',
};

const theme: TTheme = {
  colors,
  boxShadow: '0 1px 4px -1px #808080',
  texts: {
    normal: {
      color: colors.greyText,
      fontSize: '18px',
      fontWeight: 'normal',
    },
    title: {
      color: colors.greyText,
      fontSize: '20px',
      fontWeight: 'bold',
    },
  },
};

export default theme;
