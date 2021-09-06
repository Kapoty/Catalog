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
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import TextField from '@material-ui/core/TextField';

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
	gallerySection: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
		margin: theme.spacing(3, 2),
	},
	imageList: {
		flexWrap: 'nowrap',
		// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
		transform: 'translateZ(0)',
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
	priceSection: {
		margin: theme.spacing(3, 2),
	},
	qntSection: {
		display: 'flex',
		justifyContent: 'center',
		margin: theme.spacing(3, 2),
		alignItems: 'center',
	},
	qntLabel: {
		margin: theme.spacing(0, 1),
	},
	descSection: {
		margin: theme.spacing(3, 2),
	},
});

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const imgs = [];

for (let i = 1; i<=6; i++)
	imgs.push(`/assets/image/catalog/${i}.jpg`);

class ProductDialog extends React.Component {

	constructor(props) {
		super(props);
		this.state = {dialogOpen: false};
		this.pageReg = /\/p\/[\w\-]+/;
		this.handleDialogClose = this.handleDialogClose.bind(this);
		this.handleAddToBag = this.handleAddToBag.bind(this);
	}

	handleDialogClose() {
		this.props.history.push(this.props.lastPage);
	}

	handleAddToBag() {
		this.props.addToBag({});
		this.props.history.push(this.props.lastPage);
	}

	render() {
		const { classes } = this.props;

		return <React.Fragment>
			<Dialog fullScreen open={this.pageReg.test(this.props.location.pathname)} onClose={this.handleDialogClose} TransitionComponent={Transition} className={classes.root}>
				<DialogTitle id="customized-dialog-title" onClose={this.handleDialogClose}>
					T-Shirt Amarela
					<IconButton aria-label="close" className={classes.closeButton} onClick={this.handleDialogClose}>
						<CloseIcon />
					</IconButton>
				</DialogTitle>
				<DialogContent dividers>
					<div className={classes.gallerySection}>
						<Hidden only={['sm', 'md', 'lg', 'xl']}>
							<ImageList className={classes.imageList} cols={1} rowHeight={250}>
								{imgs.map((img, i) => (
									<ImageListItem key={i}>
										<img src={img} alt={'title'} />
									</ImageListItem>
								))}
							</ImageList>
						</Hidden>
						<Hidden only={['xs', 'md', 'lg', 'xl']}>
							<ImageList className={classes.imageList} cols={2} rowHeight={300}>
								{imgs.map((img, i) => (
									<ImageListItem key={i}>
										<img src={img} alt={'title'} />
									</ImageListItem>
								))}
							</ImageList>
						</Hidden>
						<Hidden smDown>
							<ImageList className={classes.imageList} cols={3} rowHeight={300}>
								{imgs.map((img, i) => (
									<ImageListItem key={i}>
										<img src={img} alt={'title'} />
									</ImageListItem>
								))}
							</ImageList>
						</Hidden>
					</div>
					<div className={classes.priceSection}>
						<Typography variant="h6" color="primary" component="p" align="center">
							R$ {15}
						</Typography>
					</div>
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
					<div className={classes.qntSection}>
						<IconButton aria-label="close" onClick={() => {}}>
							<RemoveCircleIcon />
						</IconButton>
						<Typography className={classes.qntLabel} variant="h6" color="primary" component="p" align="center">
							1
						</Typography>
						<IconButton aria-label="close" onClick={() => {}}>
							<AddCircleIcon />
						</IconButton>
					</div>
					<Divider variant='middle'/>
					<div className={classes.descSection}>
						<Typography gutterBottom>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
							lacus vel augue laoreet rutrum faucibus dolor auctor.
						</Typography>
						<Typography gutterBottom>
							Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
							scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
							auctor fringilla.
						</Typography>
						<Typography gutterBottom>
							Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
							scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
							auctor fringilla.
						</Typography>
						<Typography gutterBottom>
							Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
							scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
							auctor fringilla.
						</Typography>
					</div>
				</DialogContent>
				<DialogActions>
					<Button onClick={this.handleAddToBag} color="primary">
						Adicionar à sacola
					</Button>
				</DialogActions>
				</Dialog>
		</React.Fragment>
	}

}

export default withStyles(useStyles)(ProductDialog)