import React from 'react';
import { Title, HeaderBox, LogoWrapper } from './HeaderStyles';
import { ReactComponent as Logo } from './logo.svg'

export const Header = () => {
  return (
    <HeaderBox>
      <LogoWrapper>
        <Logo /><Title>
          Dicionário de Pleonasmos
        </Title>
      </LogoWrapper>
    </HeaderBox>
  );
};

export default Header;
