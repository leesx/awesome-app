import React, { Component } from 'react';
import { Link } from 'react-router'

import TbHomeHeader from './../tb_widget/TbHomeHeader.js'
import BrandSite from './../tb_widget/BrandSite.js'
import TbNews from './../tb_widget/TbNews.js'
import AdsSection from './../tb_widget/AdsSection.js'
import YouMayLikeMod from './../tb_widget/YouMayLikeMod.js'

export default class TaobaoHome extends Component{
	state={}

	render(){
		return (
			<div>
				<TbHomeHeader />
				<div className="taobao-container">
					<div className="swipe-view">
						<img src="//gw.alicdn.com/imgextra/i1/37/TB2_ey7yipnpuFjSZFkXXc4ZpXa_!!37-0-luban.jpg_q50.jpg" />
					</div>
					<BrandSite />
					<TbNews />
					<AdsSection />
					<YouMayLikeMod />
				</div>
				
			</div>
		)
	}
}
