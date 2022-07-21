import {
  AbsoluteFill,
  Img,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate
} from 'remotion';
import styled from 'styled-components'

import config from "../../config.json";
import { Title } from './Title';
import { Subtitle } from './Subtitle';
import { Logo } from './Logo';


interface ComponentProps {
  title: string,
  subtitle?: string,
  textColor?: string,
  backgroundCover: string,
  showLogo?: boolean,
  noBackground?: boolean,
  fadeOut?: boolean,
}

export const ShowCaseComponent: React.FC<ComponentProps> = props => {
  const { title, subtitle, textColor, backgroundCover, showLogo, noBackground, fadeOut } = props

  const frame = useCurrentFrame()
  const { fps, durationInFrames } = useVideoConfig()


  const progress = spring({
    fps,
    frame: frame - 8,
    config: {
      damping: 15,
      stiffness: 220,
      mass: 0.5,
    }
  })

  const opacity = interpolate(
		frame,
		[durationInFrames - 10, durationInFrames - 5],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	)
  
  return (
    <AbsoluteFill
      style={{
        backgroundColor: config.color[0],
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {!noBackground && <BackgroundImage src={backgroundCover} />}
      <Title
        text={title}
        color={textColor || ''}
        style={{
          zIndex: 1,
          position: 'absolute',
          fontSize: '80px',
          top: '45%',
          opacity: fadeOut ? opacity : 1,
          transform: `scale(
            ${progress}
          )`,
        }}
      />
      {subtitle &&
        <Subtitle
          text={subtitle || ''}
          color={textColor || ''}
          style={{
            zIndex: 1,
            position: 'absolute',
            textAlign: 'center',
            fontSize: '60px',
            top: '65%',
            opacity: fadeOut ? opacity : 1,
            transform: `scale(
              ${progress}
            )`,
          }}
        />
      }
      {showLogo && 
        <Logo 
          style={{
            opacity: fadeOut ? opacity : 1,
            transform: `scale(
              ${progress}
            )`,
          }}
        />
      }
    </AbsoluteFill>
  )
}

const BackgroundImage = styled(Img)`
  opacity: 0.3;
  position: absolute;
`