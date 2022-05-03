import styled from 'styled-components';
   
export const FooterBox = styled.div`
  padding: 20px 0px;
  background: #edf0f4;
  width: 100%;
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin-top: auto;
    bottom: 0;
    margin: 0 auto;
`;
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
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
  padding: 0px 20px 0px 0px;
  color: #3b4754;
  margin-bottom: 14px;
  font-size: 14px;
  text-decoration: none;
   
  &:hover {
      color: #fff;
      transition: 200ms ease-in;
  }
`;

export const Copyright = styled.div`
  color: #3b4754;
  margin-bottom: 14px;
  font-size: 14px;
  text-align: left;

`;