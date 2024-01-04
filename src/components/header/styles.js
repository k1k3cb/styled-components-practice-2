import styled from 'styled-components';
import { COLORS } from '../../styles/COLORS';

export const Title = styled.h1`
	color: ${COLORS.primary};
	text-align: center;
	/* width: 327px; */
	font-size: 40px;
	font-style: normal;
	font-weight: 700;
	line-height: 32px; /* 80% */
	letter-spacing: -1.429px;
`;

export const TitleDescription = styled.p`
	color: ${COLORS.titleDesc};
	text-align: center;
	font-size: 19px;
	font-style: normal;
	font-weight: 500;
	line-height: 25px; /* 131.579% */
	letter-spacing: -0.633px;
    margin-bottom: 39px;
`;
