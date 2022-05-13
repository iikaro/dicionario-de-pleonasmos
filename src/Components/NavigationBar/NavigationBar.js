import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { TopNavBar, TopNavBarLink, NavBarWrapper, LogoWrapper, NavBar, HeaderBox, Title } from './NavigationBarStyles';
import Logo from '../../Logo.png';

export const NavigationBar = () => {
  return (
    <NavBarWrapper>
      <LogoWrapper>
        <a href="/pleonasm-dict/home"><img src={Logo} alt="Logo" width={75} /></a>
      </LogoWrapper>
      
      <HeaderBox>
        <Title>
          Dicionário de Pleonasmos
        </Title>
      </HeaderBox>
      
      <NavBar>
        <TopNavBarLink href="/pleonasm-dict/home">Início</TopNavBarLink>
        <TopNavBarLink href="/pleonasm-dict/about">Sobre</TopNavBarLink>
        <TopNavBarLink href="/pleonasm-dict/contact">Contato</TopNavBarLink>
        <TopNavBarLink href="/pleonasm-dict/pleonasm-of-the-day">Pleonasmo do dia</TopNavBarLink>
        <TopNavBarLink href="/pleonasm-dict/pleonasms">Índice</TopNavBarLink>
        <SearchBar />
      </NavBar>

    </NavBarWrapper>

  );
};
