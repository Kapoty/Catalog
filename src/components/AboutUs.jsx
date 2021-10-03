import React from "react";

import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = (theme) => ({
	logo: {
		display: 'flex',
		justifyContent: 'center',
		margin: theme.spacing(2,0),
	},
	logoImg: {
		borderRadius: '10000px',
		overflow: 'hidden',
		height: '50vh',
		maxHeight: '90vw',
		width: '50vh',
		maxWidth: '90vw',
		backgroundImage: 'url(./assets/image/logo.png)',
		backgroundSize: 'cover',
	},
});

class AboutUs extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { classes } = this.props;
		return <React.Fragment>
			<div className={classes.logo}><span className={classes.logoImg}></span></div>
			<Typography variant="h4" align='center' gutterBottom>
				Quem Somos
			</Typography>
			<Typography variant="body1" align='center' gutterBottom>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla dui, cursus ut scelerisque at, vulputate eu dolor. Pellentesque imperdiet, quam vitae mattis vulputate, lacus urna lacinia eros, quis fermentum ligula mi id ante. Quisque nec molestie urna. Vivamus id ante a ante ultricies luctus a vitae orci. Cras pulvinar dapibus sodales.</p>
			</Typography>
			<Typography variant="h4" align='center' gutterBottom>
				Missão
			</Typography>
			<Typography variant="body1" align='center' gutterBottom>
				<p>A empresa Bela Lily tem como missão oferecer qualidade, conforto, praticidade e beleza através das nossas roupas selecionadas para mulheres que querem se sentir poderosas e confiantes.</p>
			</Typography>
			<Typography variant="h4" align='center' gutterBottom>
				Visão
			</Typography>
			<Typography variant="body1" align='center' gutterBottom>
				<p>Ser uma empresa referência, a nível nacional, de moda feminina.</p>
			</Typography>
			<Typography variant="h4" align='center' gutterBottom>
				Valores
			</Typography>
			<Typography variant="body1"align='center' gutterBottom>
				Incentivo a auto-estima e bem estar<br/>
				Autenticidade<br/>
				Confiança<br/>
			</Typography>
		</React.Fragment>
	}

}

export default withStyles(useStyles)(AboutUs)