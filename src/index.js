import React from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';

//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import "babel-polyfill";

import './assets/style/App.less';
//import './style/weui.less';
import './utils/flexible.js';



import Home from 'components/Home.js';
import SearchPage from 'components/pages/SearchPage.js';
import TaobaoHome from 'components/pages/TaobaoHome.js';

//性能调优工具
import Perf from 'react-addons-perf';

//import ReactPerfTool from 'react-perf-tool';
//import 'react-perf-tool/lib/styles.css';
if(process.env.NODE_ENV === 'development'){

  window.Perf = Perf;
}

//无状态组件
function App(props){
  return (
    <div>
        {React.cloneElement(props.children, {
                key: props.location.pathname
        })}
        
    </div>
  )
}


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
			<IndexRedirect  to="/news/news_all" />
			<Route path="/news/:cid" component={Home} />
			<Route path="/search" component={SearchPage} />
			<Route path="/taobao" component={TaobaoHome} />
    </Route>
  </Router>
), document.getElementById('root'))
