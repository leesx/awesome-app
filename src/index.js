import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import "babel-polyfill";

import './assets/style/App.less';
//import './style/weui.less';
import './utils/flexible.js'

import Home from 'components/Home';
import SearchPage from 'components/pages/SearchPage.js';
import TaobaoHome from 'components/pages/TaobaoHome.js';


{/* <ReactCSSTransitionGroup
		component="div"
		transitionName="page"
		transitionEnterTimeout={500}
		transitionLeaveTimeout={500}
>
				{React.cloneElement(this.props.children, {
								key: this.props.location.pathname
				})}
</ReactCSSTransitionGroup> */}

class App extends React.Component {
        render() {
            return (
                <div>
                    {React.cloneElement(this.props.children, {
                            key: this.props.location.pathname
                    })}
                </div>
            );
        }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
			<IndexRedirect  to="/news/news_all" />
			<Route path="/news/:cid" component={Home} />
			<Route path="/search" component={SearchPage} />
			<Route path="/taobao" component={TaobaoHome} />
    </Route>
  </Router>
), document.getElementById('root'))
