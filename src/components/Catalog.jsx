import React from "react";

import {withStyles, useTheme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import Product from './Product'

import CatalogData from '../data/CatalogData'

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
		let _categoryId = 0;
		return <React.Fragment>
			<Paper square>
				<Tabs
				value={this.state.tab}
				indicatorColor="primary"
				textColor="primary"
				onChange={this.changeTab}
				centered
				>
					{Object.keys(CatalogData.categories).map((categoryId) => {return (CatalogData.categories[categoryId].visible) ?
						<Tab label={CatalogData.categories[categoryId].name} key={categoryId}/> : ''}
					)}/>
				</Tabs>
			</Paper>
			{Object.keys(CatalogData.categories).map((categoryId) => {return (CatalogData.categories[categoryId].visible) ?
				<div style={{display: this.state.tab == _categoryId++ ? 'block' : 'none'}} key={categoryId}>
					<div className={classes.products}>
							{this.props.filteredCatalog.map((itemId, i) => {return (CatalogData.items[itemId].categories.includes(categoryId)) ?
									<Product key={itemId} order={i} item={CatalogData.items[itemId]} history={this.props.history}/> : ''}
							)}
					</div>
				</div> : ''}
			)}
		</React.Fragment>
	}

}

export default withStyles(useStyles)(Catalog)