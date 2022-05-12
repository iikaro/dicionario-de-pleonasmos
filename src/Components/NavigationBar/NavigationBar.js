import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { TopNavBar, TopNavBarLink } from './NavigationBarStyles';

export const NavigationBar = () => {
  return (
    <TopNavBar>
    <TopNavBarLink href="/pleonasm-dict/home">Início</TopNavBarLink>
    <TopNavBarLink href="/pleonasm-dict/about">Sobre</TopNavBarLink>
    <TopNavBarLink href="/pleonasm-dict/contact">Contato</TopNavBarLink>
    <TopNavBarLink href="/pleonasm-dict/pleonasm-of-the-day">Pleonasmo do dia</TopNavBarLink>
    <TopNavBarLink href="/pleonasm-dict/pleonasms">Índice</TopNavBarLink>
    <SearchBar/>
    </TopNavBar>
  );
};
