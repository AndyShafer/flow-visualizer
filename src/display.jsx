'use strict'

class Display extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	drawGraph() {
		return (
			<React.Fragment>
				{ this.props.graph.nodes.map(node => {
					return <circle key={node.id} cx={node.x} cy={node.y}
						r="10" strokeWidth="2" stroke="black" fill="gray"/>; }) }
			</React.Fragment>
		);
	}
	render() {
		return (
			<svg id="display" width="1080" height="600" style={{ border: '3px solid #000000' }}>
				{ this.drawGraph() }
			</svg>
		);
	}

}
