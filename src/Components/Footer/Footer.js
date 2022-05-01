import React from "react";
import {
  FooterBox,
  Container,
  Row,
  Column,
  FooterLink,
  Copyright,
} from "./FooterStyles";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <FooterBox>
      <Container>
        <Row>
          <Column>
            <FooterLink href="#">O que é um pleonasmo</FooterLink>
            <FooterLink href="#">Pleonasmo do dia</FooterLink>
            <FooterLink href="#">Reportar erro</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">Termos de uso</FooterLink>
            <FooterLink href="#">Privacidade</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">Sobre nós</FooterLink>
            <FooterLink href="#">Contato</FooterLink>
          </Column>
          <Column>
            <FooterLink href="twitter.com">
              <FaTwitter />
            </FooterLink>
            <FooterLink href="instagram.com">
              <FaInstagram />
            </FooterLink>
            <FooterLink href="facebook.com">
              <FaFacebook />
            </FooterLink>
          </Column>
        </Row>
        <Copyright>
          <div>© 2022 Dicionário de Pleonasmos</div>
          <div>O primeiro dicionário de pleonasmos online da língua portuguesa.</div>
        </Copyright>
      </Container>
    </FooterBox>
  );
};

export default Footer;