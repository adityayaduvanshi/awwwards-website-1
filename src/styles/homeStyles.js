import styled from 'styled-components';
import { motion } from 'framer-motion';
export const Banner = styled.div`
  background: ${(props) => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 296px;
`;

export const Video = styled.div`
  height: 100%;
  width: 100%;
  video {
    object-fit: cover;
  }
`;

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: block;
`;
export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: -120px;
  left: -18px;
  color: ${(props) => props.theme.text};

  pointer-events: none;
`;
export const Headline = styled(motion.span)`
  display: block;
  font-size: 23rem;
  font-weight: 900;
  line-height: 0.76;
`;

export const HomeContentSection = styled(motion.div)`
  margin-bottom: 200px;
`;
export const Content = styled.h2`
  width: 53%;
  font-size: 2.3rem;
  font-weight: 400;
  margin-left: 124px;
  color: ${(props) => props.theme.text};
`;

export const HomeFeatureSection = styled(motion.div)`
  margin-bottom: 200px;
  position: relative;
  a {
    margin-bottom: 200px;
    position: relative;
    display: block;
  }
`;
export const FeaturedContent = styled(motion.div)`
  height: 480px;
  width: 100%;
  padding: 56px 124px;
  box-sizing: border-box;
  color: ${(props) => props.theme.text};
  h3 {
    font-size: 1.4rem;
  }
  .meta {
    display: flex;
    h4 {
      &:last-child {
        margin-left: 1rem;
      }
    }
  }
  .featured-title {
    position: absolute;
    bottom: -128px;
    font-size: 7rem;
    font-weight: 900;
    line-height: 90px;
    margin: 0;
    text-transform: uppercase;
    .arrow {
      height: 80px;
      width: 120px;
      display: block;
      position: relative;
      overflow: hidden;
      svg {
        position: absolute;
        top: 16px;
        left: -48px;
        width: 108px;
        path {
          fill: ${(props) => props.theme.text};
        }
      }
    }
  }
`;
export const FeaturedVideo = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 480px;
  top: 0;
  display: block;
  overflow: hidden;
`;
export const FeaturedProjects = styled.div`
  margin-top: 200px;
  button {
    background: ${(props) => props.theme.red};
    color: #fff;
    position: relative;
    padding: 20px;
    display: block;
    text-align: left;
    font-size: 1.4rem;
    line-height: 1;
    font-weight: 600;
    border: none;
    outline: none;
    span {
      margin-right: 100px;
      display: block;
    }
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 20%;
      width: 35px;
      height: 7px;
      display: block;
      background: #fff;
      transform: translateY(-50%);
    }
    &::before {
      margin-top: -8px;
    }
    &::after {
      margin-top: 8px;
    }
  }
`;

export const HomeAboutSection = styled(motion.div)`
  /* margin-bottom: 200px; */
`;
export const About = styled.div`
  width: 100%;
  h2 {
    font-size: 2.3rem;
    width: 60%;
    font-weight: 400;
    margin-left: 124px;
    color: ${(props) => props.theme.text};
  }
  p {
    max-width: 440px;
    font-size: 1rem;
    line-height: 1.6rem;
    margin-left: 124px;
    color: ${(props) => props.theme.text};
  }
`;
export const Sevices = styled.div`
  color: ${(props) => props.theme.text};
`;

export const AccordionHeader = styled(motion.div)`
  width: 100%;
  color: ${(props) => props.theme.red};
  height: 32px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.15rem;
  margin: 8px 0;
`;
export const AccorionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  span {
    width: 16px;
    height: 4px;
    background: ${(props) => props.theme.red};
    transition: 0.1s ease-in-out;
  }
`;
export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;
  span {
    width: 100%;
    margin: 8px 0;
    font-size: 0.875rem;
    color: ${(props) => props.theme.red};
    display: block;
    font-weight: 300;
  }
`;
