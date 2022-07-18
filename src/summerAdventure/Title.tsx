import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_FAMILY} from '../constants/constants';
import styled from 'styled-components';


const CustomTitle = styled.span`
	font-family: ${FONT_FAMILY};
	font-weight: bold;
	font-size: 100px;
`;

export const Title: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	return (
		<CustomTitle>{titleText}</CustomTitle>
	)
}
