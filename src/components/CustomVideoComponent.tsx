import React from 'react';
import { AbsoluteFill, Video, Sequence } from "remotion";

interface ComponentProps {
  myVideos: {
    src: string;
    volume: number;
    from: number;
    style?: object;
    startFrom?: number;
    endAt?: number,
    title?: string,
    subtitle?: string
  }[]
  // ### need update 
}

export const CustomVideoComponent: React.FC<ComponentProps> = ({ myVideos }) => {
  return (
    <AbsoluteFill>
      {myVideos.map((video, index) =>
        <Sequence key={index} from={video.from}>
          <Video
            src={video.src}
            volume={() => video.volume}
            style={video.style}
            startFrom={video.startFrom}
            endAt={video.endAt}
          />
        </Sequence>
      )}
    </AbsoluteFill>
  )
}