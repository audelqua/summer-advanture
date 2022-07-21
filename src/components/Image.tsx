import { Img } from 'remotion';

interface ComponentProps {
  src: string;
  style?: object;
  width?: number;
  height?: number;
}

export const Image: React.FC<ComponentProps> = ({src, style, width, height}) => {

	return (
    <div style={{...style}}>
      <Img src={src} style={{width, height}} />
    </div>
	)
}
