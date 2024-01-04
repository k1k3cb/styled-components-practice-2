import styled from 'styled-components';
import { COLORS } from '../../styles/COLORS';

export const UserCardContainer = styled.div`
	background-color: ${COLORS.primary};
	border-radius: 8px;
	padding: 20px 32px;
	margin-bottom: 16px;
`;
export const HeaderCard = styled.header`
	display: flex;
	align-items: center;
`;

export const UserImg = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 40px;
	margin-right: 23px;
`;

export const UserName = styled.h3`
	color: ${COLORS.text};
	font-size: 17px;
	font-weight: 700;
	margin: 0;
`;

// export const UserDescription = styled(UserName).h4`
// 	color: ${COLORS.secondary};
// 	font-weight: 400;
// `;

export const UserDescription = styled.h4`
	${UserName};
	color: ${COLORS.secondary};
	font-weight: 400;
`;

export const CardText = styled.p`
	color: ${COLORS.text};
	font-size: 17px;
	font-weight: 500;
	line-height: 22px; /* 129.412% */
	letter-spacing: -0.304px;
`;
