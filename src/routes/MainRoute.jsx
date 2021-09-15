import React from "react";
import ReactDOM from "react-dom";

import Config from "../config/Config";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import Slide from '@material-ui/core/Slide';
import Snackbar from '@material-ui/core/Snackbar';

import BottomNav from '../components/BottomNav';
import CustomAppBar from '../components/CustomAppBar';
import Catalog from '../components/Catalog';
import Bag from '../components/Bag';
import InternalPage from '../components/InternalPage';
import ProductDialog from '../components/ProductDialog';
import FilterDialog from '../components/FilterDialog';
import CookiesDialog from '../components/CookiesDialog';

import * as ls from 'local-storage';

import CatalogData from '../data/CatalogData';

const theme = createTheme({
	palette: {
		/*primary: pink,
		secondary: pink,*/
		primary: {
			light: '#f47b9b',
		    main: '#f26389',
		    dark: '#f04b77',
		    contrastText: '#fff'
		}
	}
});

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="right" ref={ref} {...props} />;
});

export default class MainRoute extends React.Component {

	constructor(props) {
		super(props);
		if (ls('bag') == undefined)
			ls('bag', JSON.stringify(this.getCleanBag()));
		this.state = {lastPage: '/', addedToBag: false, addedToBagInfo: {name: '', qnt: ''}, filterDialogOpened: false, filter: {order: 1, sizes: []},
			cookiesDialogOpened: cookies.get('cookiesDialog') == undefined, filteredCatalog: this.defaultSort(),
			bag: JSON.parse(ls('bag'))};
		this.addToBag = this.addToBag.bind(this)
		this.closeAddToBag = this.closeAddToBag.bind(this);
		this.openFilter = this.openFilter.bind(this);
		this.setFilter = this.setFilter.bind(this);
		this.closeFilter = this.closeFilter.bind(this);
		this.closeCookiesDialog = this.closeCookiesDialog.bind(this);
		this.removeItemFromBag = this.removeItemFromBag.bind(this);
		this.addItemToBag = this.addItemToBag.bind(this);
		this.deleteItemFromBag = this.deleteItemFromBag.bind(this);
		this.updateBagInfo = this.updateBagInfo.bind(this);
		this.resetBag = this.resetBag.bind(this);
	}

	addToBag(itemId, size, qnt) {
		let i;
		for (i=0; i<this.state.bag.items.length; i++)
			if (this.state.bag.items[i].itemId == itemId && this.state.bag.items[i].size == size) {
				this.state.bag.items[i].qnt += qnt;
				break;
			}
		if (i == this.state.bag.items.length) {
			this.state.bag.items.push({itemId: itemId, size: size, qnt: qnt});
		}
		let bag = this.state.bag;
		ls('bag', JSON.stringify(bag));
		this.setState({addedToBag: true, 
			addedToBagInfo: {name: CatalogData.items[itemId].name, qnt: qnt},
			bag: bag
		});
	}

	removeItemFromBag(itemId, size) {
		let i;
		for (i=0; i<this.state.bag.items.length; i++)
			if (this.state.bag.items[i].itemId == itemId && this.state.bag.items[i].size == size) {
				this.state.bag.items[i].qnt --;
				break;
			}
		let bag = this.state.bag;
		ls('bag', JSON.stringify(bag));
		this.setState({bag: bag});
	}

	addItemToBag(itemId, size) {
		let i;
		for (i=0; i<this.state.bag.items.length; i++)
			if (this.state.bag.items[i].itemId == itemId && this.state.bag.items[i].size == size) {
				this.state.bag.items[i].qnt ++;
				break;
			}
		let bag = this.state.bag;
		ls('bag', JSON.stringify(bag));
		this.setState({bag: bag});
	}

	deleteItemFromBag(itemId, size) {
		let i;
		for (i=0; i<this.state.bag.items.length; i++)
			if (this.state.bag.items[i].itemId == itemId && this.state.bag.items[i].size == size) {
				this.state.bag.items.splice(i, 1);
				break;
			}
		let bag = this.state.bag;
		ls('bag', JSON.stringify(bag));
		this.setState({bag: bag});
	}

	updateBagInfo(info) {
		this.state.bag.info = info;
		let bag = this.state.bag;
		ls('bag', JSON.stringify(bag));
		this.setState({bag: bag});
	}

	getCleanBag() {
		return {items: [], info: {name: '', desiredName: '', whatsapp: '', payment: '', shipping: ''}};
	}

	resetBag() {
		ls('bag', JSON.stringify(this.getCleanBag()));
		this.setState({bag: JSON.parse(ls('bag'))});
	}

	closeAddToBag() {
		this.setState({addedToBag: false});
	}

	openFilter() {
		this.setState({filterDialogOpened: true})
	}

	defaultSort() {
		let items = Object.keys(CatalogData.items);
		items.sort((a, b) => {
			return CatalogData.items[b].priority - CatalogData.items[a].priority;
		});
		return items;
	}

	setFilter(order, sizes) {
		let filteredCatalog = [];
		Object.keys(CatalogData.items).forEach((itemId) => {
			let add = false;
			if (sizes.length != 0) {
				let itemSizes = CatalogData.items[itemId].sizes;
				for (let i=0; i<itemSizes.length; i++)
					if (sizes.includes(itemSizes[i].id)) {
						add = true;
						break;
					}
			} else add = true;
			if (add) filteredCatalog.push(itemId);
		});
		filteredCatalog.sort((a, b) => {
			switch(order) {
				case '1':
					return CatalogData.items[b].priority - CatalogData.items[a].priority;
				break;
				case '2':
					if (CatalogData.items[a].price == CatalogData.items[b].price)
						return CatalogData.items[b].priority - CatalogData.items[a].priority;
					else return CatalogData.items[a].price - CatalogData.items[b].price;
				break;
				case '3':
					if (CatalogData.items[a].price == CatalogData.items[b].price)
						return CatalogData.items[b].priority - CatalogData.items[a].priority;
					else return CatalogData.items[b].price - CatalogData.items[a].price;
				break;
			}
		});
		console.log(JSON.stringify(filteredCatalog));
		this.setState({filterDialogOpened: false, filter: {order: order, sizes: sizes}, filteredCatalog: filteredCatalog});
	}

	closeFilter() {
		this.setState({filterDialogOpened: false});
	}

	closeCookiesDialog() {
		cookies.set('cookiesDialog', '0', {maxAge: 7 * 86400});
		this.setState({cookiesDialogOpened: false});
	}

	render() {
		if (this.props.location.pathname == '/sacola' || this.props.location.pathname == '/')
			this.state.lastPage = this.props.location.pathname ;

		return <React.Fragment>
			<ThemeProvider theme={theme}>
				<CustomAppBar history={this.props.history} openFilter={this.openFilter}/>
				<div style={{display: (this.state.lastPage!='/sacola') ? 'block' : 'none'}}>
					<Catalog history={this.props.history} filteredCatalog={this.state.filteredCatalog}/>
				</div>
				<div style={{display: (this.state.lastPage=='/sacola') ? 'block' : 'none'}}>
					<Bag history={this.props.history} bag={this.state.bag} resetBag={this.resetBag} updateBagInfo={this.updateBagInfo} addItemToBag={this.addItemToBag} removeItemFromBag={this.removeItemFromBag} deleteItemFromBag={this.deleteItemFromBag}/>
				</div>
				<BottomNav location={this.props.location} history={this.props.history} bagQnt={this.state.bag.items.length}/>
				<InternalPage location={this.props.location} history={this.props.history} lastPage={this.state.lastPage}/>
				<ProductDialog location={this.props.location} history={this.props.history} lastPage={this.state.lastPage} addToBag={this.addToBag} bag={this.state.bag}/>
				<FilterDialog open={this.state.filterDialogOpened} filter={this.state.filter} setFilter={this.setFilter} closeFilter={this.closeFilter}/>
				<Snackbar
					autoHideDuration={2000} 
					open={this.state.addedToBag}
					onClose={this.closeAddToBag}
					TransitionComponent={Transition}
					message={`${this.state.addedToBagInfo.qnt}x ${this.state.addedToBagInfo.name} ${(this.state.addedToBagInfo.qnt == 1)?'foi adicionada':'foram adicionadas'} à sua sacola!`}
				/>
				<CookiesDialog open={this.state.cookiesDialogOpened} history={this.props.history} closeCookiesDialog={this.closeCookiesDialog}/>
			</ThemeProvider>
		</React.Fragment>
	}

}