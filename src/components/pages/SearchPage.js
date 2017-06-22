import React, { Component } from 'react';
// import { Lifecycle } from 'react-router'
import Navigator from './../widget/Navigator.js'


export default class SearchPage extends Component{
	state={}

	componentWillReceiveProps(nextProps,nextState){
		console.log(this.props,nextProps)
	}


	render(){
		return (
			<div>
				<Navigator initialRoute={{
						title:'搜索',
					}} />
				<div className="tt-search-wrap">
					<div className="inner">
						<i className="icon iconfont icon-browse_fill"></i>
						<input placeholder="请输入搜索内容..." />
					</div>
				</div>
			</div>
		)
	}
}
