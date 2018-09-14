import React,{Component} from 'react';
import { View } from 'react-native';

import styles from '../style.js';

import WatchFace from '../components/WatchFace.js';
import WatchControl from '../components/WatchControl.js';
import WatchRecord from '../components/WatchRecord.js';

class Watch extends Component {
	constructor() {
		super();
		this.state = {
			stopWatch: false,
			resetWatch: true,
			watchOn: false,
			initalTime: 0,
			currentTime: 0,
			recordTime: 0,
			timeAccumulation: 0, 
			totalTime: "00:00.00",
			sectionTime: "00:00.00", 
		    startBtnText: "启动",
		    startBtnTextColor: "#60B644",
		    startBtnUnderlayColor: "#eee",
		    stopBtnText: "计次",
		    stopBtnTextColor: "#555",
		    stopBtnUnderlayColor:"#fff",
		    record:[
		        {title:"",time:""},
		        {title:"",time:""},
		        {title:"",time:""},
		        {title:"",time:""},
		        {title:"",time:""},
		        {title:"",time:""},
		        {title:"",time:""}
	        ],
		}
	}
	componentWillUnmount() {
	    this._stopWatch();
	    this._clearRecord();
	}
	componentDidMount() {

	}
	_clearRecord() {
	    this.setState({
	        stopWatch: false,
	        resetWatch: true,
	        intialTime: 0,
	        currentTime:0,
	        recordTime:0,
	        timeAccumulation:0,
	        totalTime: "00:00.00",
	        sectionTime: "00:00.00",
	        recordCounter: 0,
	        record:[
	          {title:"",time:""},
	          {title:"",time:""},
	          {title:"",time:""},
	          {title:"",time:""},
	          {title:"",time:""},
	          {title:"",time:""},
	          {title:"",time:""}
	        ],
	    });
  }
	_startWatch() {
		if(this.state.resetWatch){
			this.setState({
				stopWatch: false,
				resetWatch: false,
				timeAccumulation: 0,
				initalTime: (new Date()).getTime()
			});
		}else{
			this.setState({
				stopWatch: false,
				initalTime: (new Date()).getTime()
			})
		}
    	let milSecond, second, minute, countingTime, secmilSecond, secsecond, secminute, seccountingTime;
    	let interval = setInterval(
    		()=>{
    			this.setState({
    				currentTime: (new Date()).getTime()
    			})
    			countingTime = this.state.timeAccumulation + this.state.currentTime - this.state.initalTime;
    			minute = Math.floor(countingTime/(60*1000));
    			second = Math.floor((countingTime-6000*minute)/1000);
    			milSecond = Math.floor((countingTime%1000)/10);
    			seccountingTime = countingTime -this.state.recordTime;
	            secminute = Math.floor(seccountingTime/(60*1000));
	            secsecond = Math.floor((seccountingTime-6000*secminute)/1000);
	            secmilSecond = Math.floor((seccountingTime%1000)/10);
	            this.setState({
	            	totalTime: (minute<10? "0"+minute:minute)+":"+(second<10? "0"+second:second)+"."+(milSecond<10? "0"+milSecond:milSecond),
            		sectionTime: (secminute<10? "0"+secminute:secminute)+":"+(secsecond<10? "0"+secsecond:secsecond)+"."+(secmilSecond<10? "0"+secmilSecond:secmilSecond),

	            });
	            if(this.state.stopWatch){
	            	this.setState({
	            		timeAccumulation:countingTime
	            	});
	            	clearInterval(interval);
	            }
    		},100
    	);
	}
	_stopWatch() {
		this.setState({
			stopWatch: true
		});
	}

	_addRecord() {
	    let {recordCounter, record} = this.state;
	    recordCounter++;
	    if (recordCounter<6) {
	      record.pop();
	    }
	    record.unshift({title:"计次"+recordCounter,time:this.state.sectionTime});
	    this.setState({
	      recordTime: this.state.timeAccumulation + this.state.currentTime - this.state.initalTime,
	      recordCounter: recordCounter,
	      record: record
	    });
	}
	_watchStartOrStop() {
		if(!this.state.watchOn){
			this._startWatch();
			this.setState({
				startBtnText: "停止",
		        startBtnTextColor: "#ff0044",
		        stopBtnText: "计次",
		        underlayColor:"#eee",
		        watchOn: true
    		});

		}else{
			this._stopWatch();
			this.setState({
		        startBtnText: "启动",
		        startBtnTextColor: "#60B644",
		        stopBtnText: "复位",
		        underlayColor:"#eee",
		        watchOn: false
			});
		}
	}
	_watchTimesOrReset() {
	    if (this.state.watchOn) {
			this._addRecord();
	    }else{
	    	this._clearRecord();
	        this.setState({
	        stopBtnText: "计次"
	      })
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
	        <WatchControl data={controlData} btnStartAction={this._watchStartOrStop.bind(this)} btnStopAction={this._watchTimesOrReset.bind(this)}></WatchControl>
	        <WatchRecord record={this.state.record}></WatchRecord>
	      </View>
		);

	}
}


export default Watch;