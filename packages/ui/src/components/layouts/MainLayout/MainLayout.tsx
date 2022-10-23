import { widthQuery } from '../../../theme/global';
import styled from 'styled-components';

export const MainLayout = styled.main`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0 3.2rem 2.4rem 3.2rem;
  @media ${widthQuery.sm} {
    padding: 0 2.4rem 2.4rem 2.4rem;
  }
`;
