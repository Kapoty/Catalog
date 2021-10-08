import React from "react";
import ReactDOM from "react-dom";
import {withStyles} from '@material-ui/core/styles';

const useStyles = (theme) => ({
	blocked: {
		position: 'fixed',
		zIndex: '100000000',
		display: 'flex',
		justifyContent: 'center',
		height: '100vh',
		width: '100vw',
		alignItems: 'center',
		backgroundColor: '#f26389',
	},
	blockedImg: {
		overflow: 'hidden',
		height: '100vh',
		maxHeight: '100vw',
		width: '100vh',
		maxWidth: '100vw',
		backgroundImage: 'url(./assets/image/soon.png?v=2)',
		backgroundSize: 'cover',
	},
});

class BlockedPopup extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { classes } = this.props;
		return <React.Fragment>
			<div className={classes.blocked} onClick={this.props.blockedClick}><span className={classes.blockedImg}></span></div>
		</React.Fragment>
	}

}

export default withStyles(useStyles)(BlockedPopup)