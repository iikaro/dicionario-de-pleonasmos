import React from "react";
import {
  FooterBox,
  Row,
  Column,
  FooterLink,
  Copyright,
  SocialMediaIconLink,
  DicioColumn,
  FooterContainer,
  LineBreak,
} from "./FooterStyles";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
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
            <div>
              <SocialMediaIconLink href="twitter.com">
                <FaTwitter />
              </SocialMediaIconLink>
              <SocialMediaIconLink href="instagram.com">
                <FaInstagram />
              </SocialMediaIconLink>
              <SocialMediaIconLink href="facebook.com">
                <FaFacebook />
              </SocialMediaIconLink>
            </div>
          </Column>
        </Row><Row>
          <Column>
            <Copyright>
              <p>© 2022 Dicionário de Pleonasmos.<br />
              O primeiro dicionário de pleonasmos online da língua portuguesa.</p>
            </Copyright>
          </Column>
        </Row>
      </FooterBox>
    </FooterContainer>
  );
};