import {
	Sequence,
	Audio,
} from 'remotion';
import styled from 'styled-components';

import fiftySecondAudio from '../../../assets/sounds/HappySummer15.wav';
import {CustomVideoComponent} from '../../components/CustomVideoComponent';
import {IntroVideos} from '../../components/IntroVideos';
import fourthVideo from "../../../assets/videos/4.mp4";
import thirdVideo from "../../../assets/videos/3.mp4";
import { ShowCaseComponent } from '../../components/ShowCaseComponent';
import { Transition } from '../../components/Transition'
import config from "../../../config.json";
import bgYellow from "../../../assets/images/bg_blue_tint.png";


export const SummerAdventure: React.FC = () => {
	return (
		<Wrapper>
			<Sequence from={0} durationInFrames={60}>
				<ShowCaseComponent 
					fadeOut
					title={config.text.start_text[0]}
					subtitle=''
					textColor={config.color[2]}
					backgroundCover={bgYellow}
				/>
			</Sequence>
			<Sequence from={60} durationInFrames={130}>
				<IntroVideos />
			</Sequence>
			<Sequence from={190} durationInFrames={40 + 10}>
				<ShowCaseComponent 
					fadeOut
					title={config.text.middle_text[0].main || ''}
					subtitle={config.text.middle_text[0].secondary || ''}
					textColor={config.color[2]}
					backgroundCover={bgYellow}
				/>
			</Sequence>
			<Sequence from={230} durationInFrames={30 + 10}>
				<Transition swipe='left'>
					<CustomVideoComponent 
						src={thirdVideo}
						volume={0}
						from={0}
						startFrom={120}
						endAt={160}
					/>
				</Transition>
			</Sequence>
			<Sequence from={260} durationInFrames={90}>
				<Transition swipe='top'>
					<CustomVideoComponent 
						src={fourthVideo}
						volume={0}
						from={0}
						playbackRate={2}
					/>
				</Transition>
			</Sequence>
			<Sequence from={350} durationInFrames={30 + 2}>
				<ShowCaseComponent 
					fadeOut
					title={config.text.middle_text[1].product_id || ''}
					subtitle={config.text.middle_text[1].quantity || ''}
					textColor={config.color[2]}
					backgroundCover={bgYellow}
				/>
			</Sequence>
			<Sequence from={380} durationInFrames={50 + 10}>
				<CustomVideoComponent 
					src={thirdVideo}
					volume={0}
					from={0}
				/>
			</Sequence>
			<Sequence from={430}>
				<ShowCaseComponent 
					fadeOut
					showLogo
					title={config.text.end_text[0]}
					subtitle=''
					textColor={config.color[2]}
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
