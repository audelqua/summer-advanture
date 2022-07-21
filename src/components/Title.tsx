import React from 'react';
import styled from 'styled-components';
import config from '../../config.json'

interface CustomTitleProps {
	titleColor: string;
}

interface ComponentProps {
		text: string;
		color: string;
		style?: object
}

export const Title: React.FC<ComponentProps> = ({text, color, style}) => {

	return (
		<StyledTitle style={{...style}} titleColor={color}>{text}</StyledTitle>
	)
}

const StyledTitle = styled.span`
	font-family: ${config.main_font[0]};
	font-weight: bold;
	font-size: 70px;
	color: ${(p: CustomTitleProps) => p.titleColor}
`;

