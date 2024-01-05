import {
	StyledCardText,
	StyledHeaderCard,
	StyledUserCardContainer,
	StyledUserDescription,
	StyledUserImg,
	StyledUserName
} from './styles';

const UserCard = ({ image, user, userDescription, text, margin }) => {
	return (
		<StyledUserCardContainer margin={margin}>
			<StyledHeaderCard>
				<StyledUserImg src={image} alt={`${user} photo`} />
				<div>
					<StyledUserName>{user}</StyledUserName>
					<StyledUserDescription>{userDescription}</StyledUserDescription>
				</div>
			</StyledHeaderCard>
			<StyledCardText>{text}</StyledCardText>
		</StyledUserCardContainer>
	);
};

export default UserCard;
