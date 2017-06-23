import React, { Component } from 'react';
import { Link } from 'react-router'

export default function TaobaoHome(props){
	
	return (
		<div className="fixed sticky tb-header">
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
