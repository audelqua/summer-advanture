import React from 'react';
import { AbsoluteFill, Video, Sequence } from "remotion";

import video_1 from "../../assets/videos/1.mp4";
import video_2 from "../../assets/videos/2.mp4";
import video_3 from "../../assets/videos/3.mp4";


interface ComponentProps {
  myVideos: {
    src: string;
    volume: number;
    from: number;
    style?: object;
    startFrom?: number;
    endAt?: number
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
            volume={video.volume}
            style={video.style}
            startFrom={video.startFrom}
            endAt={video.endAt}
          />
        </Sequence>
      )}
    </AbsoluteFill>
  )
}