import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiProps {}

const StyledLink = styled(Link)`
  color: pink;
`;

export function Ui(props: UiProps) {
  return <StyledLink to="/">Test</StyledLink>;
}

export default Ui;
