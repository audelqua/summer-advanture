import {
	AbsoluteFill,
	interpolate,
	Sequence,
	Series,
	useCurrentFrame,
	useVideoConfig,
	Audio,
	spring
} from 'remotion';
import styled from 'styled-components';

import {Logo} from '../summerAdventure/Logo';
import {Subtitle} from '../summerAdventure/Subtitle';
import {Title} from '../summerAdventure/Title';
import audio_30 from '../assets/sounds/HappySummer30.wav';
import audio_15 from '../assets/sounds/HappySummer15.wav';
import {CustomVideoComponent} from '../components/CustomVideoComponent';
import video_1 from "../assets/videos/1.mp4";
import video_2 from "../assets/videos/2.mp4";
import video_3 from "../assets/videos/3.mp4";
import video_4 from "../assets/videos/4.mp4";
import video_8 from "../assets/videos/8.mp4";
// ### import them together

interface ComponentProps {
	
}

export const Starter: React.FC<ComponentProps> = () => {
	
	return (
    <AbsoluteFill style={{backgroundColor: '#F4DB78'}}>
      <Title titleText={'titleText'} titleColor={'titleColor'} />
    </AbsoluteFill>
	)
}