import React from "react";
import ReactDOM from "react-dom";

import MainRoute from "routes/MainRoute";
import SoonRoute from "routes/SoonRoute";
import { useHistory } from 'react-router';
import 'assets/css/general.css';

import { BrowserRouter as Router, Route, Link, HashRouter, Switch} from "react-router-dom";

class SiteRouter extends React.Component {

   render() {
      return <HashRouter>
               <React.Fragment>
               		 <div id="app">
               		 	<Switch>
                           <Route path="/" component={MainRoute} />
                     	</Switch>
                     </div>
               </React.Fragment>
            </HashRouter>
   }
}

ReactDOM.render(<SiteRouter/>, document.getElementById("root"));