import React,{Component} from 'react';
import { Text, View } from 'react-native';

import styles from '../style.js';
import todo from '../Todo.js';

import WatchFace from '../components/WatchFace.js';
import WatchControl from '../components/WatchControl.js';
import WatchRecord from '../components/WatchRecord.js';

class Watch extends Component {
	constructor() {
		super();
		this.state = {
			totalTime: "00:00.00",
			sectionTime: "00:00.00", 
			watchOn: false, 
		    startBtnText: "启动",
		    startBtnTextColor: "#60B644",
		    startBtnUnderlayColor: "#eee",
		    stopBtnText: "计次",
		    stopBtnTextColor: "#555",
		    stopBtnUnderlayColor:"#fff",
		    record:[
		        {title:"test1",time:"00:00.00"},
		        {title:"test2",time:"00:00.00"},
		        {title:"",time:""},
		        {title:"",time:""},
		        {title:"",time:""},
		        {title:"",time:""},
		        {title:"",time:""}
	        ],
		}
	}

	render() {
		let controlData = {
			watchOn: this.state.watchOn, 
		    startBtnText: this.state.startBtnText,
		    startBtnTextColor: this.state.startBtnTextColor,
		    startBtnUnderlayColor:this.state.startBtnUnderlayColor,
		    stopBtnText: this.state.stopBtnText,
		    stopBtnTextColor: this.state.stopBtnTextColor,
		    stopBtnUnderlayColor:this.state.stopBtnUnderlayColor,
		}
		return(
	      <View style={styles.watchContainer}>
	        <WatchFace totalTime={this.state.totalTime} sectionTime={this.state.sectionTime}></WatchFace>
	        <WatchControl data={controlData}></WatchControl>
	        <WatchRecord record={this.state.record}></WatchRecord>
	      </View>
		);

	}
}


export default Watch;