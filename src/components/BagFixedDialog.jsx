import React from "react";

import {withStyles, withWidth} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const useStyles = (theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
});

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

class BagFixedDialog extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.handleDialogClose = this.handleDialogClose.bind(this);
	}
	handleDialogClose() {
		this.props.closeBagFixedDialog();
	}

	render() {
		const { classes } = this.props;

		return <React.Fragment>
			<Dialog
				open={this.props.open}
				onClose={this.handleDialogClose}
				TransitionComponent={Transition}
				className={classes.root}
				aria-labelledby="alert-dialog-title"
       			aria-describedby="alert-dialog-description"
				>
				<DialogTitle id="alert-dialog-title">Atualização na sacola</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Alguns itens não estão mais disponíveis em nosso catálogo e foram removidos da sua sacola.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={this.handleDialogClose} color="primary" autofocus>
						Ok, vou conferir!
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	}

}

export default withStyles(useStyles)(BagFixedDialog)