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
import Link from '@material-ui/core/Link';

const useStyles = (theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
});

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

class ProductDialog extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.handleDialogClose = this.handleDialogClose.bind(this);
	}
	handleDialogClose() {
		this.props.closeCookiesDialog();
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
				<DialogTitle id="alert-dialog-title">Cookies</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Este site utiliza cookies para te proporcionar uma melhor experiência. Ao continuar navegando, você aceita nossa <Link href="#/politica-de-privacidade" onClick={() => this.props.history.push("politica-de-privacidade")}>Política de Privacidade.</Link>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={this.handleDialogClose} color="primary" autofocus>
						Entendido!
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	}

}

export default withStyles(useStyles)(ProductDialog)