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
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = (theme) => ({
	root: {
		width: '100%',
		display: 'flex',
		justifyContent: 'left',
		flexWrap: 'wrap',
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
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
		marginLeft: theme.spacing(4),
		marginRight: theme.spacing(4),
	},
	inputs: {
		width: '100%',
		display: 'flex',
		justifyContent: 'left',
		flexWrap: 'wrap',
		flexDirection: 'column',
	},
	input: {
		marginBottom: theme.spacing(1),
	},
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
		this.state = {step: 0, payment: 0 , shipping: 0};
		this.handleNext = this.handleNext.bind(this);
		this.handleBack = this.handleBack.bind(this);
		this.openWhatsapp = this.openWhatsapp.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	openWhatsapp() {
		const url = `https://api.whatsapp.com/send?phone=05562993547056&text=Olá, tudo bem?
Meu nome é *Pedro Henrique Martins Candido da Silva*
Gostaria de ser tratado como *Pedro*
Meu Whatsapp é *(62) 9 9354-7056*
O método de pagamento que escolhi foi *Dinheiro*
A forma de entrega será *Gratuita*
Os produtos que desejo são:
1x [12 T-Shirt Amarela] 12.00
2x [13 T-Shirt Azul] 26.00
1x [15 Body Verde] 15.00
Total 53.00`;
		var encoded = encodeURI(url);
		window.open(encoded, '_blank');
	}

	handleNext() {
		this.setState({step: this.state.step+1});
	}

	handleBack() {
		this.setState({step: this.state.step-1});
	}

	handleReset() {
		this.setState({step: 0});
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
						<StepLabel>Nos informe...</StepLabel>
						<StepContent>
							<div className={classes.inputs}>
								<TextField required variant="outlined" className={classes.input} id="name" label="Seu nome completo" defaultValue=""/>
								<TextField required variant="outlined" className={classes.input} id="name" label="Como gostaria de ser chamado(a)" defaultValue=""/>
								<TextField required variant="outlined" className={classes.input} id="name" label="Seu Whatsapp (com DDD)" defaultValue=""/>
								<FormControl variant="outlined" className={classes.input}>
									<InputLabel htmlFor="payment">O método de pagamento</InputLabel>
									<Select
										native
										value={this.state.payment}
										onChange={(e) => {this.setState({payment: e.target.value})}}
										label="O método de pagamento"
										inputProps={{
										name: 'O método de pagamento',
										id: 'payment',
										}}
									>
										<option aria-label="Selecione" value="" />
										<option value={1}>Dinheiro</option>
										<optgroup label="Cartão">
											<option value={2}>Débito</option>
											<option value={3}>Crédito</option>
										</optgroup>
										<option value={4}>PIX</option>
									</Select>
								</FormControl>
								<FormControl variant="outlined" className={classes.input}>
									<InputLabel htmlFor="shipping">A forma de entrega</InputLabel>
									<Select
										native
										value={this.state.shipping}
										onChange={(e) => {this.setState({shipping: e.target.value})}}										label="A forma de entrega"
										inputProps={{
										name: 'A forma de entrega',
										id: 'shipping',
										}}
									>
										<option aria-label="Selecione" value="" />
										<option value={1}>Gratuita</option>
										<option value={2}>Uber Flash</option>
									</Select>
								</FormControl>
								<Typography className={classes.input}>
									{this.state.shipping == 1 ? 'A entrega será por nossa conta, em um dia específico da semana (necessário consultar área de cobertura)'
									: this.state.shipping == 2 ? 'A entrega será por sua conta, em um dia e horário de sua escolha (valores determinados pela Uber)'
									: ''}
								</Typography>
								<Typography className={classes.input}>
									Para entender melhor nossas formas de entrega <Button onClick={() => this.props.history.push('/frete-gratis')}> clique aqui </Button>
								</Typography>
							</div>
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
							<Typography>
								Meu nome é <b>Pedro Henrique Martins Candido da Silva</b><br/>
								Gostaria de ser tratado como <b>Pedro</b><br/>
								Meu Whatsapp é <b>(62) 9 9354-7056</b><br/>
								O método de pagamento que escolhi foi <b>Dinheiro</b><br/>
								A forma de entrega será <b>Gratuita</b><br/>
								Os produtos que desejo são:
							</Typography>
							<TableContainer component={Paper}>
								<Table aria-label="spanning table">
									<TableHead>
										<TableRow>
											<TableCell align="right">ID</TableCell>
											<TableCell>Produto</TableCell>
											<TableCell align="right">Qtd.</TableCell>
											<TableCell align="right">Valor Unitário</TableCell>
											<TableCell align="right">Soma</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow>
											<TableCell>12</TableCell>
											<TableCell>T-Shirt Amarela</TableCell>
											<TableCell align="right">1</TableCell>
											<TableCell align="right">12,00</TableCell>
											<TableCell align="right">12,00</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>13</TableCell>
											<TableCell>T-Shirt Azul</TableCell>
											<TableCell align="right">2</TableCell>
											<TableCell align="right">13,00</TableCell>
											<TableCell align="right">26,00</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>15</TableCell>
											<TableCell>Body Verde</TableCell>
											<TableCell align="right">1</TableCell>
											<TableCell align="right">15,00</TableCell>
											<TableCell align="right">15,00</TableCell>
										</TableRow>
										<TableRow>
											<TableCell colSpan={4} align="right">Total</TableCell>
											<TableCell align="right">53.00</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
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
				{this.state.step == 3 ? <div className={classes.instructions}>
					<Typography>
						Prontinho, coletamos todas as informações necessárias! :)
					</Typography>
					<br/>
					<Button variant="contained"
							color="primary"
							onClick={this.openWhatsapp}
							className={classes.button}
					>
						Clique aqui para dar prosseguimento ao seu atendimento pelo Whatsapp
					</Button>
					<br/>
					<br/>
					<Button className={classes.button} onClick={this.handleReset}>Realizar novo pedido</Button>
				</div> : ''}
			</div>
		</React.Fragment>
	}

}

export default withStyles(useStyles)(Bag)