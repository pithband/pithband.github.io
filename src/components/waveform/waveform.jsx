import React from 'react';
import ReactDOM from 'react-dom';
import WaveSurfer from 'wavesurfer.js';

const play = () => {
	this.wavesurfer.play();
};

export default class Waveform extends React.Component {
	componentDidMount() {
		this.$el = ReactDOM.findDOMNode(this);
		this.$waveform = this.$el.querySelector('.wave');
		this.wavesurfer = WaveSurfer.create({
			container     : this.$waveform,
			waveColor     : 'violet',
			progressColor : 'purple'
		});
		this.wavesurfer.load(this.props.src);
		this.wavesurfer.on('ready', function () {
			this.wavesurfer.play();
		});
	}

	

	componentWillUnmount() {}
	render() {
		return (
			<div>
			<div className="waveform">
				<div className="wave" />
			</div>
			<button onClick={play}></button>
			</div>
		);
	}
}

Waveform.defaultProps = {
	src : '../content/releases/ssm/fool.mp3'
};
