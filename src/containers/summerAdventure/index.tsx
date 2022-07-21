import {
	Sequence,
	Audio,
} from 'remotion';
import styled from 'styled-components';

import fiftySecondAudio from '../../../assets/sounds/HappySummer15.wav';
import {CustomVideoComponent} from '../../components/CustomVideoComponent';
import {IntroVideos} from '../../components/IntroVideos';
import thirdVideo from "../../../assets/videos/3.mp4";
import fourthVideo from "../../../assets/videos/4.mp4";
import eighthVideo from "../../../assets/videos/8.mp4";
// ### import them together
import { ShowCaseComponent } from '../../components/ShowCaseComponent';
import { Transition } from '../../components/Transition'
import config from "../../../config.json";
import { sequenceCutSafeMargin } from '../../constants'
import bgYellow from "../../../assets/images/bg_blue_tint.png";


export const SummerAdventure: React.FC = () => {
	return (
		<Wrapper>
			<Sequence from={0} durationInFrames={60 + sequenceCutSafeMargin}>
				<ShowCaseComponent 
					title={config.text.start_text[0]}
					subtitle=''
					textColor={config.color[2]}
					animationType=''
					backgroundCover={bgYellow}
				/>
			</Sequence>
			<Sequence from={60} durationInFrames={130 + sequenceCutSafeMargin}>
				<IntroVideos />
			</Sequence>
			<Sequence from={190} durationInFrames={40 + sequenceCutSafeMargin}>
				<ShowCaseComponent 
					title={config.text.start_text[0]}
					subtitle=''
					textColor={config.color[2]}
					animationType=''
					backgroundCover={bgYellow}
				/>
			</Sequence>
			<Sequence from={225} durationInFrames={25}>
				<Transition swipe='left'>
					<CustomVideoComponent 
						src={thirdVideo}
						volume={0}
						from={0}
						startFrom={60}
						endAt={130}
					/>
				</Transition>
			</Sequence>
			<Sequence from={250} durationInFrames={110}>
				<Transition swipe='bottom'>
					<CustomVideoComponent 
						src={fourthVideo}
						volume={0}
						from={0}
					/>
				</Transition>
			</Sequence>
			<Sequence from={320} durationInFrames={35}>
				<ShowCaseComponent 
					title={config.text.start_text[0]}
					subtitle=''
					textColor={config.color[2]}
					animationType=''
					backgroundCover={bgYellow}
				/>
			</Sequence>
			<Sequence from={350} durationInFrames={85}>
				<CustomVideoComponent 
					src={eighthVideo}
					volume={0}
					from={0}
					startFrom={1120}
					endAt={1300}
				/>
			</Sequence>
			<Sequence from={430}>
				<ShowCaseComponent 
					title={config.text.start_text[0]}
					subtitle=''
					textColor={config.color[2]}
					animationType=''
					backgroundCover={bgYellow}
				/>
			</Sequence>
			<Audio src={fiftySecondAudio} />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex: 1;
	background-color: ${config.color[0]}
`
