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

const theme = createTheme({
	palette: {
		/*primary: pink,
		secondary: pink,*/
		primary: {
			light: '#f26389',
		    main: '#f26389',
		    dark: '#002884',
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
		this.state = {lastPage: '/', addedToBag: false, filterDialogOpened: false, filter: {}};
		this.addToBag = this.addToBag.bind(this)
		this.closeAddToBag = this.closeAddToBag.bind(this);
		this.openFilter = this.openFilter.bind(this);
		this.setFilter = this.setFilter.bind(this);
		this.closeFilter = this.closeFilter.bind(this);
	}

	addToBag(item) {
		this.setState({addedToBag: true});
	}

	closeAddToBag() {
		this.setState({addedToBag: false});
	}

	openFilter() {
		this.setState({filterDialogOpened: true})
	}

	setFilter(filter) {
		this.setState({filterDialogOpened: false, filter: filter});
	}

	closeFilter() {
		this.setState({filterDialogOpened: false});
	}

	render() {
		if (this.props.location.pathname == '/sacola' || this.props.location.pathname == '/')
			this.state.lastPage = this.props.location.pathname ;

		return <React.Fragment>
			<ThemeProvider theme={theme}>
				<CustomAppBar history={this.props.history} openFilter={this.openFilter}/>
				<div style={{display: (this.state.lastPage!='/sacola') ? 'block' : 'none'}}>
					<Catalog history={this.props.history}/>
				</div>
				<div style={{display: (this.state.lastPage=='/sacola') ? 'block' : 'none'}}>
					<Bag history={this.props.history}/>
				</div>
				<BottomNav location={this.props.location} history={this.props.history}/>
				<InternalPage location={this.props.location} history={this.props.history} lastPage={this.state.lastPage}/>
				<ProductDialog location={this.props.location} history={this.props.history} lastPage={this.state.lastPage} addToBag={this.addToBag}/>
				<FilterDialog open={this.state.filterDialogOpened} filter={this.state.filter} setFilter={this.setFilter} closeFilter={this.closeFilter}/>
				<Snackbar
					autoHideDuration={2000} 
					open={this.state.addedToBag}
					onClose={this.closeAddToBag}
					TransitionComponent={Transition}
					message="T-Shirt Amarela foi adicionada à sua sacola!"
				/>
			</ThemeProvider>
		</React.Fragment>
	}

}