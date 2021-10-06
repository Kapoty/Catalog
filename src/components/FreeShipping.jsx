import React from "react";

import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Paper from '@material-ui/core/Paper';

const useStyles = (theme) => ({
	map: {
		display: 'flex',
		justifyContent: 'center',
		margin: theme.spacing(2,0),
	},
	mapImg: {
		overflow: 'hidden',
		height: '90vh',
		maxHeight: '90vw',
		width: '90vh',
		maxWidth: '90vw',
		backgroundImage: 'url(./assets/image/freeshipping/map1.png)',
		backgroundSize: 'cover',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular
	},
	placesPaper: {
		marginBottom: theme.spacing(2),
	},
	placesList: {
		width: '100%',
		height: 300,
		overflow: 'auto',
		'&::-webkit-scrollbar': {
			height: '5px',
			[theme.breakpoints.up('md')]: {
				height: '10px',
			},
			backgroundColor: theme.palette.background.paper,
		},
		'&::-webkit-scrollbar-thumb:vertical': {
			backgroundColor: theme.palette.primary.main,
		},
	},
	placesListText: {
		textAlign: 'center',
	},
});

const places=["REGIÃO CENTRAL","","BRO FELIZ","BRO JARDIM AMÉRICA","BRO NOVA SUÍÇA","PRQ INDUSTRIAL DE GOIÂNIA","SET AEROPORTO","SET BELA VISTA","SET BUENO","SET CAMPINAS","SET CENTRAL","SET CENTRO OESTE","SET COIMBRA","SET DOS FUNCIONÁRIOS","SET LESTE UNIVERSITÁRIO","SET LESTE VILA NOVA","SET MARISTA","SET MEIA PONTE","SET MORAIS","SET NEGRÃO DE LIMA","SET OESTE","SET SOL NASCENTE","SET SUL","VI ABAJÁ","VI MORAIS","","REGIÃO SUL","","BRO ALTO DA GLÓRIA","BRO DA SERRINHA","BRO JARDIM AMÉRICA","BRO JARDIM DAS ESMERALDAS","BRO NOVA SUÍÇA","CH ALTO DA GLÓRIA","JD ATENAS","JD ATLÂNTICO","JD BELA VISTA","JD GOIÁS","JD SANTO ANTÔNIO","JD VITÓRIA","LOT ALPHAVILLE FLAMBOYANT","LOT AREIÃO I","LOT PORTAL DO SOL I","LOT PORTAL DO SOL II","PRQ AMAZÔNIA","PRQ ATHENEU","PRQ DAS LARANJEIRAS","PRQ FLAMBOYANT","SET AREIÃO II","SET PEDRO LUDOVICO","VI ALTO DA GLÓRIA","VI REDENÇÃO","","REGIÃO SUDOESTE","","BRO ANHANGUERA","BRO CIDADE JARDIM","BRO SANTA RITA","COD SANTA RITA 2 ETAPA","JD ELI FORTES COMPLEMENTO","JD EUROPA","JD PLANALTO","JD VILA BOA","LOT CELINA PARK","LOT FAIÇALVILLE","LOT MOINHO DOS VENTOS","PRQ ANHANGUERA","PRQ OESTE INDUSTRIAL","RES CENTER VILLE","RES ELDORADO","RES ELI FORTE","RES GRANVILLE","RES VEREDA DOS BURITIS","SET SOL NASCENTE","SET SUDOESTE","VI ALPES","","REGIÃO OESTE","","BRO CIDADE JARDIM","BRO GOIÁ","BRO GOIÁ 2","BRO GOIÁ 2 COMPLEMENTO","BRO GOIÁ IV","BRO GOIÁ SETOR VELOSO","BRO INDUSTRIAL MOOCA","BRO JARDIM BOTÂNICO","BRO NOSSA SENHORA DE FÁTIMA","BRO RODOVIÁRIO","CONJ VERA CRUZ","FAZ SÃO JOSÉ","GRJ SANTA LUZIA","GRJ SANTOS DUMONT","JD ELI FORTE","LOT CAROLINA PARQUE","LOT LORENA PARQUE","LOT SOLANGE PARQUE I","PRQ ELDORADO OESTE","PRQ INDUSTRIAL JOÃO BRAZ 2","PRQ JOÃO BRAZ ","PRQ OESTE INDUSTRIAL","PRQ SANTA RITA","RES GOIÂNIA VIVA","RES PARQUE OESTE","","REGIÃO MENDANHA","","BRO CAPUAVA","BRO DOS AEROVIÁRIOS","BRO SÃO FRANCISCO","CH DE RECREIO SÃO JOAQUIM","COD SETOR MAYSA","CONJ PADRE PELÁGIO-SET SÃO JOSÉ","ESP DO ANICUNS","JD BONANZA","JD LEBLON","JD NOVA ESPERANÇA","JD PETRÓPOLIS","RES ITAMARACÁ","RES SOLAR VILLE","SET CÂNDIDA DE MORAIS","SET EMPRESARIAL","SET PERIM","SET PERIM CONTINUAÇÃO","SET PROGRESSO","SET SANTA RITA","SET SANTOS DUMONT","SET SÃO JOSÉ","SIT DE R DOS BANDEIRANTES","VI CLEMENTE","VI CRISTINA","VI JOÃO VAZ","VI MARIA DILCE","VI REGINA","","REGIÃO NOROESTE","","BRO BOA VISTA","CH DE RECREIO SÃO JOAQUIM","COD ESTRELA DALVA","COD MORADA DO SOL","COD TREMENDÃO ","FAZ SÃO DOMINGOS","JD COLORADO","JD COLORADO SUL","JD CURITIBA","JD DAS HORTÊNCIAS","JD ESTRELA DALVA","JD FONTE NOVA","JD LIBERDADE","JD VISTA BELA","REC PANORAMA","SET ESTRELA DALVA","SET MORADA DO SOL","SET NOROESTE","SET NOVO PLANALTO","SET PARQUE TREMENDÃO","SIT DE RECREIO PANORAMA","SIT SÃO DOMINGOS","VI FINSOCIAL","VI MARIA DILCE","VI MUTIRÃO I","","REGIÃO VALE MEIA PONTE","","CH CRIMEIA","JD BALNEÁRIO MEIA PONTE","LOT NOVA VILA","LOT RECANTO BARRAVENTO ","PRQ BALNEÁRIO","PRQ DAS FLORES","PRQ DAS NAÇÕES","REC PANORAMA","RES BALNEÁRIO","RES BARRAVENTO","RES BRISAS DA MATA","SET CAMPINAS","SET CENTRO OESTE","SET CRIMEIA LESTE","SET CRIMEIA OESTE","SET GENTIL MEIRELLES","SET MARECHAL RONDON","SET NORTE FERROVIÁRIO","SET NORTE FERROVIÁRIO II","SET URIAS MAGALHÃES","SET URIAS MAGALHÃES II","SIT DE RECREIO PANORAMA","VI ABAJÁ","VI FERNANDES","VI FROES","VI IRANY","VI ISAURA","VI JACARÉ","VI JARAGUÁ","VI MARIA DILCE","VI SANTA HELENA","VI SANTANA","VI SÃO FRANCISCO","","REGIÃO NORTE","","AER INTERNACIONAL SANTA GENOVEVA","ÁREA DO QUARTEL DO EXERCITO","BRO SANTA GENOVEVA","JD GUANABARA","JD GUANABARA II","JD GUANABARA III","JD GUANABARA IV","LOT GOIÂNIA 2","SET JAÓ","VI ITATIAIA","VI JARDIM POMPEIA","VI JARDIM SÃO JUDAS TADEU","","REGIÃO LESTE","","BRO ÁGUA BRANCA","BRO JARDIM CALIFÓRNIA","BRO SANTO HILÁRIO","BRO SANTO HILÁRIO II","CONJ RIVIERA","JD MARIA HELENA","JD NOVO MUNDO","JD NOVO MUNDO II","PRQ DAS AMENDOEIRAS","SET RECANTO DAS MINAS GERAIS","VL ÁGUA BRANCA","VI BANDEIRANTES","VI CONCÓRDIA","VL GALVÃO","VL MARIA LUIZA","VI MARTINS","VI MATILDE","VI MORAIS","VI PEDROSO"]

class FreeShipping extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		//<div className={classes.map}><span className={classes.mapImg}></span></div>
		const { classes } = this.props;
		return <React.Fragment>
			<Typography variant="h4" align='center' gutterBottom>
				Entrega Grátis
			</Typography>
			<Typography variant="body1" align='center' gutterBottom>
				<p>Toda semana, na <b>quarta-feira</b>, é realizada a <b>entrega grátis</b> - uma série de entregas totalmente custeadas pela <b>Bela Lily</b>!</p>
				<p>Sim, você não leu errado: nessa modalidade suas roupas chegam na sua casa (ou um outro local de sua escolha) <b>sem nenhum custo</b> de entrega para você!</p>
				<p>Para que o seu pedido chegue na <b>quarta-feira mais próxima</b>, é preciso que ele seja realizado até a <b>terça-feira antecedente, às 20:00</b>. Caso seja feito após esse horário, a entrega grátis será realizada na quarta-feira da semana seguinte.</p>
				<p>Por enquanto, essa modalidade é oferecida somente para alguns bairros de Goiânia, mas a Bela Lily está trabalhando para ampliar o seu alcance!</p>
				<p>Confira no mapa a seguir os bairros contemplados:</p>
			</Typography>
			<Typography variant="h5" align='center' gutterBottom>
				Área de cobertura
			</Typography>
			<Paper className={classes.placesPaper}>
			<div className={classes.map}><img style={{width: '100%', maxWidth: '1024px'}}src='./assets/image/freeshipping/map1.png'/></div>
			
				<List dense className={classes.placesList}>
					{places.map((p, i) => {
						return <ListItem>
							<ListItemText key={i} className={classes.placesListText} primary={p} />
						</ListItem>
					})}
				</List>
			</Paper>
			<Typography variant="h4" align='center' gutterBottom>
				Outras modalidades de entrega
			</Typography>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={classes.heading}>Entrega Normal</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						<p>Nessa modalidade, a entrega será por sua conta, em até <b>dois dias úteis</b>.</p>
						<p>O valor da entrega será calculado de acordo com a distância do local escolhido por você e o nosso centro de distribuição, conforme as seguintes regras:</p>
						<p>Raio de 5 Km R$ 2,00<br/>
							Raio de 10 km R$ 5,00<br/>
							Raio de 11 km até qualquer região de Goiânia R$ 10,00<br/>
							Aparecida de Goiânia R$ 15,00<br/>
							Trindade R$ 15,00<br/>
							Goianira R$ 20,00</p>
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={classes.heading}>Entrega Expressa</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
					<p>Nessa modalidade, a entrega será por sua conta, <b>ainda hoje</b> (válido somente para pedidos finalizados até às 15:00, em dias úteis).</p>
						<p>O valor da entrega será calculado de acordo com a distância do local escolhido por você e o nosso centro de distribuição, conforme as seguintes regras:</p>
						<p>Raio de 5 Km R$ 5,00<br/>
							Raio de 10 km R$ 10,00<br/>
							Raio de 11 km até qualquer região de Goiânia R$ 20,00<br/>
							Aparecida de Goiânia R$ 30,00<br/>
							Trindade R$ 30,00<br/>
							Goianira R$ 35,00</p>
					</Typography>
				</AccordionDetails>
			</Accordion>
		</React.Fragment>
		/*<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={classes.heading}>Uber Flash</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						<p>Nessa modalidade, a entrega será por sua conta, em um <b>dia</b> útil <b>e horário de sua escolha</b>.</p>
						<p>Os valores dessa entrega serão determinados pela Uber.</p>
					</Typography>
				</AccordionDetails>
			</Accordion>*/
	}

}

export default withStyles(useStyles)(FreeShipping)