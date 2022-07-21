import React from 'react'
import { CustomVideoComponent } from './CustomVideoComponent';

import config from "../../config.json";

const firstVideo = require(`../../assets/videos/${config.footage[0]}`);
const secondVideo = require(`../../assets/videos/${config.footage[1]}`);
const thirdVideo = require(`../../assets/videos/${config.footage[2]}`);

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