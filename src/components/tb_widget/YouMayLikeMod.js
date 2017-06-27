import React, { Component } from 'react';
import { Link } from 'react-router'

const productions = [{
    pname:'[为你推荐]劳保鞋男钢头鞋防砸防刺穿钢板实心底耐磨防臭透气安全工作鞋包邮',
    purl:'',
    pimg:'//img.alicdn.com/bao/uploaded/i4/2989366224/TB2uJ_FdUlnpuFjSZFjXXXTaVXa_!!2989366224.jpg_q50.jpg',
    prc:'15.00'
},{
    pname:'[为你推荐]铜师傅 全铜挂件 《财神（车挂 ）》 家居工艺品装饰品 饰品',
    purl:'',
    pimg:'//img.alicdn.com/bao/uploaded/i3/TB1NiJKNVXXXXbZXXXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg',
    prc:'9.00'
},{
    pname:'[为你推荐]冰垫卡通创意水垫可爱学生注水坐垫汽车用夏季宠物降温办公椅垫子',
    purl:'',
    pimg:'//img.alicdn.com/bao/uploaded/i1/2557721083/TB24Diul1J8puFjy1XbXXagqVXa_!!2557721083.jpg_q50.jpg',
    prc:'26.00'
},{
    pname:'[为你推荐]儿童沙发椅 卧室阳台宝宝沙发幼乐园生日礼物玩具沙发 小孩子沙发',
    purl:'',
    pimg:'//img.alicdn.com/bao/uploaded/i1/2201330028/TB2AiqDqFXXXXXSXpXXXXXXXXXX_!!2201330028.jpg_q50.jpg',
    prc:'256.00'
},{
    pname:'[为你推荐]大容量化妆包韩国小号便携手提化妆箱 双层硬的收纳包 专业洗漱包',
    purl:'',
    pimg:'//img.alicdn.com/bao/uploaded/i4/TB1z1CJPXXXXXaOaXXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg',
    prc:'22.00'
},{
    pname:'[为你推荐]日式茶具整套功夫茶具套装陶瓷提梁壶杯茶盘普洱茶具茶道家用礼品',
    purl:'',
    pimg:'//img.alicdn.com/bao/uploaded/i2/TB1SQt3RVXXXXX6XXXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg',
    prc:'26.00'
},{
    pname:'[为你推荐]日式茶具整套功夫茶具套装陶瓷提梁壶杯茶盘普洱茶具茶道家用礼品',
    purl:'',
    pimg:'//img.alicdn.com/bao/uploaded/i2/TB1SQt3RVXXXXX6XXXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg',
    prc:'226.00'
},{
    pname:'[为你推荐]沃趣儿童床男孩 1.5米童趣卡通海盗船学生床美式青少年单人床储物',
    purl:'',
    pimg:'//img.alicdn.com/bao/uploaded/i1/1593908849/TB2iQO.al8lpuFjSspaXXXJKpXa_!!1593908849.png',
    prc:'378.00'
}]

export default function YouMayLikeMod(props){
    return (
        <div className="maylike-mod">
            <div className="maylike-hd">
                <p className="title">
                    <i className="icon iconfont"></i>
                    <span>猜你喜欢</span>
                </p>
                <p  className="sub">实时推荐最适合你的宝贝</p>
            </div>
            <div className="maylike-list">
                {
                    productions.map((item,index)=>{
                        return (
                            <div className="p-mod" key={`plist_${index}`}>
                                <a href="">
                                    <div  className="p-img"  style={{backgroundImage:`url(${item.pimg})`}}/>
                                    <div className="p-mod-ft">
                                        <p className="p-desc" style={{WebkitBoxOrient:'vertical'}}>
                                        {item.pname}
                                        </p>
                                        <p className="p-price">
                                            ￥{item.prc}
                                        </p>
                                    </div>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}