import React from 'react';
import { Link } from "react-router-dom";
import { SearchBar } from '../SearchBar/SearchBar';
import { TopNavBar, TopNavBarLink } from './NavigationBarStyles';

export const NavigationBar = () => {
  return (
    <TopNavBar>
    <Link to="/home"><TopNavBarLink>Início</TopNavBarLink></Link>
    <Link to="/about"><TopNavBarLink>Sobre</TopNavBarLink></Link>
    <Link to="/contact"><TopNavBarLink>Contato</TopNavBarLink></Link>
    <Link to="/pleonasm-of-the-day"><TopNavBarLink>Pleonasmo do dia</TopNavBarLink></Link>
    <Link to="/pleonasms"><TopNavBarLink>Índice</TopNavBarLink></Link>
    <SearchBar/>
    </TopNavBar>
  );
};
