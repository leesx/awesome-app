import React, { Component } from 'react';

export default class ChnItem extends Component{
  constructor(props){
    super(props)
  }

  componentWillMount(){
    //console.log(this.props)
  }
  render(){
    const {imglist=[],title,desc} = this.props
    if(!imglist.length ) return <div></div>;

    if(imglist.length === 3){
      return (
        <li className="list-item">
          <a className="item-link">
            <div className="title">{title}</div>
            <ul className="imglist">
                {
                  imglist.map((item,index)=>{
                    return <li className="imgitem" key={`imglist_${index}`}><img  src={item.url} /></li>
                  })
                }
              </ul>
          </a>
        </li>
      )
    }

  }
}
