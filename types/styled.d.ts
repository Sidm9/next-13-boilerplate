import 'styled-components';
import { theme } from '../styles/theme';

type ThemeWeb = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeWeb {
    borderRadius: string;

        colors: {
            background: string,
            primary: string,
            secondary: string,
            secondary2: string,
            secondary3: string,
            accent: string,
            textColors: string[],
            sliderTrackColor: string,
            sliderBallColor: string,
            heroBackground: string,
            linearGradientBlob4: string, 
            missionBackground: string,
            inputBg: string,
        };

        mediaQuery: {
            fold: string,
            tablet: string,
            desktop: string
        };

        tabletWidth: string;
        desktopWidth: string;
        constrainedMargin: string;
  }
}