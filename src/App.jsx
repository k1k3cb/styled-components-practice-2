import CardStars from './components/cardStars/CardStars';
import Header from './components/header/Header';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Header />
			<CardStars text='Rated 5 Stars in Reviews'/>
			<CardStars text='Rated 5 Stars in Report Guru'/>
			<CardStars text='Rated 5 Stars in BestTech'/>
		</>
	);
};

export default App;
