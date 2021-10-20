import React from "react";

import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField';

const useStyles = (theme) => ({
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
		'& span': {
			fontWeight: 'bold',
		}
	},
	searchArea: {
		display: 'flex',
		justifyContent: 'center',
		margin: theme.spacing(3, 2),
		alignItems: 'center',
	},
});

const questions = [{q: 'O que significa Bela Lily?', a: `Bela Lily é aquela de beleza pura e sedutora. Graciosa e cheia de charme.
Bela Lily tem como significado a pureza da beleza.`},
	{q: 'Onde atuam?', a: `Atualmente atuamos em Goiânia e em algumas regiões metropolitanas. `},
	{q: 'Qual horário de funcionamento?', a: `Nosso horário de funcionamento é de segunda a sexta das 8h às 20h e aos sábados das 8h às 14h. Não realizamos registro de pedidos aos domingos.`},
	{q: 'Quais produtos vocês vendem?', a: `Por enquanto oferecemos T-Shirts e Croppeds, mas estamos trabalhando para estar sempre trazendo novidades para nossas lindas clientes.`},
	/*{q: 'O que é um body?', a: `O Body, inicialmente chamado de Collant no Brasil, é uma peça de roupa que substitui as blusas tradicionais e leva um pouco da moda praia para o dia a dia. O body alonga a silhueta e realça as curvas, além de ser um traje versátil que combina com vários looks. É uma peça coringa no guarda roupa e combina com qualquer ocasião.`},*/
	{q: 'O que é uma t-shirt?', a: `T-Shirt é um estilo de camiseta mais casual e despojado. É ótimo para montar um look mais jovial e confortável.`},
	{q: 'O que é um cropped?', a: `O cropped é uma releitura moderna dos tradicionais tops. Ele é a escolha ideal para quem quer ousar. É uma peça chave para compor aquele look verão bem estiloso, lindo e confortável.`},
	{q: 'Quais os tamanhos disponíveis?', a:`T-Shirts: P, M e G<br/>Croppeds: Tamanho Único`},
	{q: 'Como faço para entrar em contato?', a:`Para entrar em contato conosco você pode nos enviar uma mensagem via direct pelo nosso instagram (@belalily_mf) ou via whatsapp pelo nosso número de contato (62) 9 8331-8355 (não atendemos chamadas).`},
	{q: 'Como faço para comprar?', a:`Para comprar, basta acessar o nosso catálogo pelo link www.belalily.com.br e adicionar suas peças favoritas a sua sacola de compra e após responder nossas perguntinhas sobre qual a melhor forma de pagamento e melhor dia e horário para receber o seu produto, você será redirecionado para o nosso contato oficial do whatsapp (62) 9 8331-9355 e finalizaremos o seu atendimento.
`},
	{q: 'Como comprar mais barato?', a:`A Bela Lily está sempre garantindo qualidade e preço baixo em um só produto! Mas como uma garota Lily esperta que você é, estará sempre nos acompanhando para aproveitar nossos mega descontos mensais. Todos os meses preparamos diversas campanhas pensadas especialmente para vocês aproveitarem para se presentear e presentear quem amam. Fiquem ligadas nos nossos stories e ativem as notificações do Instagram para acessar em primeira mão as promoções que postamos em nosso feed! `},
	{q: 'Como é feito as embalagens?', a:`Os materiais que compõem as embalagens são comprados dos nossos excelentes fornecedores. Após chegar a nossa loja, eles são esterilizados e preparados para receber nossos produtos. Quando o seu pedido chega até nós, nossa equipe o separa e prepara com carinho para que ele chegue de forma segura e confiável até você.`},
	{q: 'Qual a localização do CD?', a:`1° Rua Barão de Mauá, n° 899<br/>
Condomínio Morada Goiá I<br/>
CEP: 74485-030`},
];

function escapeRegex(string) {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

class FAQ extends React.Component {

	constructor(props) {
		super(props);
		this.state = {search: ""};
		this.searchTxt = ""

		this.search = this.search.bind(this);
	}

	search(e) {
		if (e!=null)
			e.preventDefault();
		this.setState({search: escapeRegex(this.searchTxt)});
	}

	render() {
		const { classes } = this.props;
		return <React.Fragment>
			<Typography variant="h4" align='center' gutterBottom>
				Perguntas Frequentes
			</Typography>
			<form className={classes.searchArea} onSubmit={this.search} type="search">
				<TextField style={{width: '75%', marginRight: '20px'}}  onChange={(e) => this.searchTxt = e.target.value} variant="outlined" className={classes.input} id="name" label="Pesquisar"/>
				<IconButton edge="end" color="inherit" aria-label="search" onClick={this.search}>
					<SearchIcon />
				</IconButton>
			</form>
			{questions.map(((q, i) => {
				return this.state.search.split(' ').some(substring=>q.q.toLowerCase().includes(substring.toLowerCase())) ? 
					<Accordion key={i}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography className={classes.heading}>{this.state.search != '' ? <div dangerouslySetInnerHTML={{ __html: q.q.replaceAll(new RegExp(this.state.search.replaceAll(' ', '|'), 'gi'), (m) => `<span>${m}</span>`)}} /> : q.q}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								<div dangerouslySetInnerHTML={{ __html: q.a}}></div>
							</Typography>
						</AccordionDetails>
					</Accordion> : ''
			}))}
		</React.Fragment>
	}

}

export default withStyles(useStyles)(FAQ)