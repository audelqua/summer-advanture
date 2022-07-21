import React from 'react';
import { AbsoluteFill, Video, Sequence } from "remotion";

interface ComponentProps {
  src: string;
  volume: number;
  playbackRate?: number;
  from: number;
  durationInFrames?: number;
  style?: object;
  startFrom?: number;
  endAt?: number,
}

export const CustomVideoComponent: React.FC<ComponentProps> = props => {
  const { src, volume, playbackRate, from, durationInFrames, style, startFrom, endAt } = props

  return (
    <AbsoluteFill>
      <Sequence from={from} durationInFrames={durationInFrames}>
        <Video
          src={src}
          volume={() => volume}
          style={style}
          startFrom={startFrom}
          endAt={endAt}
          playbackRate={playbackRate}
        />
      </Sequence>
    </AbsoluteFill>
  )
}