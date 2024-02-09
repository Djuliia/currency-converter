import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  padding: 50px 24px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 50px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 50px 128px;
  }
`;

export const StyledLink = styled(Link)`
  transition: color 0.3s;
  border: 2px solid transparent;
  border-radius: 12px;
  padding: 5px 10px;

  &:hover {
    color: #1894ee;
    border: 2px solid #fff;
    border-radius: 12px;
    text-decoration: none;
    padding: 5px 10px;
  }
`;
