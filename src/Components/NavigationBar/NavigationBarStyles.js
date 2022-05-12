import styled from 'styled-components';

export const TopNavBar = styled.div`
  overflow: hidden;
  background-color: #edf0f4;
`;

export const TopNavBarLink = styled.a`
  float: left;
  display: block;
  color: #3b4754;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;

  &:hover {
    background-color: #edf0f4;
    color: black;
  }

  &:active {
    background-color: black;
    color: white;
  }
  `