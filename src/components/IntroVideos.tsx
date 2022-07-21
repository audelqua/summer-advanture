import React from 'react'
import {CustomVideoComponent} from './CustomVideoComponent';
import firstVideo from "../../assets/videos/1.mp4";
import secondVideo from "../../assets/videos/2.mp4";
import thirdVideo from "../../assets/videos/3.mp4";

export const IntroVideos: React.FC = () => {
  return (
    <>
      <CustomVideoComponent
        src={firstVideo}
        volume={0}
        from={0}
      />
      <CustomVideoComponent
        src={secondVideo}
        volume={0}
        from={70}
      />
      <CustomVideoComponent
        src={thirdVideo}
        volume={0}
        from={85}
        startFrom={10}
      />
      <CustomVideoComponent
        src={thirdVideo}
        volume={0}
        from={100}
        startFrom={70}
      />
    </>
  )
}