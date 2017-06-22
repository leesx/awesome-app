import React, { Component } from 'react';
import { Link } from 'react-router'

class FixedTopbar extends Component{
  render(){
    return (
      <div className="topbar">
        <div className="email"><i className="icon iconfont icon-collection_fill"></i></div>
        <div className="title"></div>
				<Link to="/search" className="search">
            <i className="icon iconfont icon-emoji"></i>
        </Link>
      </div>
    )
  }
}

export default FixedTopbar
