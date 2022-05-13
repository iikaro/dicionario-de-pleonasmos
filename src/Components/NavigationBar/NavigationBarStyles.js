import styled from 'styled-components';

export const Title = styled.h1`
  display: flex;
  font-size: 16pt;
  text-align: left;
  color: #6c5649ff;
  font-family: Arial, Helvetica, sans-serif;
`;

export const HeaderBox = styled.div`
  display: flex;
  background: #e8ded1ff;
  box-sizing: border-box;
  text-align: left;
  width: auto;
`;

export const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e8ded1ff;
`

export const LogoWrapper = styled.div`
  box-sizing: border-box;
  width: auto;
  align-items: left;
`

export const NavBar = styled.div`
  display: flex;
  align-items: right;
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