import React, { Component } from 'react';
import { Link } from 'react-router'
import pureRender from "pure-render-decorator"

@pureRender
export default class ChnGroup extends Component {
  constructor(props){
    super(props)
    this.state={
      tags:[
        {
          cid:'news_all',
          name:'推荐'
        },
				{
          cid:'news_fashion',
          name:'时尚'
        },
        {
          cid:'video',
          name:'视频'
        },
        {
          cid:'news_society',
          name:'社会'
        },
        {
          cid:'news_entertainment',
          name:'娱乐'
        },
        {
          cid:'news_military',
          name:'军事'
        },
        {
          cid:'news_tech',
          name:'科技'
        },
        {
          cid:'news_car',
          name:'汽车'
        },
        {
          cid:'news_sports',
          name:'体育'
        },
        {
          cid:'news_finance',
          name:'财经'
        },
				{
          cid:'news_world',
          name:'国际'
        },

      ]
    }
  }
  render() {
    const { tags } = this.state
    return (
      <div className="channel-tags-wrap">
        <div className="channel-tags-list">
          {
            tags.map((item,index)=>{
              return <Link to={`/news/${item.cid}`} activeClassName="active" key={`navitem_${index}`}>{item.name}</Link>
            })
          }
        </div>
      </div>
    );
  }
}
