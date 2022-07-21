import {
  AbsoluteFill,
  Img,
  useCurrentFrame,
  useVideoConfig,
  spring
} from 'remotion';
import styled from 'styled-components'

import { Title } from '../containers/summerAdventure/Title';
import config from "../../config.json";

interface ComponentProps {
  title: string,
  subtitle?: string,
  textColor?: string,
  animationType?: string,
  backgroundCover: string
}

export const ShowCaseComponent: React.FC<ComponentProps> = props => {
  const { title, subtitle, textColor, animationType, backgroundCover } = props

  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  // Const opacity = frame >= fps ? 1 : frame / fps
  // const opacity = interpolate(frame, [0, fps], [0, 1], {extrapolateRight: 'clamp'})
  const progress = spring({
		fps,
		frame: frame - 8,
		config: {
			damping: 20,
      stiffness: 120,
      mass: 0.5,
      // OvershootClamping: true
		},
	});

  return (
    <AbsoluteFill
      style={{
        backgroundColor: config.color[0],
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <BackgroundImage src={backgroundCover} />
      <Title
        titleText={title}
        titleColor={textColor || ''}
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
    </AbsoluteFill>
  )
}

const BackgroundImage = styled(Img)`
  opacity: 0.3;
  position: absolute;
`