import React from "react";

import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search'

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import StoreIcon from '@material-ui/icons/Store';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ScreenLockPortraitIcon from '@material-ui/icons/ScreenLockPortrait';

const useStyles = (theme) => ({
	logo: {
		position: 'absolute',
		left: '50%',
		top: '0px',
		marginLeft: '-24px',
		height: '100%',
	},
	grow: {
    flexGrow: 1,
  },
});

class CustomAppBar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {menuAnchor: null};
		this.handleMenuOpen = this.handleMenuOpen.bind(this);
		this.handleMenuClose = this.handleMenuClose.bind(this);
		this.handleMenuClick = this.handleMenuClick.bind(this);
	}

	handleMenuOpen = (event) => {
		this.setState({menuAnchor: event.currentTarget});
	};

	handleMenuClose = (event) => {
		this.setState({menuAnchor: null});
	};

	handleMenuClick = (page) => {
		this.setState({menuAnchor: null});
		this.props.history.push(page);
	}

	render() {
		const { classes } = this.props;
		return <React.Fragment>
			<AppBar position="fixed">
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="menu" onClick={this.handleMenuOpen}>
						<MenuIcon />
					</IconButton>
					<Drawer anchor={'left'} open={Boolean(this.state.menuAnchor)} onClose={this.handleMenuClose}>
						<List>
							<ListItem button key={0} onClick={() => this.handleMenuClick('/frete-gratis')}>
								<ListItemIcon><LocalShippingIcon /></ListItemIcon>
								<ListItemText primary={"Frete Grátis"} />
							</ListItem>
							<ListItem button key={1} onClick={() => this.handleMenuClick('/perguntas-frequentes')}>
								<ListItemIcon><QuestionAnswerIcon /></ListItemIcon>
								<ListItemText primary={"Perguntas Frequentes"} />
							</ListItem>
							<ListItem button key={2} onClick={() => this.handleMenuClick('/quem-somos')}>
								<ListItemIcon><StoreIcon /></ListItemIcon>
								<ListItemText primary={"Quem Somos"} />
							</ListItem>
							<ListItem button key={3} onClick={() => this.handleMenuClick('/termos-de-uso')}>
								<ListItemIcon><AssignmentIcon /></ListItemIcon>
								<ListItemText primary={"Termos de Uso"} />
							</ListItem>
							<ListItem button key={4} onClick={() => this.handleMenuClick('/politica-de-privacidade')}>
								<ListItemIcon><ScreenLockPortraitIcon /></ListItemIcon>
								<ListItemText primary={"Política de Privacidade"} />
							</ListItem>
						</List>
					</Drawer>
					<img className={classes.logo} src='./assets/image/logo-small.png' onClick={() => this.props.history.push('/')}/>
					<div className={classes.grow} />
					<IconButton edge="end" color="inherit" aria-label="search" onClick={this.props.openFilter}>
						<SearchIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</React.Fragment>
	}

}

export default withStyles(useStyles)(CustomAppBar)