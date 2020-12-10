'use strict';


const e = React.createElement;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="container" onKeyDown={this.onKeyDown}>
				<div className="row"><div className="col">
					<ControlBar/>
				</div></div>
				<div className="row"><div className="col">
					<Display/>
				</div></div>
				<div className="row"><div className="col">
					<PlayBar/>
				</div></div>
			</div>
		);
	}
}

const domContainer = document.querySelector('#app_container');
var app = React.createElement(App);
ReactDOM.render(app, domContainer);
