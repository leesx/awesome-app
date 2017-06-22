import React, { Component } from 'react';
import { Link } from 'react-router'

export default class TaobaoHome extends Component{
	state={}

	render(){
		return (
			<div className="tb-header">
				<div className="logo"></div>
				<div className="search-wrap">
					<div className="placeholder">
						<i className="icon iconfont"></i>
						<span>寻找宝贝店铺</span>
					</div>
					<input />
				</div>
			</div>
		)
	}
}
