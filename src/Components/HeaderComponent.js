aimport React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

export default class Header extends Component {
	render() {
		return(
			<React.Fragment>
				<Jumbotron>
					<div className="container">
						<div className=" row row-header">
							<div className="col-12 col-sm-6">
								<h1>Kitchen King</h1>
							</div>
						</div>
					</div>
				</Jumbotron>
			</React.Fragment>
		);
	}
}