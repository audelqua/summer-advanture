import {Composition} from 'remotion';
import {SummerAdventure} from './containers/summerAdventure';
import { ShowCaseComponent } from './components/ShowCaseComponent';
import {IntroVideos} from './components/IntroVideos';
import config from "../config.json";
import bgYellow from "../assets/images/bg_blue_tint.png";
import { cardCutSafeMargin, videoCutSafeMargin } from './constants'

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="summerAdventure"
				component={SummerAdventure}
				durationInFrames={480}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="starterCard"
				component={ShowCaseComponent}
				durationInFrames={60 + cardCutSafeMargin}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					title: config.text.start_text[0],
					subtitle: '',
					textColor:config.color[2],
					animationType: '',
					backgroundCover: bgYellow
				}}
			/>
			<Composition
				id="introVideos"
				component={IntroVideos}
				durationInFrames={130 + cardCutSafeMargin}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="middleCard"
				component={ShowCaseComponent}
				durationInFrames={40 + cardCutSafeMargin}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					title: config.text.middle_text[0].main || '',
					subtitle: config.text.middle_text[0].secondary || '',
					textColor:config.color[2],
					animationType: '',
					backgroundCover: bgYellow
				}}
			/>
		</>
	);
};
