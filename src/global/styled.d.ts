/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components/native';

import { ITheme } from '../design';

declare module 'styled-components/native' {
  export interface DefaultTheme extends ITheme {}
}
