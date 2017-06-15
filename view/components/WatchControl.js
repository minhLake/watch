import React,{Component} from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from '../style.js';

class WatchControl extends Component{
  static propTypes = {

  }; 


  render() {

    return(
      <View style={styles.watchControlContainer}>
        <View style={styles.btnStopContainer}>
          <TouchableHighlight style={styles.btnStop} underlayColor={this.props.data.btnStopUnderlayColor}>
            <Text style={[styles.btnStopText,{color:this.props.data.stopBtnTextColor}]}>{this.props.data.stopBtnText}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.btnStartContainer}>
          <TouchableHighlight style={styles.btnStart} underlayColor={this.props.data.btnStartUnderlayColor}>
            <Text style={[styles.btnStartText,{color:this.props.data.startBtnTextColor}]}>{this.props.data.startBtnText}</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

export default WatchControl;