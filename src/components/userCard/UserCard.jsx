import {
	CardText,
	HeaderCard,
	UserCardContainer,
	UserDescription,
	UserImg,
	UserName
} from './styles';

const UserCard = ({ image, user, userDescription, text }) => {
	return (
		<UserCardContainer>
			<HeaderCard>
				<UserImg src={image} alt={`${user} photo`} />
				<div>
					<UserName>{user}</UserName>
					<UserDescription>{userDescription}</UserDescription>
				</div>
			</HeaderCard>
			<CardText>{text}</CardText>
		</UserCardContainer>
	);
};

export default UserCard;
