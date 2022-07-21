import React from 'react';
import styled from 'styled-components';

interface CustomTitleProps {
	titleColor: string;
}

interface ComponentProps {
		text: string;
		color: string;
		style?: object
}

export const Title: React.FC<ComponentProps> = ({text, color, style}) => {
	// Import config from '../../../config.json'
	// Console.log('config.main_font', config.main_font[0]);
	console.log('document.fonts', document.fonts);
	
	return (
		<StyledTitle style={{...style}} titleColor={color}>{text}</StyledTitle>
	)
}
console.log(window);

const StyledTitle = styled.span`
	font-family: Bodoni;
	font-weight: bold;
	font-size: 70px;
	color: ${(p: CustomTitleProps) => p.titleColor}
`;

