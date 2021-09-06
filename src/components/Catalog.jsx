import React from "react";

import {withStyles, useTheme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import Product from './Product'

const useStyles = (theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
	},
	imageList: {
		width: '500px',
		transform: 'translateZ(0)',
		paddingTop: '5px',
	},
	icon: {
		color: 'rgba(255, 255, 255, 0.54)',
	},
	list: {
		width: 250,
	},
	imageListItem: {
		marginBottom: '50px',
	},
	fullList: {
		width: 'auto',
	},
	description: {
		position: 'absolute',
		left: '0px',
		bottom: '-20px',
		width: '100%',
	},
	price: {
		width: '100%',
		textAlign: 'center',
	},
	products: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		overflow: 'hidden',
	}
});

var itemData = [];
for (let j = 0; j<2; j++)
	for (let i = 1; i<=6; i++)
	itemData.push({img: `./assets/image/catalog/${i}.jpg`,
		price: i+10,
		category: Math.round(Math.random()),
		featured: Math.round(Math.random()),
		name: 'T-Shirt Amarela'});

class Catalog extends React.Component {

	constructor(props) {
		super(props);
		this.state = {tab: 0};
		this.changeTab = this.changeTab.bind(this);
	}

	changeTab(e, newValue) {
		this.setState({tab: newValue});
	}

	render() {
		const { classes } = this.props;
		return <React.Fragment>
			<Paper square>
				<Tabs
				value={this.state.tab}
				indicatorColor="primary"
				textColor="primary"
				onChange={this.changeTab}
				centered
				>
					<Tab label="Destaques" />
					<Tab label="T-Shirts" />
					<Tab label="Body's" />
				</Tabs>
			</Paper>
			<div style={{display: this.state.tab == 0 ? 'block' : 'none'}}>
				<div className={classes.products}>
						{itemData.map((item, i) => {return (item.featured) ?
								<Product key={i} item={item} history={this.props.history}/> : ''}
						)}
				</div>
			</div>
			<div style={{display: this.state.tab == 1 ? 'block' : 'none'}}>
				<div className={classes.products}>
						{itemData.map((item, i) => {return (item.category == 0) ?
								<Product key={i} item={item} history={this.props.history}/> : ''}
						)}
				</div>
			</div>
			<div style={{display: this.state.tab == 2 ? 'block' : 'none'}}>
				<div className={classes.products}>
						{itemData.map((item, i) => {return (item.category == 1) ?
								<Product key={i} item={item} history={this.props.history}/> : ''}
						)}
				</div>
			</div>
		</React.Fragment>
	}

}

export default withStyles(useStyles)(Catalog)