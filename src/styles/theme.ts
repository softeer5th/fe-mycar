export const colors = {
  beige400: '#e4dcd3',
  beige300: '#f6f3f2b3',
  blue300: '#007fab',
  blue400: '#007fa8',
  navy: '#002c5f',
  gray400: '#666666',
  gray300: '#e5e5e5',
  black: '#000000',
  white: '#ffffff',
  linkInactive: '#00000080',
};

export const fonts = {
  title: {
    'font-size': '58px',
    'font-weight': '700',
    'line-height': '51px',
  },
  subTitle: {
    'font-size': '16px',
    'font-weight': '500',
    'line-height': 'normal',
  },
  body: {
    small: {
      'font-size': '16px',
      'font-weight': '400',
      'line-height': '1',
    },
    medium: {
      'font-size': '20px',
      'font-weight': '700',
      'line-height': '34px',
    },
  },
  label: {
    small: {
      'font-size': '14px',
      'line-height': '1',
    },
    medium: {
      'font-size': '16px',
      'line-height': '30px',
    },
    large: {
      'font-size': '20px',
      'line-height': '1.3',
    },
  },
};

const theme: {
  colors: typeof colors;
  fonts: typeof fonts;
} = {
  colors,
  fonts,
};

export default theme;
