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
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import CatalogData from '../data/CatalogData';

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
	},
	orderSection: {
		margin: theme.spacing(3, 2),
	},
	input: {
		width: '100%',
	}
});

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

class ProductDialog extends React.Component {

	constructor(props) {
		super(props);
		this.state = {order: this.props.filter.order, sizes: this.props.filter.sizes};
		this.handleFilter = this.handleFilter.bind(this);
		this.handleDialogClose = this.handleDialogClose.bind(this);
		this.handleClear = this.handleClear.bind(this);
		this.toggleSize = this.toggleSize.bind(this);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.filter != this.props.filter) {
			this.setState({order: this.props.filter.order, sizes: this.props.filter.sizes});
		}
	}

	handleFilter() {
		this.props.setFilter(this.state.order, this.state.sizes);
	}

	handleDialogClose() {
		this.props.closeFilter();
	}

	handleClear() {
		this.props.setFilter(1, []);
	}

	toggleSize(sizeId) {
		if (this.state.sizes.includes(sizeId))
			this.state.sizes.splice(this.state.sizes.indexOf(sizeId), 1);
		else
			this.state.sizes.push(sizeId);
		this.forceUpdate();
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
							Filtar por Tamanho
						</Typography>
						<div className={classes.sizeOptions}>
							{Object.keys(CatalogData.sizes).map((size, i) => (
								<Chip className={classes.sizeChip} label={CatalogData.sizes[size].name} key={size} onClick={() => this.toggleSize(size)} color={this.state.sizes.includes(size) ? "primary" : 'default'}/>))
							}
						</div>
					</div>
					<div className={classes.orderSection}>
						<FormControl variant="outlined" className={classes.input}>
							<InputLabel htmlFor="order">Ordem</InputLabel>
							<Select
								native
								value={this.state.order}
								onChange={(e) => {this.setState({order: e.target.value})}}
								label="Ordem"
								inputProps={{
								name: 'Ordem',
								id: 'order',
								}}
							>
								<option value={1}>Padrão</option>
								<option value={2}>Preço Crescente</option>
								<option value={3}>Preço Decrescente</option>
							</Select>
						</FormControl>
					</div>
				</DialogContent>
				<DialogActions>
					<Button onClick={this.handleClear} color="primary">
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