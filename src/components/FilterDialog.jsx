import React from "react";

import {withStyles, withWidth} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';

const useStyles = (theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
	sizeSection: {
		margin: theme.spacing(3, 2),
	},
	sizeChip: {
		margin: theme.spacing(0.5),
	},
	sizeOptions: {
		display: 'flex',
		justifyContent: 'center',
	}
});

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

class ProductDialog extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.handleFilter = this.handleFilter.bind(this);
		this.handleDialogClose = this.handleDialogClose.bind(this);
	}

	handleFilter() {
		this.props.setFilter({});
	}

	handleDialogClose() {
		this.props.closeFilter();
	}

	render() {
		const { classes } = this.props;

		return <React.Fragment>
			<Dialog open={this.props.open} onClose={this.handleDialogClose} TransitionComponent={Transition} className={classes.root}>
				<DialogTitle id="customized-dialog-title" onClose={this.handleDialogClose}>
					Filtrar
					<IconButton aria-label="close" className={classes.closeButton} onClick={this.handleDialogClose}>
						<CloseIcon />
					</IconButton>
				</DialogTitle>
				<DialogContent dividers>
					<div className={classes.sizeSection}>
						<Typography gutterBottom align="center" variant="body1">
							Selecione o Tamanho
						</Typography>
						<div className={classes.sizeOptions}>
							<Chip className={classes.sizeChip} label="P" />
							<Chip className={classes.sizeChip} color="primary" label="M" />
							<Chip className={classes.sizeChip} label="G" />
						</div>
					</div>
				</DialogContent>
				<DialogActions>
					<Button onClick={this.handleFilter} color="primary">
						Limpar
					</Button>
					<Button onClick={this.handleFilter} color="primary">
						Filtrar
					</Button>
				</DialogActions>
				</Dialog>
		</React.Fragment>
	}

}

export default withStyles(useStyles)(ProductDialog)