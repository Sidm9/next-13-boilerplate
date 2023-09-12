'use client';
// styled-components
import { css, createGlobalStyle } from 'styled-components';

// normalize
import { reset } from './reset';

// workaround for formatting of global styles
// https://github.com/prettier/prettier/pull/9025#issuecomment-678655928
const styles = css`
  body {
    padding-bottom: 24px;
    width: 100vw;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${styles}
`;

export default GlobalStyles;