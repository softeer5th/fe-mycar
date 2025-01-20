import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      beige400: string;
      beige300: string;
      blue300: string;
      blue400: string;
      navy: string;
      gray: string;
      black: string;
      white: string;
      linkInactive: string;
    };
  }
}
