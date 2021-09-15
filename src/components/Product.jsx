import React from "react";

import {withStyles, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CatalogData from '../data/CatalogData'

const useStyles = (theme) => ({
	root: {
		[theme.breakpoints.down('sm')]: {
			width: '180px',
		},
		[theme.breakpoints.up('md')]: {
			width: '250px',
		},
		margin: theme.spacing(1),
	},
	media: {
		[theme.breakpoints.down('sm')]: {
			height: '200px',
		},
		[theme.breakpoints.up('md')]: {
			height: '250px',
		},
	},
});

class Product extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { classes } = this.props;
		return <React.Fragment>
			<Card className={classes.root} style={{order: this.props.order}} onClick={() => this.props.history.push(`/p/${this.props.item.id}`)}>
				<CardActionArea>
					<CardMedia
					className={classes.media}
					image={`${CatalogData.imagePath}${this.props.item.id}/1-256.jpg`}
					title={this.props.item.name}
					/>
					<CardContent>
						<Typography gutterBottom variant="h6" component="h6" align="center">
							{this.props.item.name}
						</Typography>
						<Typography variant="h6" color="primary" component="p" align="center">
							R$ {this.props.item.price}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</React.Fragment>
	}

}

export default withStyles(useStyles)(Product)