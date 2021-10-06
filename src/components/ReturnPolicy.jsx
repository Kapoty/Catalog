import React from "react";

import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = (theme) => ({
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular
	},
});

class ReturnPolicy extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { classes } = this.props;
		return <React.Fragment>
			<div className={classes.logo}><span className={classes.logoImg}></span></div>
			<Typography variant="h4" align='center' gutterBottom>
				Política de Troca e Devolução
			</Typography>
			<Typography variant="body1" align='center' gutterBottom>
				<p>Em caso de troca ou devolução será necessário o preenchimento da <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfsC33etrEcKzyb81ANtqGkbLRTMtJSd0xYMGg8KwfSJyhjFA/viewform" target="_blank">solicitação de Troca/Devolução</Link></p>
				<p>Todo produto enviado para Troca/Devolução passará por análise da Bela Lily e deverá ser aprovado para que o processo de Troca/Devolução seja autorizado. A nossa equipe tem até 3 dias úteis após o recebimento do produto para aprovar a Troca/Devolução.</p>
				<p>Todo produto deve ser encaminhado para Troca/Devolução preferencialmente em sua embalagem original.</p>
				<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={classes.heading}>Casos em que a Troca/Devolução não será aceita</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
					<p>A Bela Lily está isenta de aceitar a solicitação e devolverá o produto ao seu endereço de entrega sem a restituição dos valores pagos quando:<br/>
				Produto devolvido sem a devida comunicação, autorização e preenchimento da solicitação de Troca/Devolução disponível no nosso catálogo, instagram e whatsapp;<br/>
				Devolvido fora do prazo;<br/>
				Indícios de uso ou lavagem;<br/>
				Ausência da Nota Fiscal (Caso necessário, solicite o reenvio da Nota Fiscal por um dos nossos canais de atendimento);<br/>
				Produto enviado na troca não consta na Nota Fiscal de Compra;<br/>
				Produto enviado na troca não informado na Solicitação de Troca;<br/>
				Se já houver tido a troca do produto anteriormente.</p>
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={classes.heading}>Devolução por arrependimento</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
					<p>Em caso de devolução por arrependimento, o prazo limite é de 7 dias corridos contados a partir da data de recebimento do produto, dentro do qual o consumidor pode devolver o produto para a loja, ainda que ele não tenha nenhum defeito e sem precisar se justificar, sendo que o produto deve retornar em PERFEITO ESTADO, sem indícios de uso ou lavagem. Caso o produto tenha sido usado ou lavado, a devolução não será aceita. Se o cliente devolver o produto dentro do prazo de arrependimento (7 dias) o valor pago pelo produto será devolvido, exceto o valor do frete.</p>
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={classes.heading}>Troca por outro tamanho</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
					<p>Troca por outro tamanho - Em caso de troca por outro tamanho, o prazo limite para solicitação é de 7 dias corridos contados a partir do recebimento do produto, sendo que o produto deve retornar em PERFEITO ESTADO, sem indícios de uso ou lavagem. Caso o produto tenha sido usado ou lavado, a troca não será aceita. No caso de troca, o cliente terá que verificar a disponibilidade de tamanho do item, caso não haja em estoque o mesmo produto com a numeração desejada, o mesmo poderá realizar a devolução ou trocar por outro produto de seu interesse, desde que este corresponda ao valor pago anteriormente.</p>
					</Typography>
				</AccordionDetails>
			</Accordion>
				<p>Em caso de estorno do valor os prazos são os seguintes:<br/>
				Cartão de Crédito ou Débito – Valor estornado até a segunda fatura subsequente à que foi cobrada a compra.<br/>
				Dinheiro ou Pix – Valor estornado em até 72h após a constatação de que o produto foi devolvido nas condições exigidas.</p>
			</Typography>
		</React.Fragment>
	}

}

export default withStyles(useStyles)(ReturnPolicy)