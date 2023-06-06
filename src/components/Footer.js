import React from 'react';
import { Container, Flex } from '../styles/globalStyles';
import { Instagram, Facebook, Vimeo } from '../assets/svg/social-icons';
import { FooterNav, FooterContent, FooterSocial } from '../styles/footerStyles';

const Footer = ({ onCursor }) => {
  return (
    <FooterNav>
      <Container>
        <Flex spaceBetween>
          <FooterContent>
            {' '}
            <p>701.447.078</p>
            <p>info@furrow.studio</p>
          </FooterContent>
          <FooterContent wider>
            {' '}
            <p>15 Cam at Unit B</p>
            <p>University, PE C32 0E2</p>
          </FooterContent>
          <FooterSocial>
            <a
              href="https://www.instagram.com"
              onMouseEnter={() => onCursor('hovered')}
              onMouseLeave={onCursor}
            >
              <Instagram />
            </a>
            <a
              href="https://www.facebook.com"
              onMouseEnter={() => onCursor('hovered')}
              onMouseLeave={onCursor}
            >
              <Facebook />
            </a>
            <a
              href="https://www.facebook.com"
              onMouseEnter={() => onCursor('hovered')}
              onMouseLeave={onCursor}
            >
              <Vimeo />
            </a>
          </FooterSocial>
        </Flex>
      </Container>
    </FooterNav>
  );
};

export default Footer;
