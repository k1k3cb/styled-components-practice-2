import styled from 'styled-components';
import { COLORS } from '../../styles/COLORS';

export const StarsCardContainer = styled.div`
	border-radius: 0.5rem;
	background-color: ${COLORS.background};
	text-align: center;
	padding-top: 1rem;
	margin-bottom: 1rem;
`;

export const StarsContainer = styled.div`
	display: flex;
	justify-content: center;
	
`;

export const StarsText = styled.p`
	color: ${COLORS.primary};
	font-size: 1.0625rem;
	font-weight: 700;
	padding-bottom: 1rem;
`;

export const StarIcon = styled.img`
	margin-inline: 0.1875rem;
`;
