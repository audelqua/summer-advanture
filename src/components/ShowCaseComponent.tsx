import {
  AbsoluteFill,
  Img,
  useCurrentFrame,
  useVideoConfig,
  spring
} from 'remotion';
import styled from 'styled-components'

import { Title } from './Title';
import { Subtitle } from './Subtitle';
import { Logo } from './Logo';
import config from "../../config.json";

interface ComponentProps {
  title: string,
  subtitle?: string,
  textColor?: string,
  animationType?: string,
  backgroundCover: string,
  showLogo?: boolean,
  noBackground?: boolean
}

export const ShowCaseComponent: React.FC<ComponentProps> = props => {
  const { title, subtitle, textColor, animationType, backgroundCover, showLogo, noBackground } = props

  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const progress = spring({
    fps,
    frame: frame - 8,
    config: {
      damping: 20,
      stiffness: 120,
      mass: 0.5,
    }
  })

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
            transform: `scale(
              ${progress}
            )`,
          }}
        />
      }
      {showLogo && 
        <Logo 
          style={{
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