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
import ZoomInIcon from '@material-ui/icons/ZoomIn';

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
		width: '100%',
		'&::-webkit-scrollbar': {
			height: '5px',
			[theme.breakpoints.up('md')]: {
				height: '10px',
			},
			backgroundColor: theme.palette.background.paper,
		},
		'&::-webkit-scrollbar-thumb:horizontal': {
			backgroundColor: theme.palette.primary.main,
		},
	},
	imageListItem: {
		'&:hover': {
			cursor: 'pointer',
			'& svg': {
				opacity: '100%',
				transition: 'opacity 0.25s',
			}
		}
	},
	zoomInIcon: {
		position: 'absolute',
		left: '50%',
		top: '50%',
		color: 'white',
		opacity: '50%',
		fontSize: '50px',
		transform: 'translate(-50%, -50%)',
		transition: 'opacity 0.25s',
		filter: 'drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))',
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
	imgs.push(`./assets/image/catalog/${i}.jpg`);

class ProductDialog extends React.Component {

	constructor(props) {
		super(props);
		this.state = {dialogOpen: false, imageOpen: false, image: '', itemId: 1, size: 0, qnt: 0, sizesQnt: []};
		this.pageReg = /\/p\/[\d]+/;
		this.contentRef = React.createRef();
		this.descSectionRef = React.createRef();

		this.handleDialogClose = this.handleDialogClose.bind(this);
		this.handleAddToBag = this.handleAddToBag.bind(this);
		this.openImage = this.openImage.bind(this);
		this.closeImage = this.closeImage.bind(this);
		this.handleKnowMore = this.handleKnowMore.bind(this);
		this.setSize = this.setSize.bind(this);
		this.addQnt = this.addQnt.bind(this);
		this.removeQnt = this.removeQnt.bind(this);
	}

	handleDialogClose() {
		this.props.history.push(this.props.lastPage);
	}

	handleAddToBag() {
		this.props.addToBag(this.state.itemId, this.state.size, this.state.qnt);
		this.props.history.push(this.props.lastPage);
	}

	openImage(img) {
		this.setState({imageOpen: true, image: img});
	}

	closeImage() {
		this.setState({imageOpen: false});
	}

	handleKnowMore() {
		this.contentRef.current.scrollTop =  this.descSectionRef.current.offsetTop - this.contentRef.current.offsetTop - 10;
	}

	setSize(sizeId) {
		this.setState({size: sizeId, qnt: Math.min(this.state.qnt, CatalogData.items[this.state.itemId].sizes[sizeId].qnt)});
	}

	addQnt() {
		this.setState({qnt: this.state.qnt+1});
	}

	removeQnt() {
		this.setState({qnt: this.state.qnt-1});
	}

	render() {
		const { classes } = this.props;

		if (this.pageReg.test(this.props.location.pathname)) {
			if (this.state.dialogOpen == false) {
				let itemId = this.props.location.pathname.match(/(?<=\/p\/)[\d]+/)[0];
				if (!Object.keys(CatalogData.items).includes(itemId)) {
					this.props.history.push(this.props.lastPage);
				} else {
					this.state.itemId = itemId;
					this.state.dialogOpen = true;
					this.state.sizesQnt = [];
					CatalogData.items[itemId].sizes.forEach((size, i) => {
						let qnt = size.qnt;
						for (let j=0; j<this.props.bag.items.length; j++)
							if (this.props.bag.items[j].itemId == itemId && this.props.bag.items[j].size == i) {
								qnt -= this.props.bag.items[j].qnt;
								break;
							}
						this.state.sizesQnt.push(qnt);
					});
					this.state.qnt = 0;
					this.state.size = 0;
					for (let i=0; i<this.state.sizesQnt.length; i++)
						if (this.state.sizesQnt[i] > 0) {
							this.state.size = i;
							this.state.qnt = 1;
							break;
						}
				}
			}
		} else if (this.state.dialogOpen == true) {
			this.state.dialogOpen = false;
		}

		return <React.Fragment>
			<Dialog fullScreen open={this.state.dialogOpen} onClose={this.handleDialogClose} TransitionComponent={Transition} className={classes.root}>
				<DialogTitle id="customized-dialog-title" onClose={this.handleDialogClose}>
					{CatalogData.items[this.state.itemId].name}
					<IconButton aria-label="close" className={classes.closeButton} onClick={this.handleDialogClose}>
						<CloseIcon />
					</IconButton>
				</DialogTitle>
				<DialogContent dividers ref={this.contentRef}>
					<div className={classes.gallerySection}>
						<Hidden only={['sm', 'md', 'lg', 'xl']}>
							<ImageList className={classes.imageList} cols={1} rowHeight={250}>
								{[...Array(CatalogData.items[this.state.itemId].imgCount).keys()].map((imgId) => (
									<ImageListItem className={classes.imageListItem} key={imgId} onClick={() => this.openImage(`${CatalogData.imagePath}${this.state.itemId}/${imgId+1}.jpg`)}>
										<img src={`${CatalogData.imagePath}${this.state.itemId}/${imgId+1}-512.jpg`} alt={CatalogData.items[this.state.itemId].name}/>
										<ZoomInIcon className={classes.zoomInIcon}/>
									</ImageListItem>
								))}
							</ImageList>
						</Hidden>
						<Hidden only={['xs', 'md', 'lg', 'xl']}>
							<ImageList className={classes.imageList} cols={2} rowHeight={300}>
								{[...Array(CatalogData.items[this.state.itemId].imgCount).keys()].map((imgId) => (
									<ImageListItem className={classes.imageListItem} key={imgId} onClick={() => this.openImage(`${CatalogData.imagePath}${this.state.itemId}/${imgId+1}.jpg`)}>
										<img src={`${CatalogData.imagePath}${this.state.itemId}/${imgId+1}-512.jpg`} alt={CatalogData.items[this.state.itemId].name}/>
										<ZoomInIcon className={classes.zoomInIcon}/>
									</ImageListItem>
								))}
							</ImageList>
						</Hidden>
						<Hidden smDown>
							<ImageList className={classes.imageList} cols={3} rowHeight={300}>
								{[...Array(CatalogData.items[this.state.itemId].imgCount).keys()].map((imgId) => (
									<ImageListItem className={classes.imageListItem} key={imgId} onClick={() => this.openImage(`${CatalogData.imagePath}${this.state.itemId}/${imgId+1}.jpg`)}>
										<img src={`${CatalogData.imagePath}${this.state.itemId}/${imgId+1}-512.jpg`} alt={CatalogData.items[this.state.itemId].name}/>
										<ZoomInIcon className={classes.zoomInIcon}/>
									</ImageListItem>
								))}
							</ImageList>
						</Hidden>
					</div>
					<div className={classes.priceSection}>
						<Typography variant="h6" color="primary" component="p" align="center">
							R$ {CatalogData.items[this.state.itemId].price}
						</Typography>
					</div>
					<div className={classes.sizeSection}>
						<Typography gutterBottom align="center" variant="body1">
							Selecione o Tamanho
						</Typography>
						<div className={classes.sizeOptions}>
							{CatalogData.items[this.state.itemId].sizes.map((size, i) => (
								<Chip className={classes.sizeChip} label={CatalogData.sizes[size.id].name} key={size.id} onClick={() => this.setSize(size.id)} color={this.state.size == i ? "primary" : 'default'} disabled={this.state.sizesQnt[i] == 0 ? true : false}/>))
							}
						</div>
					</div>
					<div className={classes.qntSection}>
						<IconButton aria-label="close" onClick={this.removeQnt} disabled={this.state.qnt <= 1}>
							<RemoveCircleIcon />
						</IconButton>
						<Typography className={classes.qntLabel} variant="h6" color="primary" component="p" align="center">
							{this.state.qnt}
						</Typography>
						<IconButton aria-label="close" onClick={this.addQnt} disabled={this.state.qnt >= this.state.sizesQnt[this.state.size]}>
							<AddCircleIcon />
						</IconButton>
					</div>
					<Divider variant='middle'/>
					<div className={classes.descSection} ref={this.descSectionRef}>
						<Typography gutterBottom>
							{CatalogData.items[this.state.itemId].desc}
						</Typography>
					</div>
				</DialogContent>
				<DialogActions>
					<Button onClick={this.handleKnowMore}>
						Saiba Mais
					</Button>
					<Button onClick={this.handleAddToBag} color="primary" disabled={this.state.qnt == 0}>
						Adicionar à sacola
					</Button>
				</DialogActions>
				</Dialog>
				<Dialog fullScreen open={this.state.imageOpen} onClose={this.closeImage} TransitionComponent={Transition}>
					<DialogTitle id="openImageDialog" onClose={this.closeImage}>
					Visualizar Foto
						<IconButton aria-label="close" className={classes.closeButton} onClick={this.closeImage}>
							<CloseIcon />
						</IconButton>
					</DialogTitle>
					<DialogContent dividers style={{display: 'flex', justifyContent: 'center'}}>
						<img src={this.state.image} alt={'title'} style={{height: '100%'}} onClick={() => this.openImage(img)}/>
					</DialogContent>
				</Dialog>
		</React.Fragment>
	}

}

export default withStyles(useStyles)(ProductDialog)