import React from 'react';

class Details extends React.Component {
	render() {
		const { handleClick, teamStats } = this.props;
		return (
			<div className="details">
				<button className="btn-carousel" onClick={() => handleClick()}>
					Home / Title
				</button>
				<div className="mainDash">
					<img src={teamStats['WikipediaWordMarkUrl']} alt="" />
				</div>
				<div className="subDash">
					<ul>
						<li>
							<a
								href="http://www.nfl.com/news/story/0ap3000001031671/article/state-of-the-franchise-kyler-murray-brings-hope-to-cardinals?icampaign=trendingNews"
                target="_blank"
                rel="noopener noreferrer"
							>
								<span>
									<img
										alt="State of the Franchise: Kyler Murray brings hope to Cardinals"
										src="https://images.parsely.com/gpUPl1wl322qb_XIpcHSVTbis4Q=/85x85/smart/http%3A//static.nfl.com/static/content/public/photo/2019/05/22/0ap3000001031581_thumbnail_200_150.jpg"
                    title="State of the Franchise: Kyler Murray brings hope to Cardinals"
                  />
								</span>
							</a>
						</li>
						<li>
							<a
								href="http://www.nfl.com/news/story/0ap3000001032085/article/100-biggest-questions-with-100-days-until-2019-season-kicks-off?icampaign=trendingNews"
                target="_blank"
                rel="noopener noreferrer"
							>
								<span>
									<img
										alt="100 biggest questions with 100 days until 2019 season kicks off"
										src="https://images.parsely.com/AmRvr_uvprgiCMaHjgLZ5J4AOOI=/85x85/smart/http%3A//static.nfl.com/static/content/public/photo/2019/05/28/0ap3000001032081_thumbnail_200_150.jpg"
                    title="100 biggest questions with 100 days until 2019 season kicks off"
                  />
								</span>
							</a>
						</li>
						<li>
							<a
								href="http://www.nfl.com/news/story/0ap3000001032315/article/state-of-the-franchise-dont-sleep-on-seahawks-in-crowded-nfc?icampaign=trendingNews"
                target="_blank"
                rel="noopener noreferrer"
							>
								<span>
									<img
										alt="State of the Franchise: Don't sleep on Seahawks in crowded NFC"
										src="https://images.parsely.com/A2g-Lfiq7lxo4TC0oo1Y3GBTvdE=/85x85/smart/http%3A//static.nfl.com/static/content/public/photo/2019/05/29/0ap3000001032295_thumbnail_200_150.jpg"
								    title="State of the Franchise: Don't sleep on Seahawks in crowded NFC"
                  />
								</span>
							</a>
						</li>
						<li>
							<a
								href="http://www.nfl.com/news/story/0ap3000001032132/article/patrick-mahomes-joey-bosa-headline-nfl-allunder25-team?icampaign=trendingNews"
                target="_blank"
                rel="noopener noreferrer"
							>
								<span>
									<img
										alt="Patrick Mahomes, Joey Bosa headline NFL All-Under-25 Team"
										src="https://images.parsely.com/MvpmtGot5lrwiQ-xHNshD3g8dY4=/85x85/smart/http%3A//static.nfl.com/static/content/public/photo/2019/05/28/0ap3000001032127_thumbnail_200_150.jpg"
                    title="Patrick Mahomes, Joey Bosa headline NFL All-Under-25 Team"
                  />
								</span>
							</a>
						</li>
            <li>
							<a
								href="http://www.nfl.com/news/story/0ap3000001032496/article/saquon-on-jones-wait-until-he-wins-two-super-bowls"
                target="_blank"
                rel="noopener noreferrer"
							>
								<span>
									<img
										alt="New York Giants quarterback Daniel Jones (8) practices during an OTA practice on Monday May 20, 2019 in East Rutherford, NJ. (Evan Pinkus via AP)"
										src="http://static.nfl.com/static/content/public/photo/2019/06/01/0ap3000001032494_thumbnail_200_150.jpg"
                    title="Saquon: Wait until Jones 'wins two Super Bowls'"
                  />
								</span>
							</a>
						</li>
					</ul>
				</div>
				<div className="content">
					<div className="column">
						<div>
							<span>City:</span> {teamStats['City']}
						</div>
						<div>
							<span>Name:</span> {teamStats['Name']}
						</div>
						<div>
							<span>Conference:</span> {teamStats['Conference']}
						</div>
						<div>
							<span>Division:</span> {teamStats['Division']}
						</div>
						<div class="stadium">Stadium</div>
						<div>
							<span>Name:</span> {teamStats['StadiumDetails']['Name']}
						</div>
						<div>
							<span>Location:</span> {teamStats['StadiumDetails']['City']}
						</div>
						<div>
							<span>State:</span> {teamStats['StadiumDetails']['State']}
						</div>
					</div>
					<div className="column">
						<div>
							<span>Head Coach:</span> {teamStats['HeadCoach']}
						</div>
						<div>
							<span>Offensive Coordinator:</span> {teamStats['OffensiveCoordinator']}
						</div>
						<div>
							<span>Defensive Coordinator:</span> {teamStats['DefensiveCoordinator']}
						</div>
						<div>
							<span>Special Teams Coach:</span> {teamStats['SpecialTeamsCoach']}
						</div>
						<div class="stadium">&nbsp;</div>
						<div>
							<span>Capacity:</span> {teamStats['StadiumDetails']['Capacity']}
						</div>
						<div>
							<span>Type:</span> {teamStats['StadiumDetails']['Type']}
						</div>
						<div>
							<span>Turf:</span> {teamStats['StadiumDetails']['PlayingSurface']}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Details;
