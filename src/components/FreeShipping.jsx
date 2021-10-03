import React from "react";

import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
	places: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		margin: theme.spacing(2,0),
	},
	placesTypo: {
		margin: '5px',
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightBold
	}
});

class FreeShipping extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { classes } = this.props;
		return <React.Fragment>
			<Typography variant="h4" align='center' gutterBottom>
				Entrega Grátis
			</Typography>
			<Typography variant="body1" align='center' gutterBottom>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla dui, cursus ut scelerisque at, vulputate eu dolor. Pellentesque imperdiet, quam vitae mattis vulputate, lacus urna lacinia eros, quis fermentum ligula mi id ante. Quisque nec molestie urna. Vivamus id ante a ante ultricies luctus a vitae orci. Cras pulvinar dapibus sodales.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla dui, cursus ut scelerisque at, vulputate eu dolor. Pellentesque imperdiet, quam vitae mattis vulputate, lacus urna lacinia eros, quis fermentum ligula mi id ante. Quisque nec molestie urna. Vivamus id ante a ante ultricies luctus a vitae orci. Cras pulvinar dapibus sodales.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla dui, cursus ut scelerisque at, vulputate eu dolor. Pellentesque imperdiet, quam vitae mattis vulputate, lacus urna lacinia eros, quis fermentum ligula mi id ante. Quisque nec molestie urna. Vivamus id ante a ante ultricies luctus a vitae orci. Cras pulvinar dapibus sodales.</p>
			</Typography>
			<Typography variant="h5" align='center' gutterBottom>
				Área de atuação
			</Typography>
			<div className={classes.map}><span className={classes.mapImg}></span></div>
			<div className={classes.places}>
				<Typography className={classes.placesTypo}>Bairro 1</Typography>
				<Typography className={classes.placesTypo}>Bairro 2</Typography>
				<Typography className={classes.placesTypo}>Bairro 3</Typography>
				<Typography className={classes.placesTypo}>Bairro 4</Typography>
				<Typography className={classes.placesTypo}>Bairro 5</Typography>
				<Typography className={classes.placesTypo}>Bairro 6</Typography>
				<Typography className={classes.placesTypo}>Bairro 7</Typography>
			</div>
			<Typography variant="body1" align='center' gutterBottom>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla dui, cursus ut scelerisque at, vulputate eu dolor. Pellentesque imperdiet, quam vitae mattis vulputate, lacus urna lacinia eros, quis fermentum ligula mi id ante. Quisque nec molestie urna. Vivamus id ante a ante ultricies luctus a vitae orci. Cras pulvinar dapibus sodales.</p>
			</Typography>
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
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla dui, cursus ut scelerisque at, vulputate eu dolor. Pellentesque imperdiet, quam vitae mattis vulputate, lacus urna lacinia eros, quis fermentum ligula mi id ante. Quisque nec molestie urna. Vivamus id ante a ante ultricies luctus a vitae orci. Cras pulvinar dapibus sodales.</p>
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
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla dui, cursus ut scelerisque at, vulputate eu dolor. Pellentesque imperdiet, quam vitae mattis vulputate, lacus urna lacinia eros, quis fermentum ligula mi id ante. Quisque nec molestie urna. Vivamus id ante a ante ultricies luctus a vitae orci. Cras pulvinar dapibus sodales.</p>
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={classes.heading}>Uber Flash</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla dui, cursus ut scelerisque at, vulputate eu dolor. Pellentesque imperdiet, quam vitae mattis vulputate, lacus urna lacinia eros, quis fermentum ligula mi id ante. Quisque nec molestie urna. Vivamus id ante a ante ultricies luctus a vitae orci. Cras pulvinar dapibus sodales.</p>
					</Typography>
				</AccordionDetails>
			</Accordion>
		</React.Fragment>
	}

}

export default withStyles(useStyles)(FreeShipping)