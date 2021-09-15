import React from "react";

import {withStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import Badge from '@material-ui/core/Badge';

const useStyles = (theme) => ({
root: {
position: 'fixed',
bottom: '0px',
width: '100%'
},
});

const StyledBadge = withStyles((theme) => ({
badge: {
right: -3,
top: 13,
border: `2px solid #FFFFFF`,
padding: '0 4px',
},
}))(Badge);

class BottomNav extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { classes } = this.props;
		return <React.Fragment>
			<BottomNavigation value={this.props.location.pathname == "/sacola" ? 1 : 0} onChange={(event, newValue) => {
			switch(newValue) {
				case 0:
					this.props.history.push('/');
				break;
				case 1:
					this.props.history.push('/sacola');
				break;
				}
			}} showLabels className={classes.root}>
			<BottomNavigationAction label="Catálogo" icon={<PhotoAlbumIcon />} />
			<BottomNavigationAction label="Sacola" icon={<StyledBadge badgeContent={this.props.bagQnt} color="secondary">
														<LocalMallIcon />
														</StyledBadge>}
														/>
			</BottomNavigation>
			<BottomNavigation></BottomNavigation>
		</React.Fragment>
	}

}

export default withStyles(useStyles)(BottomNav)