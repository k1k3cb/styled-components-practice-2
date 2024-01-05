import styled from 'styled-components';
import { COLORS } from '../../styles/COLORS';

export const StyledStarsCardContainer = styled.div`
	border-radius: 0.5rem;
	background-color: ${COLORS.background};
	text-align: center;
	padding-top: 1rem;
	margin-bottom: 1rem;
	@media (width>= 768px) {
		width: 445px;
		display: flex;
		align-items: center;
		gap: 20px;
		padding-inline: 30px;
		padding-top: 0.3125rem;
		margin-right: ${({ margin }) => margin}px;
	}
`;

export const StyledStarsContainer = styled.div`
	display: flex;
	justify-content: center;
	@media (width>= 768px) {
	}
`;

export const StyledStarsText = styled.p`
	color: ${COLORS.primary};
	font-size: 1.0625rem;
	font-weight: 700;
	padding-bottom: 1rem;

	@media (width>= 768px) {
		padding-bottom: 0;
	}
`;

export const StyledStarIcon = styled.img`
	margin-inline: 0.1875rem;
`;
