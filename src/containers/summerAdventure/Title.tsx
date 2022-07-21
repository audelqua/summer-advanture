import React from 'react';

import styled from 'styled-components';

interface CustomTitleProps {
	titleColor: string;
}

interface ComponentProps {
		titleText: string;
		titleColor: string;
		style?: object
}

export const Title: React.FC<ComponentProps> = ({titleText, titleColor, style}) => {
	// Import config from '../../../config.json'
	// Console.log('config.main_font', config.main_font[0]);
	// console.log('document.fonts', document.fonts);
	
	return (
		<CustomTitle style={{...style}} titleColor={titleColor}>{titleText}</CustomTitle>
	)
}

const CustomTitle = styled.span`
	font-family: Bodoni;
	font-weight: bold;
	font-size: 70px;
	color: ${(p: CustomTitleProps) => p.titleColor}
`;

