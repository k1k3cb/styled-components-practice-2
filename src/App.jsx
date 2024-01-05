import CardStars from './components/cardStars/CardStars';
import Header from './components/header/Header';
import UserCard from './components/userCard/UserCard';
import { CARDS } from './constants/cards';
import {
	StyledBottomContainerGl,
	GlobalStyles,
	StyledStarsContainerGl,
	StyledTopContainerGl
} from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<StyledTopContainerGl>
				<Header />

				<StyledStarsContainerGl>
					<CardStars text='Rated 5 Stars in Reviews' margin={80} />
					<CardStars text='Rated 5 Stars in Report Guru' margin={40}  />
					<CardStars text='Rated 5 Stars in BestTech' margin={0}  />
				</StyledStarsContainerGl>
			</StyledTopContainerGl>
			<StyledBottomContainerGl>
				{CARDS.map(card => (
					<UserCard
						key={card.id}
						image={card.image}
						user={card.user}
						userDescription={card.userDescription}
						text={card.content}
						margin={card.$marginTop}
					/>
				))}
			</StyledBottomContainerGl>
		</>
	);
};

export default App;
