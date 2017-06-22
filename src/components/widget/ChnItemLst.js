import React, { Component } from 'react';
import axios from 'axios';
import ChnItem from './ChnItem.js'



export default class ChnItemLst extends Component{
  constructor(props){
    super(props)
    this.state = {
      dataSource:[],
    }
  }


	componentWillReceiveProps(nextProps,nextState){
		console.log(this.props,nextProps)
	}

  renderItem(){
    const { dataSource } = this.props

    if(!dataSource.length) return (<div>加载zhong....</div>);
    return dataSource.map((item,index)=>{
      return <ChnItem key={`ChnItem_${index}`} title={item.title} imglist={item.image_list}  />
    })
  }

  render(){
    return (
      <ul>
        {this.renderItem()}
      </ul>
    )
  }
}
