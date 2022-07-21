import {Composition} from 'remotion';
import {SummerAdventure} from './containers/summerAdventure';
import { ShowCaseComponent } from './components/ShowCaseComponent';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="SummerAdventure"
				component={SummerAdventure}
				durationInFrames={480}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Starter"
				component={ShowCaseComponent}
				durationInFrames={65}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
