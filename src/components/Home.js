import React, { Component } from 'react';
import pureRender from "pure-render-decorator"
import axios from 'axios'


import FixedTopbar from './widget/FixedTopbar.js'
import ChnGroup from './widget/ChnGroup.js'
import ChnItemLst from './widget/ChnItemLst.js'
import TabItem from './widget/TabItem.js'

import {data as allNewsData} from './../mock/news_all.js'
import {data as fashionData} from './../mock/news_fashion.js'
import {data as societyData} from './../mock/news_society.js'

@pureRender
export default class Home extends Component {
	state={
		dataSource:[]
	}
	componentDidMount(){
		this.fetchMockData()

		// axios.get('list?tag=news_hot&ac=wap&count=20&format=json_raw&as=A1D5F934BBA26C2&cp=594BA2C6DC222E1&min_behot_time=0').then((res) => {
		// 	console.log(res)
		// })
	}

	fetchMockData(){
		const {cid} = this.props.params
		console.log(cid)

		if(cid === 'news_all'){
			this.setState({
				dataSource:allNewsData.data
			})
		}else if(cid === 'news_fashion'){
			this.setState({
				dataSource:fashionData.data
			})
		}else if(cid === 'news_society'){
			this.setState({
				dataSource:societyData.data
			})
		}else{
			this.setState({
				dataSource:[]
			})
		}
	}
	componentWillReceiveProps(nextProps,nextState){
		this.fetchMockData()
	}
  render() {
		const { dataSource } = this.state
		console.log(dataSource)
    return (
      <div className="App">
        <div className="fixed-top">
          <FixedTopbar/>
          <ChnGroup />
        </div>
        <div className="scroll-view">
          <ChnItemLst dataSource={dataSource} />
        </div>

        <div className="fixed-bottom">
          <TabItem />
        </div>

      </div>
    );
  }
}

