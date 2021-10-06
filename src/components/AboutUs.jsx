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
				<p>Somos a Bela Lily! Viemos ao mercado da moda para trazer à vocês os melhores produtos disponíveis e com o melhor preço possível. Nosso objetivo é entregar à vocês produtos de qualidade e de forma acessível, por isso oferecemos as melhores formas de pagamento e entrega.</p> 
				<p>Desejamos que todas estejam sempre belas e nos colocamos à disposição para ajudá-las trazendo sempre os melhores looks.</p>
				<p>Vem fazer parte desse projeto. Seja uma Lily, sempre bela!</p>
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