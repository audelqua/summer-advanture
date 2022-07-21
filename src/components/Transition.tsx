import React from 'react';
import {spring, SpringConfig, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components'

interface ComponentProps {
  swipe?: 'left' | 'right' | 'top' | 'bottom';
  children: React.ReactNode;
}

export const Transition: React.FC<ComponentProps> = ({swipe, children}) => {
	const frame = useCurrentFrame()
	const videoConfig = useVideoConfig()
	
	const springConfig: SpringConfig = {
		damping: 10,
		mass: 0.1,
		stiffness: 100,
		overshootClamping: true,
	}

	const progress = spring({
		config: springConfig,
		from: 100,
		to: 0,
		fps: videoConfig.fps,
		frame,
	})

  const transformGenerator = () => {
    switch (swipe) {
      case 'left':
        return `translateX(${progress}%)`
      case 'right':
        return `translateX(${0 - progress}%)`
      case 'top':
          return `translateY(${progress}%)`
      case 'bottom':
        return `translateY(${0 - progress}%)`
      default:
        break
    }
  }

	return (
		<Container
			style={{
				transform: transformGenerator(),
			}}
		>
			{children}
		</Container>
	)
}


const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
`;
