import 'styled-components'
import { ColorsTypes, FontsTypes } from '.';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsTypes;
    fonts: FontsTypes;
  }
}