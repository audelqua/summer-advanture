import React from 'react';
import { AbsoluteFill, Video, Sequence } from "remotion";

interface ComponentProps {
  src: string;
  volume: number;
  from: number;
  durationInFrames?: number;
  style?: object;
  startFrom?: number;
  endAt?: number,
}

export const CustomVideoComponent: React.FC<ComponentProps> = props => {
  const { src, volume, from, durationInFrames, style, startFrom, endAt } = props

  return (
    <AbsoluteFill>
      <Sequence from={from} durationInFrames={durationInFrames}>
        <Video
          src={src}
          volume={() => volume}
          style={style}
          startFrom={startFrom}
          endAt={endAt}
        />
      </Sequence>
    </AbsoluteFill>
  )
}