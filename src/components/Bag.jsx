import React from "react";

import {withStyles, useTheme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import BagProduct from './BagProduct';

const useStyles = (theme) => ({
	root: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
	},
	stepper: {
		width: '100%',
	},
	button: {
		marginTop: theme.spacing(1),
		marginRight: theme.spacing(1),
	},
	actionsContainer: {
		marginBottom: theme.spacing(2),
	},
	cards: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
	}
});

var itemData = [];
	for (let i = 1; i<=5; i++)
	itemData.push({img: `/assets/image/catalog/${i}.jpg`,
		price: i+10,
		category: Math.round(Math.random()),
		featured: Math.round(Math.random()),
		name: 'T-Shirt Amarela'});

class Bag extends React.Component {

	constructor(props) {
		super(props);
		this.state = {step: 0};
		this.handleNext = this.handleNext.bind(this);
		this.handleBack = this.handleBack.bind(this);
		this.openWhatsapp = this.openWhatsapp.bind(this);
	}

	openWhatsapp() {
		const url = "https://api.whatsapp.com/send?phone=05562993547056&text=Your Message here\nMultilineMessage\nTriple Line";
		var encoded = encodeURI(url);
		window.open(encoded, '_blank');
	}

	handleNext() {
		if (this.state.step == 2)
			this.openWhatsapp();
		this.setState({step: this.state.step+1});
	}

	handleBack() {
		this.setState({step: this.state.step-1});
	}

	render() {
		const { classes } = this.props;
		return <React.Fragment>
			<div className={classes.root}>
				<Stepper activeStep={this.state.step} orientation="vertical" className={classes.stepper}>
					<Step key={0}>
						<StepLabel>Escolha os seus produtos</StepLabel>
						<StepContent>
							<div className={classes.cards}>
								{itemData.map((item, i) => <BagProduct key={i} item={item}/>)}
							</div>
							<div className={classes.actionsContainer}>
								<div>
									<Button
										className={classes.button}
										disabled={true}
									>
										Voltar
									</Button>
									<Button
										variant="contained"
										color="primary"
										className={classes.button}
										onClick={this.handleNext}
									>
										Avançar
									</Button>
								</div>
							</div>
						</StepContent>
					</Step>
					<Step key={1}>
						<StepLabel>Preencha algumas informações</StepLabel>
						<StepContent>
							<div className={classes.actionsContainer}>
								<div>
									<Button
										className={classes.button}
										onClick={this.handleBack}
									>
										Voltar
									</Button>
									<Button
										variant="contained"
										color="primary"
										className={classes.button}
										onClick={this.handleNext}
									>
										Avançar
									</Button>
								</div>
							</div>
						</StepContent>
					</Step>
					<Step key={2}>
						<StepLabel>Revise e finalize o seu pedido</StepLabel>
						<StepContent>
							<div className={classes.actionsContainer}>
								<div>
									<Button
										className={classes.button}
										onClick={this.handleBack}
									>
										Voltar
									</Button>
									<Button
										variant="contained"
										color="primary"
										className={classes.button}
										onClick={this.handleNext}
									>
										Finalizar pedido!
									</Button>
								</div>
							</div>
						</StepContent>
					</Step>
				</Stepper>
			</div>
		</React.Fragment>
	}

}

export default withStyles(useStyles)(Bag)