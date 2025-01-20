import { DefaultTheme } from 'styled-components';
import {color} from "./color";
import {typo} from "./typo";

export type ColorsTypes = typeof color;
export type FontsTypes = typeof typo;

export const theme: DefaultTheme = {
  color,
  typo,
};