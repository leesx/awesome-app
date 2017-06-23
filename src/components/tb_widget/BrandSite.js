import React, { Component } from 'react';
import { Link } from 'react-router'



const LINE1_SITE =[
	{
		name:'天猫',
		logoUrl:'//gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png?imgtag=avatar',
		siteUrl:''
	},
	{
		name:'聚划算',
		logoUrl:'//gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png?imgtag=avatar',
		siteUrl:''
	},
	{
		name:'天猫国际',
		logoUrl:'//gw.alicdn.com/tps/TB1PlmNLVXXXXXEXFXXXXXXXXXX-183-129.png?imgtag=avatar',
		siteUrl:''
	},
	{
		name:'外卖',
		logoUrl:'//gw.alicdn.com/tps/TB1RN0HMFXXXXXNXpXXXXXXXXXX-183-129.png?imgtag=avatar',
		siteUrl:''
	},
	{
		name:'天猫超市',
		logoUrl:'//gw.alicdn.com/tps/TB1exaOLVXXXXXeXFXXXXXXXXXX-183-129.png?imgtag=avatar',
		siteUrl:''
	},
]

const LINE2_SITE = [
		{
		name:'充值中心',
		logoUrl:'//img.alicdn.com/tps/TB1GzMJLXXXXXXoXXXXXXXXXXXX-183-129.png',
		siteUrl:''
		},
		{
			name:'飞猪',
			logoUrl:'//gw.alicdn.com/tps/TB1LNMxPXXXXXbhaXXXXXXXXXXX-183-129.png',
			siteUrl:''
		},
		{
			name:'领金币',
			logoUrl:'//gw.alicdn.com/tps/TB1cniBJpXXXXataXXXXXXXXXXX-183-129.png?imgtag=avatar',
			siteUrl:''
		},
		{
			name:'拍卖',
			logoUrl:'//img.alicdn.com/tfs/TB1Kxe8QFXXXXbSXVXXXXXXXXXX-183-129.png',
			siteUrl:''
		},
		{
			name:'分类',
			logoUrl:'//gw.alicdn.com/tps/i1/TB1c1FMIpXXXXawXpXXN4ls0XXX-183-129.png?imgtag=avatar',
			siteUrl:''
		},
]
export default function BrandSite(props){
	
	return (
		<div className="brand-site">
			<div>
				{
					LINE1_SITE.map((item,index)=>{
						return (
							<Link key={`BRAND_LOGO_${index}`} className="site-item" to={item.siteUrl}>
								<i className="logo" style={{backgroundImage:`url(${item.logoUrl})`}}></i>
								<span>{item.name}</span>
							</Link>
						)
					})
				}
			</div>
			<div>
				{
					LINE2_SITE.map((item,index)=>{
						return (
							<Link key={`BRAND_LOGO_${index}`} className="site-item" to={item.siteUrl}>
								<i className="logo" style={{backgroundImage:`url(${item.logoUrl})`}}></i>
								<span>{item.name}</span>
							</Link>
						)
					})
				}
			</div>
		</div>
	)
}
