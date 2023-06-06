import { styled, css } from 'styled-components';
import { motion } from 'framer-motion';

export const FooterNav = styled.div`
  height: 300px;
  margin-top: 296px;
`;
export const FooterContent = styled.div`
  color: ${(props) => props.theme.red};
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 0.5rem;
  flex: 1;
  ${(props) =>
    props.wider &&
    css`
      flex: 2;
    `}
`;
export const FooterSocial = styled.div`
  display: flex;
  position: relative;
  a {
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    padding: 8px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`;
