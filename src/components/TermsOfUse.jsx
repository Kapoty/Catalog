import React from "react";

import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = (theme) => ({
});

class TermsOfUse extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { classes } = this.props;
		return <React.Fragment>
			<Typography variant="h4" gutterBottom>
				1. Termos
			</Typography>
			<Typography variant="body1" gutterBottom>
				<p>Ao acessar ao site <b>Bela Lily</b>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</p>
			</Typography>
			<Typography variant="h4" gutterBottom>
				2. Uso de Licença
			</Typography>
			<Typography variant="body1" gutterBottom>
				<p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site <b>Bela Lily</b> , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: </p>
				<ol>
					<li>modificar ou copiar os materiais; </li>
					<li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial); </li>
					<li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site <b>Bela Lily</b>; </li>
					<li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou </li>
					<li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
				</ol>
				<p>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por <b>Bela Lily</b> a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.</p>
			</Typography>
			<Typography variant="h4" gutterBottom>
				3. Isenção de responsabilidade
			</Typography>
			<Typography variant="body1" gutterBottom>
				<ol>
					<li>Os materiais no site da <b>Bela Lily</b> são fornecidos 'como estão'. <b>Bela Lily</b> não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</li>
					<li>Além disso, o <b>Bela Lily</b> não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</li>
				</ol>
			</Typography>
			<Typography variant="h4" gutterBottom>
				4. Limitações
			</Typography>
			<Typography variant="body1" gutterBottom>
				<p>Em nenhum caso o <b>Bela Lily</b> ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em <b>Bela Lily</b>, mesmo que <b>Bela Lily</b> ou um representante autorizado da <b>Bela Lily</b> tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.</p>
			</Typography>
			<Typography variant="h4" gutterBottom>
				5. Precisão dos materiais
			</Typography>
			<Typography variant="body1" gutterBottom>
				<p>Os materiais exibidos no site da <b>Bela Lily</b> podem incluir erros técnicos, tipográficos ou fotográficos. <b>Bela Lily</b> não garante que qualquer material em seu site seja preciso, completo ou atual. <b>Bela Lily</b> pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, <b>Bela Lily</b> não se compromete a atualizar os materiais.</p>
			</Typography>
			<Typography variant="h4" gutterBottom>
				6. Links
			</Typography>
			<Typography variant="body1" gutterBottom>
				<p>O <b>Bela Lily</b> não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por <b>Bela Lily</b> do site. O uso de qualquer site vinculado é por conta e risco do usuário.</p>
			</Typography>
			<Typography variant="h5" gutterBottom>
				Modificações
			</Typography>
			<Typography variant="body1" gutterBottom>
				<p>O <b>Bela Lily</b> pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>
			</Typography>
			<Typography variant="h5" gutterBottom>
				Lei aplicável
			</Typography>
			<Typography variant="body1" gutterBottom>
				<p>Estes termos e condições são regidos e interpretados de acordo com as leis do <b>Bela Lily</b> e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</p>
			</Typography>
		</React.Fragment>
	}

}

export default withStyles(useStyles)(TermsOfUse)