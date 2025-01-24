import 'styled-components';

import type { ColorsTypes, FontsTypes } from '.';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsTypes;
    fonts: FontsTypes;
  }
}