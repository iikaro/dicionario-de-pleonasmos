import styled from 'styled-components';
   
export const EntryTitle = styled.div`
  padding: 20px 0px;
  position: relative;
  bottom: 0;
  width: 100%;
`;

export const EntryFirstPartDefinition = styled.div`
  box-sizing: content-box;
  color: #798da3;
  text-align: left;
  position: relative;
  left: 25%;
  width: 100%;
  font-size: 8;
  font-style: italic;
  width: 50%;
`;

export const EntrySecondPartDefinition = styled.div`
  box-sizing: content-box;
  color: #798da3;
  text-align: right;
  position: relative;
  right: 25%;
  width: 100%;
  font-size: 8;
  font-style: italic;
`;


export const EntryFirstPart = styled.div`
  color: #3b4754;
  font-style: bold;
  font-size: 20pt;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: left;
  position: relative;
  left: 25%;
  width: 50%;
`;

export const EntrySecondPart = styled.div`
  box-sizing: content-box;
  color: #3b4754;
  font-style: bold;
  font-size: 20pt;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: right;
  position: relative;
  left: -25%;
  width: 100%;
`;

export const EntryExplanation = styled.div`
  padding: 50px 0px 50px 0px;
  color: #798da3;
  font-style: italic;
  position: relative;
  width: fit-content;
  text-align: center;
  margin: auto;
`;

export const EntryExample = styled.div`
  padding: 50px;
  color: #798da3;
  font-style: italic;
  position: relative;
  text-align: center;
  width: 60%;
  box-sizing: content-box;
`;

export const EntryExampleSource = styled.div`
  color: #798da3;
  position: relative;
  text-align: right;
  right: 60%;
  width: 100%;
`;

export const EntryCounterExample = styled.div`
  padding: 20px 0px;
  position: relative;
  bottom: 0;
  width: 100%;
`;