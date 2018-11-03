import { Box, styled } from 'reakit';
import { prop } from 'styled-tools';

export const Body2 = styled(Box)`
  ${prop('theme.fonts.axiformaMedium')};
  font-size: 0.875rem;
  line-height: 1.71428em;
  text-align: left;
  margin: 0;
`;
