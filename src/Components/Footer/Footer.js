import React from "react";
import {
  FooterBox,
  Container,
  Row,
  Column,
  FooterLink,
  Copyright,
} from "./FooterStyles";

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
            <FooterLink href="#">
            <i className="fab fa-facebook">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
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