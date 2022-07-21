import {
	AbsoluteFill,
} from 'remotion';
import { Image } from '../components/Image'
import logo from '../../assets/images/logo_zebra.png';

interface ComponentProps {
	style: object
}

export const Logo: React.FC<ComponentProps> = ({style}) => {

	return (
		<AbsoluteFill
			style={{
          zIndex: 1,
          position: 'absolute',
          top: '60%',
					display: 'flex',
					alignItems: 'center',
					...style
			}}
		 >
			<Image src={logo} width={300} height={300}/>
		 </AbsoluteFill>
	);
};
