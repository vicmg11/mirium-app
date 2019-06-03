/*
* Created by: Victor Marmolejo
* Date: 5/31/2019
* Carousel Exercise
* to run this app type on the console yarn start
*/
import React from 'react';
import Carousel from './components/Carousel';
import nfl_logo from './static/images/nfl_logo.gif';

const Header = ({ logo, title, subtitle }) => (
	<header>
		<img
			src={logo}
			className={title ? 'main' : 'detail'}
			height={title ? 50 : 180}
			width={title ? 50 : 180}
			alt=""
		/>
		<div className="title">{title}</div>
		<div className="subtitle">{subtitle}</div>
	</header>
);

const Content = ({ nflTeams, handleTitles }) => (
	<content>
		<Carousel nflTeams={nflTeams} handleTitles={handleTitles} />
	</content>
);

const Footer = () => (
	<footer>
		<div className="ccyear">@ 2019</div>
	</footer>
);

class MainApp extends React.Component {
	state = {
		title: '',
		subtitle: '',
		nflTeams: [],
		isLoaded: false,
		error: null
	};

	componentDidMount() {
    //Read some data from the Api
		fetch('https://api.sportsdata.io/v3/nfl/scores/json/AllTeams?key=2e880900eac84150acb7a59ea6dd83c8')
			.then((res) => res.json())
			.then(
				(result) => {
					const cleanResult = result.filter(
						(item, index) =>
							item.Key !== 'AFC' && item.Key !== 'NFC' && item.Key !== 'LARAID' && item.Key !== 'LARAMS'
					);
					this.setState({
						isLoaded: true,
						nflTeams: cleanResult
					});
				},
				// Catch errors here
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			);

		this.setTitles(true);
	}

	setTitles = (showTitle, logo, title, subtitle) => {
		if (showTitle) {
			this.setState({
				logo: nfl_logo,
				title: 'NFL Teams',
				subtitle: 'NFL Team Information'
			});
		} else {
			this.setState({
				logo: logo,
				title: '', // title,
				subtitle: '' //subtitle
			});
		}
	};

	render() {
		const { logo, title, subtitle, isLoaded, nflTeams, error } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className="app">
					<Header logo={logo} title={title} subtitle={subtitle} />
					<Content nflTeams={nflTeams} handleTitles={this.setTitles} />
					<Footer />
				</div>
			);
		}
	}
}

function App() {
	return <MainApp />;
}

export default App;
