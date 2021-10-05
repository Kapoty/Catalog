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

import CatalogData from '../data/CatalogData';

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

const paymentNames = {
	'1': 'Dinheiro',
	'2': 'Débito',
	'3': 'Crédito',
	'4': 'PIX'
};

const shippingNames = {
	'1': 'Gratuita',
	'2': 'Normal',
	'3': 'Expressa'
}

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
		try {
		let url = `https://api.whatsapp.com/send?phone=05562983118355&text=Olá, tudo bem?\n
Meu nome é *${this.props.bag.info.name}*\n
Gostaria de ser tratado como *${this.props.bag.info.desiredName}*\n
Meu Whatsapp é *${this.props.bag.info.whatsapp}*\n
O método de pagamento que escolhi foi *${paymentNames[this.props.bag.info.payment]}*\n
A forma de entrega será *${shippingNames[this.props.bag.info.shipping]}*\n
Os produtos que desejo são:\n\n`;
		let totalPrice = 0;
		this.props.bag.items.forEach((item) => {
			url+= `${item.qnt}x [${item.itemId}] "${`${CatalogData.items[item.itemId].name}" (${CatalogData.sizes[CatalogData.items[item.itemId].sizes[item.size].id].name}`}) R$ ${CatalogData.items[item.itemId].price * item.qnt}\n`
			totalPrice += CatalogData.items[item.itemId].price * item.qnt;
		});
		url += `\nTotal R$ ${totalPrice}`;
		var encoded = encodeURI(url);
		window.open(encoded, '_blank');
	}
	catch (e) {
		console.log(e);
	}
	}

	handleNext() {
		if (this.state.step == 0)
			this.setState({step: this.state.step+1,
				payment: this.props.bag.info.payment,
				shipping: this.props.bag.info.shipping,
				name: this.props.bag.info.name,
				desiredName: this.props.bag.info.desiredName,
				whatsapp: this.props.bag.info.whatsapp});
		else if (this.state.step == 1) {
			this.props.updateBagInfo({name: this.state.name,
				desiredName: this.state.desiredName,
				whatsapp: this.state.whatsapp,
				payment: this.state.payment,
				shipping: this.state.shipping});
			this.setState({step: this.state.step+1});
		} else this.setState({step: this.state.step+1});
	}

	handleBack() {
		if (this.state.step == 1) {
			this.props.updateBagInfo({name: this.state.name,
				desiredName: this.state.desiredName,
				whatsapp: this.state.whatsapp,
				payment: this.state.payment,
				shipping: this.state.shipping});
			this.setState({step: this.state.step-1});
		} else this.setState({step: this.state.step-1});
	}

	handleReset() {
		this.props.resetBag();
	}

	componentDidUpdate(prevProps) {
		if (this.props.bag.items.length == 0 && this.state.step != 0) {
			this.setState({step: 0});
		}
	}

	render() {
		const { classes } = this.props;

		let totalPrice = 0;
		this.props.bag.items.forEach((item) => totalPrice += CatalogData.items[item.itemId].price * item.qnt);

		return <React.Fragment>
			<div className={classes.root}>
				<Stepper activeStep={this.state.step} orientation="vertical" className={classes.stepper}>
					<Step key={0}>
						<StepLabel>Escolha os seus produtos</StepLabel>
						<StepContent>
							<div className={classes.cards}>
								{this.props.bag.items.map((item, i) => <BagProduct key={item.itemId+'-'+item.size} item={item} addItemToBag={this.props.addItemToBag} removeItemFromBag={this.props.removeItemFromBag} deleteItemFromBag={this.props.deleteItemFromBag}/>)}
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
										disabled={this.props.bag.items.length == 0}
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
								<TextField required onChange={(e) => this.setState({name: e.target.value})} variant="outlined" className={classes.input} id="name" label="Seu nome completo" defaultValue={this.props.bag.info.name}/>
								<TextField required onChange={(e) => this.setState({desiredName: e.target.value})} variant="outlined" className={classes.input} id="desiredName" label="Como gostaria de ser chamado(a)" defaultValue={this.props.bag.info.desiredName}/>
								<TextField required onChange={(e) => this.setState({whatsapp: e.target.value})} type="number" variant="outlined" className={classes.input} id="whatsapp" label="Seu Whatsapp (com DDD)" defaultValue={this.props.bag.info.whatsapp}/>
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
										<option value={1}>{paymentNames['1']}</option>
										<optgroup label="Cartão">
											<option value={2}>{paymentNames['2']}</option>
											<option value={3}>{paymentNames['3']}</option>
										</optgroup>
										<option value={4}>{paymentNames['4']}</option>
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
										{Object.keys(shippingNames).map((s, i) => {
											return <option value={s} key={i}>{shippingNames[s]}</option>
										})}
									</Select>
								</FormControl>
								<Typography className={classes.input}>
									{this.state.shipping == 1 ? 'A entrega será por nossa conta, em um dia específico da semana (necessário consultar área de cobertura)'
									: this.state.shipping == 2 ? 'A entrega será por sua conta, em até dois dias úteis'
									: this.state.shipping == 3 ? 'A entrega será por sua conta, ainda hoje (válido somente para pedidos finalizados até às 15:00, em dias úteis)'
									: this.state.shipping == 4 ? 'A entrega será por sua conta, em um dia útil e horário de sua escolha (valores determinados pela Uber)'
									: ''}
								</Typography>
								<Typography className={classes.input}>
									Para entender melhor nossas formas de entrega <Button onClick={() => this.props.history.push('/entrega-gratis')}> clique aqui </Button>
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
										disabled={this.state.name == '' ||
											this.state.desiredName == '' ||
											this.state.whatsapp == '' ||
											this.state.payment == '' ||
											this.state.shipping == ''}
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
								Meu nome é <b>{this.props.bag.info.name}</b><br/>
								Gostaria de ser tratado como <b>{this.props.bag.info.desiredName}</b><br/>
								Meu Whatsapp é <b>{this.props.bag.info.whatsapp}</b><br/>
								O método de pagamento que escolhi foi <b>{paymentNames[this.props.bag.info.payment]}</b><br/>
								A forma de entrega será <b>{shippingNames[this.props.bag.info.shipping]}</b><br/>
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
										{this.props.bag.items.map((item, i) => <TableRow key={i}>
											<TableCell align="right">{item.itemId}</TableCell>
											<TableCell>{`${CatalogData.items[item.itemId].name} (${CatalogData.sizes[CatalogData.items[item.itemId].sizes[item.size].id].name})`}</TableCell>
											<TableCell align="right">{item.qnt}</TableCell>
											<TableCell align="right">{CatalogData.items[item.itemId].price}</TableCell>
											<TableCell align="right">{CatalogData.items[item.itemId].price * item.qnt}</TableCell>
										</TableRow>)}
										<TableRow>
											<TableCell colSpan={4} align="right">Total</TableCell>
											<TableCell align="right">{totalPrice}</TableCell>
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
					<Button
						className={classes.button}
						onClick={this.handleBack}
					>
						Voltar
					</Button>
					<Button className={classes.button} onClick={this.handleReset}>Realizar novo pedido</Button>
				</div> : ''}
			</div>
		</React.Fragment>
	}

}

export default withStyles(useStyles)(Bag)