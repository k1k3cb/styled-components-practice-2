import CardStars from './components/cardStars/CardStars';
import Header from './components/header/Header';
import UserCard from './components/userCard/UserCard';
import { CARDS } from './constants/cards';
import { GlobalStyles, StarsContainerGl } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Header />

			<StarsContainerGl>
				<CardStars text='Rated 5 Stars in Reviews' />
				<CardStars text='Rated 5 Stars in Report Guru' />
				<CardStars text='Rated 5 Stars in BestTech' />
			</StarsContainerGl>

			{CARDS.map(card => (
				<UserCard
					key={card.id}
					image={card.image}
					user={card.user}
					userDescription={card.userDescription}
					text={card.content}
				/>
			))}
		</>
	);
};

export default App;
