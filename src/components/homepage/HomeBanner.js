import React, { useEffect, useRef } from 'react';
import {
  Banner,
  Video,
  Canvas,
  BannerTitle,
  Headline,
} from '../../styles/homeStyles';
import { useGlobalStateContext } from '../../context/globalContext';

import useWindowSize from '../../hooks/useWindowSize';

const HomeBanner = ({ onCursor }) => {
  const canvas = useRef(null);
  const size = useWindowSize();
  const { currentTheme } = useGlobalStateContext();

  useEffect(() => {
    let renderingElement = canvas.current;

    let drawingElement = renderingElement.cloneNode();
    let drawingCtx = drawingElement.getContext('2d');
    let renderingCtx = renderingElement.getContext('2d');
    let lastX;
    let lastY;
    let moving = false;

    renderingCtx.globalCompositeOperation = 'source-over';
    renderingCtx.fillStyle = currentTheme === 'dark' ? '#000000' : '#ffffff';
    renderingCtx.fillRect(0, 0, size.width, size.height);
    renderingElement.addEventListener('mouseover', (ev) => {
      moving = true;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    });
    renderingElement.addEventListener('click', (ev) => {
      moving = true;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    });
    renderingElement.addEventListener('mouseup', (ev) => {
      moving = false;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    });
    renderingElement.addEventListener('mousemove', (ev) => {
      if (moving) {
        drawingCtx.globalCompositeOperation = 'source-over';
        renderingCtx.globalCompositeOperation = 'destination-out';
        let currentX = ev.pageX - renderingElement.offsetLeft;
        let currentY = ev.pageY - renderingElement.offsetTop;
        drawingCtx.lineJoin = 'round';
        drawingCtx.moveTo(lastX, lastY);
        drawingCtx.lineTo(currentX, currentY);
        drawingCtx.closePath();
        drawingCtx.lineWidth = 120;
        drawingCtx.stroke();
        lastX = currentX;
        lastY = currentY;
        renderingCtx.drawImage(drawingElement, 0, 0);
      }
    });
  }, [currentTheme, size.height, size.width]);
  const container = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        type: 'spring',
        stiffness: 30,
      },
    },
  };
  return (
    <Banner>
      <Video>
        <video
          width="100%"
          height="100%"
          loop
          autoPlay
          muted
          src={require('../../assets/video/video.mp4')}
        />
      </Video>
      <Canvas
        height={size.height}
        width={size.width}
        ref={canvas}
        onMouseEnter={() => onCursor('hovered')}
        onMouseLeave={onCursor}
      />
      <BannerTitle variants={container} initial="initial" animate="animate">
        <Headline variants={item}>DIG</Headline>
        <Headline variants={item}>DEEP</Headline>
      </BannerTitle>
    </Banner>
  );
};

export default HomeBanner;
