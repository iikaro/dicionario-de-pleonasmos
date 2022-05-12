import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex-end;
    flex-direction: column;
    justify-content: center;
`

export const FooterBox = styled.div`
  height: 10rem;
  padding-top: 20px;
  padding-bottom: 20px;
  background: #edf0f4;
`;

export const Row = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export const Column = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  margin-left: 20px;
  flex-wrap: wrap;
`;

export const Copyright = styled.div`
  background: #edf0f4;
  color: #3b4754;
  display: flex;
  align-items: left;
  margin-top: 0px;
  font-size: 14px;
  text-align: center;
`;

export const FooterLink = styled.a`
  color: #3b4754;
  margin-bottom: 14px;
  font-size: 14px;
  text-decoration: none;
   
  &:hover {
      color: #fff;
      transition: 200ms ease-in;
  }
`;

export const SocialMediaIconLink = styled.a`
  padding-right: 20px;
  color: #3b4754;
  margin-bottom: 14px;
  font-size: 14px;
  text-decoration: none;
   
  &:hover {
      color: #fff;
      transition: 200ms ease-in;
  }
`;