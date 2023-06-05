import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { Container, Flex } from '../../styles/globalStyles';
import {
  HomeFeatureSection,
  FeaturedContent,
  FeaturedVideo,
  FeaturedProjects,
} from '../../styles/homeStyles';

const HomeFeature = ({ onCursor }) => {
  const [hovered, setHovered] = useState(false);

  const animation = useAnimation();
  const [featuredRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-300px',
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);
  return (
    <HomeFeatureSection
      ref={featuredRef}
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
        <Link>
          <FeaturedContent
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onCursor('hovered')}
            onMouseLeave={onCursor}
          >
            <Flex spaceBetween>
              <h3>Featured Project</h3>
              <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 40 }}
                className="meta"
              >
                <h4>PEI Seafood</h4>
                <h4>2023</h4>
              </motion.div>
            </Flex>
            <h2 className="featured-title">
              Not <br /> Humble
              <span className="arrow">
                <motion.svg
                  animate={{ x: hovered ? 48 : 0 }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 60 }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 101 57"
                >
                  <path
                    d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                    fill="#FFF"
                    fillRule="evenodd"
                  ></path>
                </motion.svg>
              </span>
            </h2>
          </FeaturedContent>
          <FeaturedVideo>
            <video
              loop
              muted
              autoPlay
              src={require('../../assets/video/featured-video.mp4')}
            />
          </FeaturedVideo>
        </Link>
      </Container>
      <Container>
        <FeaturedProjects>
          <Flex flexEnd>
            <button>
              <span>All Projects</span>
            </button>
          </Flex>
        </FeaturedProjects>
      </Container>
    </HomeFeatureSection>
  );
};

export default HomeFeature;
