'use strict';


const e = React.createElement;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			graph: {
				nodes: [
					{ id: 0, x: 100, y: 100 },
					{ id: 1, x: 300, y: 100 }
				],
				adj: [
					[ { id: 1, cap: 5 } ],
					[ { id: 0, cap: 5 } ]
				],
				source: 0,
				sink: 1
			}
		};
	}
	render() {
		return (
			<div className="container" onKeyDown={this.onKeyDown}>
				<div className="row"><div className="col">
					<ControlBar/>
				</div></div>
				<div className="row"><div className="col">
					<Display graph={this.state.graph}/>
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
