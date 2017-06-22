import React, { Component } from 'react';
import { Link,hashHistory } from 'react-router'

export default class Navigator extends Component{
  constructor(props){
    super(props)
    this.state = {
      dataSource:[],
    }
  }


	componentWillReceiveProps(nextProps,nextState){
		console.log(this.props,nextProps)
	}



  render(){
		const {title,rightComponent} = this.props.initialRoute
    return (
      <div className="navigator">

				<a className="go-back" onClick={()=>hashHistory.goBack()} > <span>后退</span> </a>
				<div className="title">{title}</div>
				{rightComponent}

      </div>
    )
  }
}
