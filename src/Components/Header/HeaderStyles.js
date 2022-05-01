import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 16pt;
  text-align: left;
  color: darkgray;
`;

export const HeaderBox = styled.div`
  display: grid;
  grid-template-areas: "logo nav";
  background: lightgray;
  position: relative;
  width: 100%;
  
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: papayawhip;
  color: palevioletred;
`;

export const LogoWrapper = styled.svg`
  grid-area: nav;
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: left;
`