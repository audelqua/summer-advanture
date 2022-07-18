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

import {Logo} from './summerAdventure/Logo';
import {Subtitle} from './summerAdventure/Subtitle';
import {Title} from './summerAdventure/Title';
import audio_30 from '../assets/sounds/HappySummer30.wav';
import audio_15 from '../assets/sounds/HappySummer15.wav';
import {CustomVideoComponent} from './components/CustomVideoComponent';
import video_1 from "../assets/videos/1.mp4";
import video_2 from "../assets/videos/2.mp4";
import video_3 from "../assets/videos/3.mp4";
import video_4 from "../assets/videos/4.mp4";
import video_5 from "../assets/videos/5.mp4";
import video_6 from "../assets/videos/6.mp4";
import video_7 from "../assets/videos/7.mp4";
import video_8 from "../assets/videos/8.mp4";
// ### import them together


interface ComponentProps {
	titleText: string;
	titleColor: string;
}

export const SummerAdventure: React.FC<ComponentProps> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig()
	
	return (
		<Wrapper>
			<Sequence from={0} durationInFrames={65}>
				<AbsoluteFill style={{backgroundColor: '#F4DB78'}}>
					<Title titleText={'with us you have the best summer ever'} titleColor={'#495B53'} />
				</AbsoluteFill>
			</Sequence>
			<Sequence from={60} durationInFrames={135}>
				<CustomVideoComponent 
					myVideos= {
						[
							{
								src: video_1, 
								volume: 0,
								from: 0,
								style: null
							},
							{
								src: video_2, 
								volume: 0,
								from: 65,
								style: null 
							},
							{
								src: video_3, 
								volume: 0,
								from: 90,
								style: null 
							},
						]
					}
				/>
			</Sequence>
			<Sequence from={190} durationInFrames={40}>
				<AbsoluteFill style={{backgroundColor: '#F4DB78'}}>
					<Title titleText={'second test too fast'} titleColor={'#495B53'} />
				</AbsoluteFill>
			</Sequence>
			<Sequence from={225} durationInFrames={100}>
				<CustomVideoComponent 
					myVideos= {
						[
							{
								src: video_3, 
								volume: 0,
								from: 0,
								style: null, 
								startFrom: 85,
            		endAt: 110
							},
							{
								src: video_4, 
								volume: 0,
								from: 20,
								style: null, 
							},
						]
					}
				/>
			</Sequence>
			<Sequence from={320} durationInFrames={35}>
				<AbsoluteFill style={{backgroundColor: '#F4DB78'}}>
					<Title titleText={'third test wef'} titleColor={'#495B53'} />
				</AbsoluteFill>
			</Sequence>
			<Sequence from={350} durationInFrames={85}>
				<CustomVideoComponent 
					myVideos= {
						[
							{
								src: video_8, 
								volume: 0,
								from: 0,
								style: null,
								startFrom: 1120,
            		endAt: 1300
							},
						]
					}
				/>
			</Sequence>
			<Sequence from={430}>
				<AbsoluteFill style={{backgroundColor: '#F4DB78'}}>
					<Title titleText={'last text here'} titleColor={'#495B53'} />
				</AbsoluteFill>
			</Sequence>
			<Audio src={audio_15} />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex: 1;
	background-color: white //#json
`

// export const SummerAdventure: React.FC<ComponentProps> = ({titleText, titleColor}) => {
// 	const frame = useCurrentFrame();
// 	const {durationInFrames, fps} = useVideoConfig();

// 	// // Animate from 0 to 1 after 25 frames
// 	// const logoTranslationProgress = spring({
// 	// 	frame: frame - 25,
// 	// 	fps,
// 	// 	config: {
// 	// 		damping: 100,
// 	// 	},
// 	// });

// 	// // Move the logo up by 150 pixels once the transition starts
// 	// const logoTranslation = interpolate(
// 	// 	logoTranslationProgress,
// 	// 	[0, 1],
// 	// 	[0, -150]
// 	// );

// 	// // Fade out the animation at the end
// 	// const opacity = interpolate(
// 	// 	frame,
// 	// 	[durationInFrames - 25, durationInFrames - 15],
// 	// 	[1, 0],
// 	// 	{
// 	// 		extrapolateLeft: 'clamp',
// 	// 		extrapolateRight: 'clamp',
// 	// 	}
// 	// );
// 	// A <AbsoluteFill> is just a absolutely positioned <div>!

// 	return (
// 		<AbsoluteFill style={{backgroundColor: 'white'}}>
// 			<AbsoluteFill 
// 				// style={{opacity}}
// 			>
// 				<AbsoluteFill 
// 					// style={{transform: `translateY(${logoTranslation}px)`}}
// 				>
// 					<Logo />
// 				</AbsoluteFill>
// 				{/* Sequences can shift the time for its children! */}
// 				<Sequence from={35}>
// 					<Title titleText={titleText} titleColor={titleColor} />
// 				</Sequence>
// 				{/* The subtitle will only enter on the 75th frame. */}
// 				<Sequence from={75}>
// 					<Subtitle />
// 				</Sequence>
// 			</AbsoluteFill>
// 		</AbsoluteFill>
// 	);
// };
