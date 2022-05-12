import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { TopNavBar, TopNavBarLink } from './NavigationBarStyles';

export const NavigationBar = () => {
  return (
    <TopNavBar>
    <TopNavBarLink href="/react-app/home">Início</TopNavBarLink>
    <TopNavBarLink href="/react-app/about">Sobre</TopNavBarLink>
    <TopNavBarLink href="/react-app/contact">Contato</TopNavBarLink>
    <TopNavBarLink href="/react-app/pleonasm-of-the-day">Pleonasmo do dia</TopNavBarLink>
    <TopNavBarLink href="/react-app/pleonasms">Índice</TopNavBarLink>
    <SearchBar/>
    </TopNavBar>
  );
};
