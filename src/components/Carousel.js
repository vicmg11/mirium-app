import React from 'react';
import Details from '../components/Details';

class Carousel extends React.Component {
	//Display Logos will held 3 logos at the time.
	state = {
		logosArr: [],
		displayLogos: [],
		initialIndex: 0,
		finalIndex: 3,
		load: false,
		showCarousel: true,
		teamStats: []
	};

	componentDidMount() {
		//Get all the logos and save them in the logosArr
		const obj = {};
		for (let team of this.props.nflTeams) {
			if (team.WikipediaLogoUrl) {
				obj[team.WikipediaLogoUrl + '?' + team.Key + '&' + team.FullName] = true;
			}
		}
		let logosArr = Object.keys(obj);

		this.setState({
			logosArr: logosArr,
			displayLogos: logosArr.slice(this.state.initialIndex, this.state.finalIndex),
			load: true
		});
	}

	showDetails = (displayTeam) => {
		var logo='';
		var title='';
		var subtitle=''

		this.setState({
			showCarousel: !this.state.showCarousel
		});

		if (displayTeam) {
			//Get the selected team data
			const teamStats = this.props.nflTeams.filter((team, index) => team.Key === displayTeam);
			this.setState({
				teamStats: teamStats[0]
			});
			//Set Headers
			logo = teamStats[0]['WikipediaLogoUrl'];
			//No used for now in case we want to display a title or header on the detail page
			//title = teamStats[0]['FullName'];
			//subtitle = teamStats[0]['Conference'] + ' ' + teamStats[0]['Division']
		}

		this.props.handleTitles(!this.state.showCarousel, logo, title, subtitle);
	};

	renderImage = (imageUrl, index) => {
		const team = imageUrl.split('?')[1].split('&');
		return (
			<div className="image" key={index} onClick={() => this.showDetails(team[0])}>
				<img src={imageUrl} alt="" />
				<div className="team-name">{team[1]}</div>
			</div>
		);
	};

	prepareArray = (endIndex, startIndex, logosArr) => {
		if (endIndex < startIndex) {
			//if end of the array split the array to loop around
			const arr1 = logosArr.filter((_, index) => index <= endIndex);
			const arr2 = logosArr.filter((_, index) => index >= startIndex);
			const mergedArr3 = [ ...arr2, ...arr1 ];
			this.setState({ displayLogos: mergedArr3 });
		} else {
			this.setState({
				displayLogos: logosArr.slice(startIndex, endIndex)
			});
		}
	};

	//When user clicks previous validate if user wants to loop around so change indexes
	previousSlide = () => {
		const { initialIndex, finalIndex, logosArr } = this.state;
		const lastIndex = logosArr.length;

		const shouldResetInicialIndex = initialIndex === 0;
		const startIndex = shouldResetInicialIndex ? lastIndex - 1 : initialIndex - 1;

		const shouldResetFinalIndex = finalIndex === 0;
		const endIndex = startIndex === lastIndex - 1 ? 1 : shouldResetFinalIndex ? lastIndex : finalIndex - 1;

		this.setState({ initialIndex: startIndex });
		this.setState({ finalIndex: endIndex });
		this.prepareArray(endIndex, startIndex, logosArr);
	};

	nextSlide = () => {
		const { initialIndex, finalIndex, logosArr } = this.state;
		const lastIndex = logosArr.length;

		const shouldResetInicialIndex = initialIndex === lastIndex - 1;
		const startIndex = shouldResetInicialIndex ? 0 : initialIndex + 1;

		const shouldResetFinalIndex = finalIndex === lastIndex;
		const endIndex = startIndex === 0 ? 3 : shouldResetFinalIndex ? 0 : finalIndex + 1;

		this.setState({ initialIndex: startIndex });
		this.setState({ finalIndex: endIndex });
		this.prepareArray(endIndex, startIndex, logosArr);
	};

	render() {
		return this.state.showCarousel ? (
			<div className="main-gallery">
				<button className="btn-carousel">
					<div className="btn-arrow" onClick={() => this.previousSlide()} >{`<`}</div>
				</button>
				<div className="gallery">
					{this.state.load && (
						<div className="images">
							{this.state.displayLogos.map((imageUrl, index) => this.renderImage(imageUrl, index))}
						</div>
					)}
				</div>
				<button className="btn-carousel">
					<div className="btn-arrow" onClick={() => this.nextSlide()} >{`>`}</div>
				</button>
			</div>
		) : (
			<Details teamStats={this.state.teamStats} handleClick={() => this.showDetails()} />
		);
	}
}

export default Carousel;
