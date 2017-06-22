import React, { Component } from 'react';
import { Link } from 'react-router'

export default class TabItem extends Component {
  render(){
    return (
      <div className="tab-list">
        <Link to={`/news/tuijian`}>
          <i className="icon iconfont icon-createtask_fill"></i>
          <span>资讯</span>
        </Link>
        <Link to="/taobao">
          <i className="icon iconfont icon-computer_fill"></i>
					<span>淘宝</span>
        </Link>
        <Link>
          <i className="icon iconfont icon-like_fill"></i>
          <span>收藏</span>
        </Link>
        <Link to="/aboutus">
          <i className="icon iconfont icon-addressbook_fill"></i>
          <span>我的</span>
        </Link>
      </div>
    )
  }
}
