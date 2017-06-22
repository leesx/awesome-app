import React, { Component } from 'react';
import { Link } from 'react-router'

export default class TbNews extends Component{
	state={}

	render(){
		return (
			<div className="tb-news-box">
				<span className="news-hd"></span>
				<div className="news-bd">
					<span className="tag">最新</span>
					<div className="news-list">
						<Link>出门到底要搞什么发型！这几款百搭！</Link>
					</div>
				</div>
			</div>
		)
	}
}
