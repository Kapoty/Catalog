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

const questions = [{q: `Qual o horário de atendimento?`, a: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
					sit amet blandit leo lobortis eget.`},
					{q: `Quais os métodos de pagamento aceitos?`, a: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
					sit amet blandit leo lobortis eget.`},
					{q: `Posso retirar na loja?`, a: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
					sit amet blandit leo lobortis eget.`},
					{q: `Qual a política de devolução?`, a: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
					sit amet blandit leo lobortis eget.`},
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

	search() {
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
							{q.a}
							</Typography>
						</AccordionDetails>
					</Accordion> : ''
			}))}
		</React.Fragment>
	}

}

export default withStyles(useStyles)(FAQ)