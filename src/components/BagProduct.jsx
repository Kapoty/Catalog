import React from "react";

import {withStyles, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

import CatalogData from '../data/CatalogData';

const useStyles = (theme) => ({
	root: {
		[theme.breakpoints.down('sm')]: {
			width: '200px',
		},
		[theme.breakpoints.up('md')]: {
			width: '200px',
		},
		margin: theme.spacing(0.5),
		display: 'flex',
		flexDirecton: 'row',
		flexWrap: 'wrap',
	},
	media: {
		[theme.breakpoints.down('sm')]: {
			height: '100px',
		},
		[theme.breakpoints.up('md')]: {
			height: '150px',
		},
	},
	content: {
		display: 'flex',
		flexDirecton: 'row',
	},
	sizeSection: {
		margin: theme.spacing(1),
	},
	sizeChip: {
		margin: theme.spacing(0.5),
	},
	sizeOptions: {
		display: 'flex',
		justifyContent: 'center',
	},
	qntSection: {
		display: 'flex',
		justifyContent: 'center',
		margin: theme.spacing(1),
		alignItems: 'center',
	},
	qntLabel: {
		margin: theme.spacing(0, 1),
	},
	removeSection: {
		margin: theme.spacing(1),
		display: 'flex',
		justifyContent: 'center',
	},
});

class BagProduct extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { classes } = this.props;
		return <React.Fragment>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
					className={classes.media}
					image={`${CatalogData.imagePath}${this.props.item.itemId}/1-256.jpg`}
					title={CatalogData.items[this.props.item.itemId].name}
					/>
					<CardContent>
						<Typography gutterBottom variant="h6" component="p" align="center">
							{CatalogData.items[this.props.item.itemId].name}
						</Typography>
						<Typography variant="h6" color="primary" component="p" align="center">
							R$ {CatalogData.items[this.props.item.itemId].price * this.props.item.qnt}
						</Typography>
						<div className={classes.sizeSection}>
							<div className={classes.sizeOptions}>
								<Chip className={classes.sizeChip} label={CatalogData.sizes[CatalogData.items[this.props.item.itemId].sizes[this.props.item.size].id].name} color="primary"/>
							</div>
						</div>
						<div className={classes.qntSection}>
							<IconButton aria-label="close" onClick={() => this.props.removeItemFromBag(this.props.item.itemId, this.props.item.size)} disabled={this.props.item.qnt == 1}>
								<RemoveCircleIcon />
							</IconButton>
							<Typography className={classes.qntLabel} variant="h6" color="primary" component="p" align="center">
								{this.props.item.qnt}
							</Typography>
							<IconButton aria-label="close" onClick={() => this.props.addItemToBag(this.props.item.itemId, this.props.item.size)} disabled={this.props.item.qnt == CatalogData.items[this.props.item.itemId].sizes[this.props.item.size].qnt}>
								<AddCircleIcon />
							</IconButton>
						</div>
						<div className={classes.removeSection}>
							<IconButton aria-label="close" onClick={() => this.props.deleteItemFromBag(this.props.item.itemId, this.props.item.size)}>
								<DeleteIcon />
							</IconButton>
						</div>
					</CardContent>
				</CardActionArea>
			</Card>
		</React.Fragment>
	}

}

export default withStyles(useStyles)(BagProduct)