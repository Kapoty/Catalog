import React from "react";

import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const useStyles = (theme) => ({

});

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

class InternalPage extends React.Component {

	constructor(props) {
		super(props);
		this.pages = [{pathname: 'frete-gratis', name: 'Frete Grátis', component: null},
					{pathname: 'perguntas-frequentes', name: 'Perguntas Frequentes', component: null},
					{pathname: 'quem-somos', name: 'Quem Somos', component: null},
					{pathname: 'termos-de-uso', name: 'Termos de Uso', component: null},
					{pathname: 'politica-de-privacidade', name: 'Política de Privacidade', component: null}];
		let exp = '';
		this.pages.forEach((p, i) => exp += `${(i!=0)?'|':''}(${p.pathname})`);
		this.pageReg = new RegExp('\/('+exp+')', '');
		this.state = {dialogOpen: false, currentPage: 0};
		this.handleDialogClose = this.handleDialogClose.bind(this);
		this.getCurrentPage = this.getCurrentPage.bind(this);
	}

	handleDialogClose() {
		this.props.history.push(this.props.lastPage);
	}

	getCurrentPage() {
		let page = this.props.location.pathname.match(this.pageReg);
		if (page == null) page = '';
			else page = page[0];
		this.state.dialogOpen = false;
		for (let i=0; i<this.pages.length; i++)
			if ('/'+this.pages[i].pathname == page) {
				this.state.currentPage = i;
				this.state.dialogOpen = true;
				break;
			}
	}

	render() {
		const { classes } = this.props;

		this.getCurrentPage();

		return <React.Fragment>
			<Dialog fullScreen open={this.state.dialogOpen} onClose={this.handleDialogClose} TransitionComponent={Transition}>
				<AppBar>
					<Toolbar>
						<IconButton edge="start" color="inherit" onClick={this.handleDialogClose} aria-label="close">
							<CloseIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							{this.pages[this.state.currentPage].name}
						</Typography>
					</Toolbar>
				</AppBar>
			</Dialog>
		</React.Fragment>
	}

}

export default withStyles(useStyles)(InternalPage)