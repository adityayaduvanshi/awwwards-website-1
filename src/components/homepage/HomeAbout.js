import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Flex } from '../../styles/globalStyles';
import {
  HomeAboutSection,
  About,
  Sevices,
  AccordionContent,
  AccorionIcon,
  AccordionHeader,
} from '../../styles/homeStyles';
import { useGlobalStateContext } from '../../context/globalContext';

//accordion data
const accordionIds = [
  {
    id: 0,
    title: 'Pre-Production',
    results: [
      'Creative Development',
      'Writing',
      'Creative Development',
      'Writing',
      'Storyboards',
      'Art Direction',
      'Creative Direction',
      'Location Scouting',
      'Casting',
    ],
  },
  {
    id: 1,
    title: 'Video Production',
    results: [
      'Principle Photography',
      'Production Management',
      'Crew',
      'Dailies',
      'LTO-Archiving',
    ],
  },
  {
    id: 2,
    title: 'Post-Production',
    results: [
      'Colour correction',
      'Offline editing',
      'Online editing',
      'VFX',
      'Animation and motion graphics',
      'Closed captioning and subtitles',
      'Descriptive video',
      'Dailies',
      'Quality control',
      'LTO Archiving',
    ],
  },
  {
    id: 3,
    title: 'Audio Post-Production',
    results: [
      'We work with some amazing partners who provide:',
      'Sound Design',
      'SFX',
      'Music',
      'Sound Mix',
    ],
  },
];

const HomeAbout = ({ onCursor }) => {
  const animation = useAnimation();
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-300px',
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);
  const [expanded, setExpanded] = useState(0);
  return (
    <HomeAboutSection
      ref={aboutRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, type: 'spring', stiffness: 30 },
        },
        hidden: { opacity: 0, y: 72 },
      }}
    >
      <Container>
        <Flex alignTop>
          <About>
            <h2>
              Furrow is an integrated, full-service creative studio offering
              video production, creative development, and post-production
              services.
            </h2>
            <p>
              Everybody’s got a story. And we don’t stop until we’ve uncovered
              what makes yours worth telling. Whether it’s working directly with
              you, an agency partner, or putting the finishing touches on
              something special, we’re ready to dig in and get our hands
              dirty—are you?
            </p>
          </About>
          <Sevices>
            <h3>Services</h3>
            {accordionIds.map((details, index) => (
              <Accordion
                onCursor={onCursor}
                key={index}
                {...details}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            ))}
          </Sevices>
        </Flex>
      </Container>
    </HomeAboutSection>
  );
};

const Accordion = ({ id, title, results, expanded, setExpanded, onCursor }) => {
  const { currentTheme } = useGlobalStateContext();
  const isOpen = id === expanded;
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <AccordionHeader
        onMouseEnter={() => onCursor('hovered')}
        onMouseLeave={onCursor}
        onClick={() => setExpanded(isOpen ? false : id)}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
        whileHover={{
          color: currentTheme === 'dark' ? '#ffffff' : '#000000',
        }}
      >
        <AccorionIcon>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: 0.2, type: 'spring' }}
          ></motion.span>
          <motion.span
            transition={{ duration: 0.2, type: 'spring' }}
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
          ></motion.span>
          {title}
        </AccorionIcon>
      </AccordionHeader>
      <AccordionContent
        transition={{ duration: 0.8, type: 'spring', stiffness: 40 }}
        key="content"
        animate={{ height: isOpen ? '100%' : '0' }}
      >
        {results.map((result, index) => (
          <span key={index}>{result}</span>
        ))}
      </AccordionContent>
    </>
  );
};

export default HomeAbout;
