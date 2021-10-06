import React from "react";
import ReactDOM from "react-dom";
import {withStyles} from '@material-ui/core/styles';

const useStyles = (theme) => ({
	soon: {
		display: 'flex',
		justifyContent: 'center',
		height: '100vh',
		width: '100vw',
		alignItems: 'center',
		backgroundColor: '#f26389',
	},
	soonImg: {
		overflow: 'hidden',
		height: '100vh',
		maxHeight: '100vw',
		width: '100vh',
		maxWidth: '100vw',
		backgroundImage: 'url(./assets/image/soon.png)',
		backgroundSize: 'cover',
	},
});

class SoonRoute extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { classes } = this.props;
		return <React.Fragment>
			<div className={classes.soon}><span className={classes.soonImg}></span></div>
		</React.Fragment>
	}

}

export default withStyles(useStyles)(SoonRoute)