import styled from 'styled-components';
import { COLORS } from '../../styles/COLORS';

export const StyledUserCardContainer = styled.div`
	background-color: ${COLORS.primary};
	border-radius: 8px;
	padding: 20px 32px;
	margin-bottom: 16px;

	@media (width>= 768px) {
		width: 350px;
		margin-top: ${({ margin }) => margin}px;
	}
`;
export const StyledHeaderCard = styled.header`
	display: flex;
	align-items: center;
`;

export const StyledUserImg = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 40px;
	margin-right: 23px;
`;

export const StyledUserName = styled.h2`
	color: ${COLORS.text};
	font-size: 17px;
	font-weight: 700;
	margin: 0;
`;

export const StyledUserDescription = styled(StyledUserName)`
	color: ${COLORS.secondary};
	font-weight: 400;
`;

// export const UserDescription = styled.`
// 	${UserName};
// 	color: ${COLORS.secondary};
// 	font-weight: 400;

// `;

export const StyledCardText = styled.p`
	color: ${COLORS.text};
	font-size: 17px;
	font-weight: 500;
	line-height: 22px; /* 129.412% */
	letter-spacing: -0.304px;
`;
