import styled from 'styled-components';
import { COLORS } from '../../styles/COLORS';

export const StyledHeaderContainer = styled.header`
	@media (width>= 768px) {
		width: 40%;
		
	}
`;

export const StyledTitle = styled.h1`
	color: ${COLORS.primary};
	text-align: center;
	font-size: 40px;
	font-style: normal;
	font-weight: 700;
	line-height: 32px; /* 80% */
	letter-spacing: -1.429px;
	/* background-image: url('/assets/images/bg-pattern-top-mobile.svg'); */

	@media (width>= 768px) {
		text-align: left;
		max-width: 400px;
		margin-top: 0;
	}
`;

export const StyledTitleDescription = styled.p`
	color: ${COLORS.titleDesc};
	text-align: center;
	font-size: 19px;
	font-style: normal;
	font-weight: 500;
	line-height: 25px; /* 131.579% */
	letter-spacing: -0.633px;
	margin-bottom: 39px;
	@media (width>= 768px) {
		text-align: left;
		max-width: 400px;
	}
`;
