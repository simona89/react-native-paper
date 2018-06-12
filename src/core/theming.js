/* @flow */

import { createTheming } from '@callstack/react-theme-provider';

import type { ThemingType } from '@callstack/react-theme-provider';
import type { Theme } from '../types';

import DefaultTheme from '../styles/DefaultTheme';

const theming: ThemingType<?Theme, $Shape<Theme>> = createTheming(DefaultTheme);
const { ThemeProvider, withTheme } = theming;

export { ThemeProvider, withTheme };