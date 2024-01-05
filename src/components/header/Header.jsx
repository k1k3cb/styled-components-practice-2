import {
	StyledHeaderContainer,
	StyledTitle,
	StyledTitleDescription
} from './styles';

const Header = () => {
	return (
		<StyledHeaderContainer>
			<StyledTitle>10,000+ of our users love our products.</StyledTitle>
			<StyledTitleDescription>
				We only provide great products combined with excellent customer service.
				See what our satisfied customers are saying about our services.
			</StyledTitleDescription>
		</StyledHeaderContainer>
	);
};

export default Header;
