import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/definition"><FooterLink>O que é um pleonasmo</FooterLink></Link>
          </Column>
          <Column>
          <Link to="/terms-of-use"><FooterLink>Termos de uso</FooterLink></Link>
          </Column>
          <Column>
          <Link to="/error-report"><FooterLink>Reportar erro</FooterLink></Link>
          </Column>
          <Column>
            <div>
              <SocialMediaIconLink href="">
                <FaTwitter />
              </SocialMediaIconLink>
              <SocialMediaIconLink href="">
                <FaInstagram />
              </SocialMediaIconLink>
              <SocialMediaIconLink href="">
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