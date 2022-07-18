import {Composition} from 'remotion';
import {SummerAdventure} from './SummerAdventure';
import {Logo} from './summerAdventure/Logo';

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
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			{/* <Composition
				id="OnlyLogo"
				component={Logo}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/> */}
		</>
	);
};
