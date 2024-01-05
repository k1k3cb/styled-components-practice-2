import {
	StyledStarIcon,
	StyledStarsCardContainer,
	StyledStarsContainer,
	StyledStarsText
} from './styles';

const CardStars = ({ text, margin }) => {
	return (
		<StyledStarsCardContainer margin={margin}>
			<StyledStarsContainer >
				<StyledStarIcon src='/assets/images/icon-star.svg' alt='' />
				<StyledStarIcon src='/assets/images/icon-star.svg' alt='' />
				<StyledStarIcon src='/assets/images/icon-star.svg' alt='' />
				<StyledStarIcon src='/assets/images/icon-star.svg' alt='' />
				<StyledStarIcon src='/assets/images/icon-star.svg' alt='' />
			</StyledStarsContainer>
			<StyledStarsText>{text}</StyledStarsText>
		</StyledStarsCardContainer>
	);
};

export default CardStars;
