import {
	AbsoluteFill,
	Sequence,
	Audio,
} from 'remotion';
import styled from 'styled-components';

import {Title} from './Title';
import fiftySecondAudio from '../../../assets/sounds/HappySummer15.wav';
import {CustomVideoComponent} from '../../components/CustomVideoComponent';
import firstVideo from "../../../assets/videos/1.mp4";
import secondVideo from "../../../assets/videos/2.mp4";
import thirdVideo from "../../../assets/videos/3.mp4";
import fourthVideo from "../../../assets/videos/4.mp4";
import eighthVideo from "../../../assets/videos/8.mp4";
// ### import them together
import { Starter } from '../../components/Starter';


export const SummerAdventure: React.FC = () => {
	return (
		<Wrapper>
			<Sequence from={0} durationInFrames={65}>
				<Starter />
			</Sequence>
			<Sequence from={60} durationInFrames={135}>
				<CustomVideoComponent 
					myVideos= {
						[
							{
								src: firstVideo, 
								volume: 0,
								from: 0,
							},
							{
								src: secondVideo, 
								volume: 0,
								from: 65,
							},
							{
								src: thirdVideo, 
								volume: 0,
								from: 90,
							},
						]
					}
				/>
			</Sequence>
			<Sequence from={190} durationInFrames={40}>
				<AbsoluteFill style={{backgroundColor: '#F4DB78'}}>
					<Title titleText="second test too fast" titleColor="#495B53" />
				</AbsoluteFill>
			</Sequence>
			<Sequence from={225} durationInFrames={100}>
				<CustomVideoComponent 
					myVideos= {
						[
							{
								src: thirdVideo, 
								volume: 0,
								from: 0,
								startFrom: 85,
            		endAt: 110
							},
							{
								src: fourthVideo, 
								volume: 0,
								from: 20,
							},
						]
					}
				/>
			</Sequence>
			<Sequence from={320} durationInFrames={35}>
				<AbsoluteFill style={{backgroundColor: '#F4DB78'}}>
					<Title titleText="third test wef" titleColor="#495B53" />
				</AbsoluteFill>
			</Sequence>
			<Sequence from={350} durationInFrames={85}>
				<CustomVideoComponent 
					myVideos= {
						[
							{
								src: eighthVideo, 
								volume: 0,
								from: 0,
								startFrom: 1120,
            		endAt: 1300
							},
						]
					}
				/>
			</Sequence>
			<Sequence from={430}>
				<AbsoluteFill style={{backgroundColor: '#F4DB78'}}>
					<Title titleText="last text here" titleColor="#495B53" />
				</AbsoluteFill>
			</Sequence>
			<Audio src={fiftySecondAudio} />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex: 1;
	background-color: white //#json
`