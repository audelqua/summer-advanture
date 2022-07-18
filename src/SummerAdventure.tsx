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

interface ComponentProps {
	titleText: string;
	titleColor: string;
}

export const SummerAdventure: React.FC<ComponentProps> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig()
	
	return (
		<Wrapper>
			<Series>
				{/* first text here */}
				<Series.Sequence durationInFrames={100}>
					<AbsoluteFill style={{backgroundColor: '#F4DB78'}}>
						<Title titleText={'first title'} titleColor={'#495B53'} />
					</AbsoluteFill>
				</Series.Sequence>
				{/* first two videos here */}
				<Series.Sequence durationInFrames={50}>
					<CustomVideoComponent />
				</Series.Sequence>
				{/* second text here */}
				<Series.Sequence durationInFrames={50}>
					<AbsoluteFill style={{backgroundColor: '#F4DB78'}}>
						<Title titleText={'first title'} titleColor={'#495B53'} />
					</AbsoluteFill>
				</Series.Sequence>
				{/* second two videos here */}
				<Series.Sequence durationInFrames={50}>
					<CustomVideoComponent />
				</Series.Sequence>
				{/* third text here */}
				<Series.Sequence durationInFrames={50}>
					<AbsoluteFill style={{backgroundColor: '#F4DB78'}}>
						<Title titleText={'first title'} titleColor={'#495B53'} />
					</AbsoluteFill>
				</Series.Sequence>
				{/* third three videos here */}
				<Series.Sequence durationInFrames={70}>
					<CustomVideoComponent />
				</Series.Sequence>
				{/* final text here */}
				<Series.Sequence durationInFrames={100}>
					<AbsoluteFill style={{backgroundColor: '#F4DB78'}}>
						<Title titleText={'first title'} titleColor={'#495B53'} />
					</AbsoluteFill>
				</Series.Sequence>
			</Series>
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
