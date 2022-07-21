import {
	Img
} from 'remotion';


export const Image: React.FC<{
	src: string;
  style?: object;
  width?: number;
  height?: number;
}> = ({src, style, width, height}) => {

	return (
    <div style={{...style}}>
      <Img src={src} style={{width, height}}/>
    </div>
    
	);
};
