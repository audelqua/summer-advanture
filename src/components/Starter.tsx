import {
	AbsoluteFill,
} from 'remotion';
import {Title} from '../containers/summerAdventure/Title';
import config from "../../config.json";


export const Starter: React.FC = () => {
  
	return (
    <AbsoluteFill style={{backgroundColor: config.color[0]}}>
      <Title titleText={config.text.start_text[0]} titleColor={config.color[3]} />
    </AbsoluteFill>
	)
}